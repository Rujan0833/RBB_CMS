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
                { name: 'companyName', type: 'text', required: true },
                { name: 'tagline', type: 'text' },
                { name: 'description', type: 'textarea' },
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
                { name: 'label', type: 'text', required: true },
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
                { name: 'label', type: 'text', required: true },
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
                  defaultValue: 'Risk Disclaimer',
                },
                {
                  name: 'content',
                  type: 'textarea',
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
                { name: 'copyright', type: 'text' },
                { name: 'licenseInfo', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
}