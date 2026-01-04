// lib/api/siteSettings.ts
import axios from "axios";

export const fetchSiteSettings = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_CMS_URL}/api/globals/site-settings`
  );
  return res.data;
};


export const fetchFooter = async () => {
   const res = await axios.get(
     `${import.meta.env.VITE_CMS_URL}/api/globals/footer?depth=2`
        );
        return res.data;
};

