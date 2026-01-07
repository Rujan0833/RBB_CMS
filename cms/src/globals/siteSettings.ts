import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  lockDocuments: false,
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Settings',
  },
  fields: [
    /* =====================
       Branding
    ===================== */
    {
      type: 'group',
      name: 'branding',
      label: 'Branding',
      fields: [
        { name: 'siteName', type: 'text' },
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },

    /* =====================
       Office Contact Information
    ===================== */
    {
      type: 'group',
      name: 'office',
      label: 'Office Information',
      fields: [
        // Address
        {
          name: 'address',
          type: 'group',
          label: 'Office Address',
          fields: [
            { 
              name: 'value', 
              type: 'textarea', 
              required: true, 
              defaultValue: 'New Baneshwor, Kathmandu\nNepal' 
            },
            { 
              name: 'icon',
              type: 'text',
              label: 'Icon',
              admin: {
                components: {
                  Field: '@/components/fields/IconPicker',
                },
              },
              defaultValue: 'MapPin',
            },
          ],
        },

        // Phones
        {
          name: 'phones',
          type: 'array',
          label: 'Phone Numbers',
          fields: [
            { name: 'number', type: 'text', required: true },
            { 
              name: 'type', 
              type: 'select', 
              options: [
                { label: 'Landline', value: 'landline' },
                { label: 'Mobile', value: 'mobile' },
              ], 
              defaultValue: 'landline' 
            },
          ],
          defaultValue: [
            { number: '+977-1-XXXXXXX', type: 'landline' },
            { number: '+977-9XXXXXXXXX', type: 'mobile' },
          ],
        },
        // Single Icon for all phones
        {
          name: 'phoneIcon',
          type: 'text',
          label: 'Phone Icon',
          admin: {
            components: {
              Field: '@/components/fields/IconPicker',
            },
          },
          defaultValue: 'Phone',
        },

        // Emails
        {
          name: 'emails',
          type: 'array',
          label: 'Emails',
          fields: [
            { name: 'email', type: 'email', required: true },
            { 
              name: 'type', 
              type: 'select', 
              options: [
                { label: 'General', value: 'general' },
                { label: 'Support', value: 'support' },
              ], 
              defaultValue: 'general' 
            },
          ],
          defaultValue: [
            { email: 'info@nepalsecurities.com.np', type: 'general' },
            { email: 'support@nepalsecurities.com.np', type: 'support' },
          ],
        },
        {
          name: 'emailIcon',
          type: 'text',
          label: 'Email Icon',
          admin: {
            components: {
              Field: '@/components/fields/IconPicker',
            },
          },
          defaultValue: 'Mail',
        },

        // Office Hours
        {
          name: 'officeHours',
          type: 'array',
          label: 'Office Hours',
          fields: [
            { name: 'day', type: 'text', required: true },
            { name: 'time', type: 'text', required: true },
          ],
          defaultValue: [
            { day: 'Sunday - Thursday', time: '10:00 AM - 5:00 PM' },
            { day: 'Friday - Saturday', time: 'Closed' },
          ],
        },
        {
          name: 'officeHoursIcon',
          type: 'text',
          label: 'Office Hours Icon',
          admin: {
            components: {
              Field: '@/components/fields/IconPicker',
            },
          },
          defaultValue: 'Clock',
        },
      ],
    },
  ],
}
