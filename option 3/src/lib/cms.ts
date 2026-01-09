import { CmsClient } from './cms/client';

const CMS_URL = 'http://localhost:3000';

const cmsClient = new CmsClient(CMS_URL);

export const getImageUrl = (media: any) => cmsClient.getImageUrl(media);

export const fetchAboutPage = async (locale?: string) => {
    return cmsClient.getAboutPage(locale);
};

export const fetchServicesPage = async (locale?: string) => {
    return cmsClient.getServicesPage(locale);
};

export const fetchOpenAccountPage = async (locale?: string) => {
    return cmsClient.getOpenAccountPage(locale);
};

export const fetchInvestorPage = async (locale?: string) => {
    return cmsClient.getInvestorPage(locale);
};

export const fetchContactPage = async (locale?: string) => {
    return cmsClient.getContactPage(locale);
};

export const fetchHomePage = async (locale?: string) => {
    return cmsClient.getHomePage(locale);
};


export const getForm = async (id: string) => {
    return cmsClient.getForm(id);
};

export const getHeader = async (locale?: string) => {
    return cmsClient.getHeader(locale);
};

export const fetchFooter = async (locale?: string) => {
    return cmsClient.getFooter(locale);
};

export const fetchSiteSettings = async (locale?: string) => {
    return cmsClient.getSiteSettings(locale);
};

export const submitForm = async (formId: string, data: any) => {
    return cmsClient.submitForm(formId, data);
};


