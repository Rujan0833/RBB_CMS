// lib/api/siteSettings.ts
import axios from "axios";

export const fetchSiteSettings = async (locale = 'en') => {
  const res = await axios.get(
    `${import.meta.env.VITE_CMS_URL}/api/globals/site-settings`,
    {
      params: {
        locale,
        'fallback-locale': 'en',
      },
    }
  );
  return res.data;
};


export const fetchFooter = async (locale = 'en') => {
  const res = await axios.get(
    `${import.meta.env.VITE_CMS_URL}/api/globals/footer`,
    {
      params: {
        depth: 2,
        locale,
        'fallback-locale': 'en',
      },
    }
  )
  return res.data
}


