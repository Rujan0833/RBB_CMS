import { CmsClient } from './cms/client';

const CMS_URL = 'http://localhost:3000';

const cmsClient = new CmsClient(CMS_URL);

export const getImageUrl = (media: any) => cmsClient.getImageUrl(media);

export const fetchAboutPage = async () => {
    return cmsClient.getAboutPage();
};

export const fetchServicesPage = async () => {
    return cmsClient.getServicesPage();
};

export const fetchOpenAccountPage = async () => {
    return cmsClient.getOpenAccountPage();
};

export const fetchInvestorPage = async () => {
    return cmsClient.getInvestorPage();
};

export const fetchContactPage = async () => {
    return cmsClient.getContactPage();
};

export const fetchHomePage = async () => {
    return cmsClient.getHomePage();
};


export const getForm = async (id: string) => {
    return cmsClient.getForm(id);
};

export const getHeader = async () => {
    return cmsClient.getHeader();
};



export const submitForm = async (formId: string, data: any) => {
    return cmsClient.submitForm(formId, data);
};
=======

