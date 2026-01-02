// lib/api/siteSettings.ts
import axios from "axios";

export const fetchSiteSettings = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_CMS_URL}/api/globals/site-settings`
  );
  return res.data;
};
