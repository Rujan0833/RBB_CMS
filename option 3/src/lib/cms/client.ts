import { AboutPage, ServicesPageCmsResponse, CmsResponse, OpenAccountPage, InvestorPage, ContactPage, HomePage, HeaderData, FooterData, SiteSettings } from './types';

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

    private async fetchCollection<T>(collection: string, query: string = '', locale?: string): Promise<T | null> {
        try {
            const localeQuery = locale ? `${query.includes('?') ? '&' : '?'}locale=${locale}` : '';
            const res = await fetch(`${this.baseUrl}/api/${collection}${query}${localeQuery}`);
            if (!res.ok) throw new Error(`Failed to fetch ${collection}`);
            const json = await res.json() as CmsResponse<T>;
            return json.docs?.[0] || null;
        } catch (error) {
            console.error(`Error fetching ${collection}:`, error);
            return null;
        }
    }

    /**
     * Minimal Lexical JSON to HTML serializer
     * This handles basic nesting, text formatting (bold, italic), and lists.
     */
    private serializeLexicalRichText(node: any): string {
        if (!node) return '';

        // If it's a text node
        if (node.type === 'text') {
            let text = node.text || '';
            if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
            if (node.format & 2) text = `<em>${text}</em>`;   // Italic
            return text;
        }

        // If it's a container node
        const childrenHTML = node.children?.map((child: any) => this.serializeLexicalRichText(child)).join('') || '';

        switch (node.type) {
            case 'root':
                return childrenHTML;
            case 'paragraph':
                return `<p>${childrenHTML}</p>`;
            case 'list':
                const tag = node.tag === 'ol' ? 'ol' : 'ul';
                return `<${tag}>${childrenHTML}</${tag}>`;
            case 'listitem':
                return `<li>${childrenHTML}</li>`;
            case 'heading':
                const hTag = node.tag || 'h1';
                return `<${hTag}>${childrenHTML}</${hTag}>`;
            default:
                return childrenHTML;
        }
    }

    public async getServicesPage(locale?: string): Promise<ServicesPageCmsResponse | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=services&depth=2', locale);

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

    public async getAboutPage(locale?: string): Promise<AboutPage | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=about&depth=2', locale);

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

    public async getInvestorPage(locale?: string): Promise<InvestorPage | null> {
        try {
            const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=investor&depth=2', locale)
                || await this.fetchCollection<any>('pages', '?where[slug][equals]=education&depth=2', locale)
                || await this.fetchCollection<any>('pages', '?where[template][equals]=investor&depth=2', locale);

            if (!page) return null;

            return {
                heroTitle: page.investorHeroTitle,
                heroDescription: page.investorHeroDescription,
                educationTopics: page.educationTopics?.map((t: any) => ({
                    title: t.title,
                    icon: t.icon,
                    theme: t.theme,
                    content: t.content?.root ? this.serializeLexicalRichText(t.content.root) : (typeof t.content === 'string' ? t.content : '')
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
                faqTitle: page.investorFaqTitle,
                faqDescription: page.investorFaqDescription,
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

    public async getHomePage(locale?: string): Promise<HomePage | null> {
        try {
            const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=home&depth=2', locale)
                || await this.fetchCollection<any>('pages', '?where[template][equals]=home&depth=2', locale);

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

    public async getContactPage(locale?: string): Promise<ContactPage | null> {
        try {
            const [page, settings] = await Promise.all([
                this.fetchCollection<any>('pages', '?where[slug][equals]=contact&depth=2', locale)
                || this.fetchCollection<any>('pages', '?where[template][equals]=contact&depth=2', locale),
                this.getSiteSettings(locale)
            ]);

            if (!page) return null;

            // Map Site Settings office info to contact methods
            const contactMethods = [];
            if (settings?.office) {
                const { office } = settings;

                // Address
                if (office.address) {
                    contactMethods.push({
                        icon: office.address.icon || 'MapPin',
                        title: locale === 'ne' ? 'कार्यालयको ठेगाना' : 'Office Address',
                        content: office.address.value
                    });
                }

                // Phone
                if (office.phones?.length && office.phones.length > 0) {
                    contactMethods.push({
                        icon: office.phoneIcon || 'Phone',
                        title: locale === 'ne' ? 'फोन' : 'Phone',
                        content: office.phones.map((p: any) => p.number).join('\n')
                    });
                }

                // Email
                if (office.emails?.length && office.emails.length > 0) {
                    contactMethods.push({
                        icon: office.emailIcon || 'Mail',
                        title: locale === 'ne' ? 'इमेल' : 'Email',
                        content: office.emails.map((e: any) => e.email).join('\n')
                    });
                }

                // Office Hours
                if (office.officeHours?.length && office.officeHours.length > 0) {
                    contactMethods.push({
                        icon: office.officeHoursIcon || 'Clock',
                        title: locale === 'ne' ? 'कार्यालय समय' : 'Office Hours',
                        content: office.officeHours.map((h: any) => `${h.day}: ${h.time}`).join('\n')
                    });
                }
            }

            return {
                heroTitle: page.contactHeroTitle,
                heroDescription: page.contactHeroDescription,
                formTitle: page.contactFormTitle,
                contactInfoTitle: page.contactInfoTitle,
                contactMethods: contactMethods.length > 0 ? contactMethods : (page.contactMethods?.map((m: any) => ({
                    icon: m.icon,
                    title: m.title,
                    content: m.content
                })) || []),
                visitOfficeTitle: page.visitOfficeTitle,
                visitOfficeDescription: page.visitOfficeDescription,
                visitOfficeMapUrl: page.visitOfficeMapUrl,
                responseTimeTitle: page.responseTimeTitle,
                responseTimeDescription: page.responseTimeDescription,
                contactForm: page.contactForm
                    ? { id: (typeof page.contactForm === 'object' ? page.contactForm.id : page.contactForm).toString() }
                    : undefined
            };
        } catch (error) {
            console.error('Error fetching Contact page:', error);
            return null;
        }
    }

    public async getOpenAccountPage(locale?: string): Promise<OpenAccountPage | null> {
        const page = await this.fetchCollection<any>('pages', '?where[slug][equals]=open-account&depth=2', locale);

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

    public async getForm(id: string, locale?: string): Promise<any> {
        try {
            const localeQuery = locale ? `?locale=${locale}` : '';
            const res = await fetch(`${this.baseUrl}/api/forms/${id}${localeQuery}`);
            if (!res.ok) throw new Error('Failed to fetch form');
            return await res.json();
        } catch (error) {
            console.error('Error fetching form:', error);
            return null;
        }
    }

    public async getHeader(locale?: string): Promise<HeaderData | null> {
        try {
            const localeQuery = locale ? `?locale=${locale}` : '';
            const res = await fetch(`${this.baseUrl}/api/globals/header?depth=2${localeQuery.replace('?', '&')}`);
            if (!res.ok) throw new Error('Failed to fetch header');
            const data = await res.json();
            return data as HeaderData;
        } catch (error) {
            console.error('Error fetching header:', error);
            return null;
        }
    }

    public async getFooter(locale?: string): Promise<FooterData | null> {
        try {
            const localeQuery = locale ? `?locale=${locale}` : '';
            const res = await fetch(`${this.baseUrl}/api/globals/footer?depth=2${localeQuery.replace('?', '&')}`);
            if (!res.ok) throw new Error('Failed to fetch footer');
            const data = await res.json();
            return data as FooterData;
        } catch (error) {
            console.error('Error fetching footer:', error);
            return null;
        }
    }

    public async getSiteSettings(locale?: string): Promise<SiteSettings | null> {
        try {
            const localeQuery = locale ? `?locale=${locale}` : '';
            const res = await fetch(`${this.baseUrl}/api/globals/site-settings?depth=2${localeQuery.replace('?', '&')}`);
            if (!res.ok) throw new Error('Failed to fetch site settings');
            const data = await res.json();
            return data as SiteSettings;
        } catch (error) {
            console.error('Error fetching site settings:', error);
            return null;
        }
    }

    public async submitForm(formId: string, data: any): Promise<boolean> {
        try {
            console.log('Submitting form:', { formId, data });
            const submissionData = Object.entries(data).map(([name, value]) => ({
                field: name,
                value,
            }));

            const res = await fetch(`${this.baseUrl}/api/form-submissions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    form: formId,
                    submissionData,
                }),
            });

            console.log('Submission response:', res.status, res.statusText);
            return res.ok;
        } catch (error) {
            console.error('Error submitting form:', error);
            return false;
        }
    }
}
