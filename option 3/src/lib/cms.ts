import { CmsClient } from './cms/client';

const CMS_URL = 'http://localhost:3000';

const cmsClient = new CmsClient(CMS_URL);

export const getImageUrl = (media: any) => cmsClient.getImageUrl(media);

export const fetchAboutPage = async () => {
    return cmsClient.getAboutPage();
};

export const fetchServicesPage = async (locale: 'en' | 'ne') => {
    return cmsClient.getServicesPage(locale);
};

export const fetchOpenAccountPage = async (locale: 'en' | 'ne') => {
    return cmsClient.getOpenAccountPage(locale);
};

export const fetchInvestorPage = async () => {
    return cmsClient.getInvestorPage();
};

export const fetchContactPage = async () => {
    return cmsClient.getContactPage();
};

export const fetchHomePage = async (locale: 'en' | 'ne') => {
  return cmsClient.getHomePage(locale);
};


export const getForm = async (id: string) => {
    return cmsClient.getForm(id);
};

export const getHeader = async (locale: 'en' | 'ne') => {
    return cmsClient.getHeader(locale);
};



export const submitForm = async (formId: string, data: any) => {
    return cmsClient.submitForm(formId, data);
};


