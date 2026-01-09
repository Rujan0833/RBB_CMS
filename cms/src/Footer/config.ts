import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  lockDocuments: false,
  slug: 'footer',

  label: 'Footer',

  access: {
    read: () => true,
  },


  fields: [
    {
      type: 'tabs',
      tabs: [
        /* =====================
           Brand Info
        ===================== */
        {
          label: 'Brand Info',
          fields: [
            {
              name: 'brand',
              type: 'group',
              fields: [
                { name: 'companyName', type: 'text', localized: true, required: true },
                { name: 'tagline', type: 'text', localized: true },
                { name: 'description', type: 'textarea', localized: true },
              ],
            },
          ],
        },

        /* =====================
           Contact Info
        ===================== */
        {
          label: 'Contact Information',
          fields: [
            {
              name: 'contact',
              type: 'group',
              fields: [
                { name: 'phone', type: 'text' },
                { name: 'email', type: 'email' },
                { name: 'address', type: 'text' },
              ],
            },
          ],
        },

        /* =====================
           Quick Links
        ===================== */
        {
          label: 'Quick Links',
          fields: [
            {
              name: 'quickLinks',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', localized: true, required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },

        /* =====================
           Legal Links
        ===================== */
        {
          label: 'Legal Links',
          fields: [
            {
              name: 'legalLinks',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', localized: true, required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },

        /* =====================
           Risk Disclaimer
        ===================== */
        {
          label: 'Risk Disclaimer',
          fields: [
            {
              name: 'riskDisclaimer',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  localized: true,
                  defaultValue: 'Risk Disclaimer',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  localized: true,
                },
              ],
            },
          ],
        },

        /* =====================
           Footer Bottom
        ===================== */
        {
          label: 'Footer Bottom',
          fields: [
            {
              name: 'bottom',
              type: 'group',
              fields: [
                { name: 'copyright', type: 'text', localized: true },
                { name: 'licenseInfo', type: 'text', localized: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}