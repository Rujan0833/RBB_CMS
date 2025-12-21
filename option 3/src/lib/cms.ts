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
