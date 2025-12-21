import { AboutPage, ServicesPageCmsResponse, CmsResponse, OpenAccountPage, InvestorPage, ContactPage, HomePage } from './types';

export class CmsClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public getImageUrl(media: any): string {
        if (!media) return '';
        if (typeof media === 'string') return media;
        if (media.url) {
            return `${this.baseUrl}${media.url}`;
        }
        return '';
    }

    private async fetchCollection<T>(collection: string, query: string = ''): Promise<T | null> {
        try {
            const res = await fetch(`${this.baseUrl}/api/${collection}${query}`);
            if (!res.ok) throw new Error(`Failed to fetch ${collection}`);
            const json = await res.json() as CmsResponse<T>;
            return json.docs?.[0] || null;
        } catch (error) {
            console.error(`Error fetching ${collection}:`, error);
            return null;
        }
    }

    public async getServicesPage(): Promise<ServicesPageCmsResponse | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=services&depth=2');

        if (!page) return null;

        // Map the flat CMS structure to the expected Frontend structure
        return {
            heroTitle: page.servicesHeroTitle,
            heroDescription: page.servicesHeroDescription,
            serviceBlocks: page.serviceBlocks?.map((block: any) => ({
                title: block.title,
                serviceIcon: block.serviceIcon,
                description: block.description,
                features: block.features,
                sideBoxTitle: block.sideBoxTitle,
                sideBoxType: block.sideBoxType,
                sideBoxDescription: block.sideBoxDescription,
                sideBoxList: block.sideBoxList,
                ctaText: block.ctaText,
                ctaUrl: block.ctaUrl,
            })) || [],
            helpSection: {
                title: page.helpSectionTitle,
                description: page.helpSectionDescription,
                ctaText: page.helpSectionCtaText,
                ctaUrl: page.helpSectionCtaUrl,
            },
            disclaimer: {
                title: page.disclaimerTitle,
                text: page.disclaimerText,
            }
        };
    }

    public async getAboutPage(): Promise<AboutPage | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=about&depth=2');

        if (!page) return null;

        // Map RichText to array of strings
        let whoWeAreText: string[] = [];
        if (page.whoWeAreContent?.root?.children) {
            whoWeAreText = page.whoWeAreContent.root.children.map((child: any) =>
                child.children?.map((t: any) => t.text).join('')
            ).filter(Boolean);
        }

        return {
            heroTitle: page.heroTitle,
            heroDescription: page.heroDescription,
            whoWeAreTitle: page.whoWeAreTitle,
            whoWeAreContent: whoWeAreText,
            valuesTitle: page.valuesTitle,
            values: page.values?.map((v: any) => ({
                icon: v.valueIcon,
                title: v.title,
                description: v.description
            })) || [],
            complianceTitle: page.complianceTitle,
            licenses: page.licenses?.map((l: any) => ({
                icon: l.licenseIcon,
                title: l.title,
                description: l.description,
                licenseIdLabel: l.licenseIdLabel,
                licenseIdValue: l.licenseIdValue
            })) || [],
            leadershipTitle: page.leadershipTitle,
            leaders: page.leaders || [],
            commitmentTitle: page.commitmentTitle,
            commitmentDescription: page.commitmentDescription
        };
    }

    public async getInvestorPage(): Promise<InvestorPage | null> {
        try {
            const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=education&depth=2')
                || await this.fetchCollection<any>('pages', '?where[template][equals]=investor&depth=2');

            if (!page) return null;

            return {
                heroTitle: page.investorHeroTitle,
                heroDescription: page.investorHeroDescription,
                educationTopics: page.educationTopics?.map((t: any) => ({
                    title: t.title,
                    icon: t.icon,
                    theme: t.theme,
                    content: t.content
                })) || [],
                riskTitle: page.riskTitle,
                riskItems: page.riskItems?.map((r: any) => ({
                    title: r.title,
                    text: r.text
                })) || [],
                faqs: page.investorFaqs?.map((f: any) => ({
                    question: f.question,
                    answer: f.answer
                })) || [],
                practicesTitle: page.practicesTitle,
                practicesDos: page.practicesDos?.map((d: any) => d.text) || [],
                practicesDonts: page.practicesDonts?.map((d: any) => d.text) || [],
                commitmentTitle: page.investorCommitmentTitle,
                commitmentText1: page.investorCommitmentText1,
                commitmentText2: page.investorCommitmentText2
            };
        } catch (error) {
            console.error('Error fetching Investor page:', error);
            return null;
        }
    }

    public async getHomePage(): Promise<HomePage | null> {
        try {
            const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=home&depth=2')
                || await this.fetchCollection<any>('pages', '?where[template][equals]=home&depth=2');

            if (!page) return null;

            return {
                heroBadge: page.homeHeroBadge,
                heroTitle: page.homeHeroTitle,
                heroDescription: page.homeHeroDescription,
                heroFeatures: page.homeHeroFeatures?.map((f: any) => ({
                    icon: f.icon,
                    title: f.title,
                    subtitle: f.subtitle
                })) || [],
                trustIndicators: page.homeTrustIndicators?.map((t: any) => ({
                    icon: t.icon,
                    title: t.title,
                    description: t.description
                })) || [],
                servicesTitle: page.homeServicesTitle,
                servicesDescription: page.homeServicesDescription,
                servicePreviews: page.homeServicePreviews?.map((s: any) => ({
                    title: s.title,
                    description: s.description
                })) || [],
                ctaTitle: page.homeCtaTitle,
                ctaDescription: page.homeCtaDescription,
                ctaButtonText: page.homeCtaButtonText
            };
        } catch (error) {
            console.error('Error fetching Home page:', error);
            return null;
        }
    }

    public async getContactPage(): Promise<ContactPage | null> {
        try {
            const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=contact&depth=2')
                || await this.fetchCollection<any>('pages', '?where[template][equals]=contact&depth=2');

            if (!page) return null;

            return {
                heroTitle: page.contactHeroTitle,
                heroDescription: page.contactHeroDescription,
                formTitle: page.contactFormTitle,
                contactInfoTitle: page.contactInfoTitle,
                contactMethods: page.contactMethods?.map((m: any) => ({
                    icon: m.icon,
                    title: m.title,
                    content: m.content
                })) || [],
                visitOfficeTitle: page.visitOfficeTitle,
                visitOfficeDescription: page.visitOfficeDescription,
                visitOfficeMapUrl: page.visitOfficeMapUrl,
                responseTimeTitle: page.responseTimeTitle,
                responseTimeDescription: page.responseTimeDescription
            };
        } catch (error) {
            console.error('Error fetching Contact page:', error);
            return null;
        }
    }

    public async getOpenAccountPage(): Promise<OpenAccountPage | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=open-account&depth=2');

        if (!page) return null;

        return {
            heroTitle: page.openAccountHeroTitle,
            heroDescription: page.openAccountHeroDescription,
            processTitle: page.openAccountProcessTitle,
            processDescription: page.openAccountProcessDescription,
            steps: page.openAccountSteps?.map((step: any) => ({
                stepNumber: step.stepNumber,
                title: step.title,
                description: step.description,
                icon: step.icon,
                items: step.items?.map((i: any) => i.text) || []
            })) || [],
            downloadsTitle: page.downloadsTitle, // These were distinct enough? Let's check. Ah, I should rename these too if they collide? 
            // Wait, downloadsTitle might collide with downloads object if not careful. 
            // I'll keep downloadsTitle common if it's not colliding, but "downloads" array was.
            // Actually, let's look at the OpenAccount.ts file again. 
            // "downloads" was the array name. "downloadsTitle" was a text field.
            // I renamed "downloads" (array) to "openAccountDownloads".

            downloadsDescription: page.downloadsDescription,
            downloads: page.openAccountDownloads?.map((d: any) => ({
                title: d.title,
                description: d.description,
                link: d.link,
                icon: d.icon
            })) || [],
            contactTitle: page.contactTitle,
            contactDescription: page.contactDescription,
            contactCtaText: page.contactCtaText,
            contactCtaUrl: page.contactCtaUrl,
            learnMoreText: page.learnMoreText,
            learnMoreUrl: page.learnMoreUrl,
            infoTitle: page.infoTitle,
            infoItems: page.infoItems?.map((i: any) => ({ text: i.text })) || []
        };
    }
}
