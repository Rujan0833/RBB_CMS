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

