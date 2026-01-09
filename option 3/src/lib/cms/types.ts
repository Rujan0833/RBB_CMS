export interface Media {
    id: string;
    url?: string;
    alt?: string;
    [key: string]: any;
}

export interface FeatureItem {
    text: string;
}

export interface SideBoxListItem {
    text: string;
}

export interface ServiceBlock {
    title: string;
    serviceIcon: string;
    description: string;
    features?: FeatureItem[];
    sideBoxTitle?: string;
    sideBoxType?: string;
    sideBoxDescription?: string;
    sideBoxList?: SideBoxListItem[];
    ctaText?: string;
    ctaUrl?: string;
}

export interface HelpSection {
    title: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
}

export interface Disclaimer {
    title: string;
    text: string;
}

export interface ServicesPageCmsResponse { // Raw CMS shape if needed, or mapped shape? existing Code returns mapped.
    // Let's define the Mapped shape which the app uses.
    heroTitle: string;
    heroDescription: string;
    serviceBlocks: ServiceBlock[];
    helpSection: HelpSection;
    disclaimer: Disclaimer;
}

// For About Page
export interface ValueItem {
    icon: string;
    title: string;
    description: string;
}

export interface LicenseItem {
    icon: string;
    title: string;
    description: string;
    licenseIdLabel?: string;
    licenseIdValue?: string;
}

export interface LeaderItem {
    name: string;
    role: string;
    description: string;
    photo?: any; // Media object
}

export interface AboutPage {
    heroTitle: string;
    heroDescription: string;
    whoWeAreTitle: string;
    whoWeAreContent: string[];
    valuesTitle: string;
    values: ValueItem[];
    complianceTitle: string;
    licenses: LicenseItem[];
    leadershipTitle: string;
    leaders: LeaderItem[];
    commitmentTitle: string;
    commitmentDescription: string;
}

export interface CmsResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

// For Open Account Page
export interface ProcessStep {
    stepNumber: string;
    title: string;
    description: string;
    icon: string;
    items: string[];
}

export interface DownloadForm {
    title: string;
    description: string;
    link: string;
    icon: string;
}

export interface InformationItem {
    text: string;
}

export interface OpenAccountPage {
    heroTitle: string;
    heroDescription: string;
    processTitle: string;
    processDescription: string;
    steps: ProcessStep[];
    downloadsTitle: string;
    downloadsDescription?: string;
    downloads?: DownloadForm[];
    // Contact & Info...
    contactTitle: string;
    contactDescription: string;
    contactCtaText: string;
    contactCtaUrl: string;
    learnMoreText: string;
    learnMoreUrl: string;
    infoTitle: string;
    infoItems: InformationItem[];
}

export interface ContactMethod {
    icon: string;
    title: string;
    content: string;
}

export interface ContactPage {
    heroTitle: string;
    heroDescription: string;
    formTitle: string;
    contactInfoTitle: string;
    contactMethods: ContactMethod[];
    visitOfficeTitle: string;
    visitOfficeDescription: string;
    visitOfficeMapUrl: string;
    responseTimeTitle: string;
    responseTimeDescription: string;
    contactForm?: {
        id: string;
        [key: string]: any;
    };
}

export interface HeroFeature {
    icon: string;
    title: string;
    subtitle: string;
}

export interface TrustIndicator {
    icon: string;
    title: string;
    description: string;
}

export interface ServicePreview {
    title: string;
    description: string;
}

export interface HomePage {
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    heroFeatures: HeroFeature[];
    trustIndicators: TrustIndicator[];
    servicesTitle: string;
    servicesDescription: string;
    servicePreviews: ServicePreview[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
}

export interface EducationTopic {
    title: string;
    icon: string;
    theme: string;
    content: string;
}

export interface RiskItem {
    title: string;
    text: string;
}

export interface InvestorFAQ {
    question: string;
    answer: string;
}

export interface InvestorPage {
    heroTitle: string;
    heroDescription: string;
    educationTopics: EducationTopic[];
    riskTitle: string;
    riskItems: RiskItem[];
    faqs: InvestorFAQ[];
    faqTitle?: string;
    faqDescription?: string;
    practicesTitle: string;
    practicesDos: string[];
    practicesDonts: string[];
    commitmentTitle: string;
    commitmentText1: string;
    commitmentText2: string;
}
export interface LinkField {
    type?: 'reference' | 'custom' | null;
    newTab?: boolean | null;
    reference?: {
        relationTo: 'pages' | 'posts';
        value: string | any;
    } | null;
    url?: string | null;
    label: string;
    appearance?: 'default' | 'outline' | null;
}

export interface NavItem {
    link: LinkField;
    id?: string | null;
}

export interface HeaderData {
    navItems?: NavItem[] | null;
}

export interface SiteSettings {
    branding?: {
        siteName?: string;
        siteTagline?: string;
        logo?: Media;
    };
    office?: {
        address?: {
            value: string;
            icon?: string;
        };
        phones?: Array<{
            number: string;
            type: 'landline' | 'mobile';
            id?: string;
        }>;
        phoneIcon?: string;
        emails?: Array<{
            email: string;
            type: 'general' | 'support';
            id?: string;
        }>;
        emailIcon?: string;
        officeHours?: Array<{
            day: string;
            time: string;
            id?: string;
        }>;
        officeHoursIcon?: string;
    };
}

export interface FooterData {
    brand?: {
        companyName: string;
        tagline?: string;
        description?: string;
    };
    contact?: {
        phone?: string;
        email?: string;
        address?: string;
    };
    quickLinks?: Array<{
        label: string;
        url: string;
        id?: string;
    }>;
    legalLinks?: Array<{
        label: string;
        url: string;
        id?: string;
    }>;
    riskDisclaimer?: {
        title?: string;
        content?: string;
    };
    bottom?: {
        copyright?: string;
        licenseInfo?: string;
    };
}
