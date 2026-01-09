import { GlobalConfig } from "payload";


export const setting: GlobalConfig = {
  slug: "setting",
  label: "Icon Settings",
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: "lightModeIcon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "lightModeLogo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "darkModeIcon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "darkModeLogo",
      type: "upload",
      relationTo: "media",
    },
  ],
};