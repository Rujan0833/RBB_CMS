import { Tab } from 'payload/types';

export const ContactPage: Tab = {
    label: 'Contact Page',
    admin: {
        condition: (data) => data?.template === 'contact',
        group: 'Pages',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        {
                            name: 'contactHeroTitle',
                            type: 'text',
                            defaultValue: 'Contact Us',
                            required: true,
                        },
                        {
                            name: 'contactHeroDescription',
                            type: 'textarea',
                            defaultValue: 'Get in touch with our team for any queries or assistance',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Form Section',
                    fields: [
                        {
                            name: 'contactFormTitle',
                            type: 'text',
                            defaultValue: 'Send us a Message',
                        },
                        {
                            name: 'contactForm',
                            type: 'relationship',
                            relationTo: 'forms',
                            required: false,
                        },
                    ]
                },
                {
                    label: 'Contact Info',
                    fields: [
                        {
                            name: 'contactInfoTitle',
                            type: 'text',
                            defaultValue: 'Contact Information',
                        },
                        {
                            name: 'contactMethods',
                            type: 'array',
                            label: 'Contact Details',
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'Map Pin', value: 'MapPin' },
                                        { label: 'Phone', value: 'Phone' },
                                        { label: 'Mail', value: 'Mail' },
                                        { label: 'Clock', value: 'Clock' },
                                    ],
                                    defaultValue: 'MapPin',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'content', // Rich Text or Array of strings? usage in frontend shows lines. 
                                    // Let's use textarea first, maybe array if multiple lines are distinct.
                                    // Looking at frontend: <br /> breaks used.
                                    // Textarea is safest for simple breaks or richText.
                                    // Let's use richText for flexibility or just textarea line by line.
                                    // Frontend uses: 
                                    // New Baneshwor, Kathmandu
                                    // <br />
                                    // Nepal
                                    // simple textarea is fine, we can render newlines.
                                    type: 'textarea',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Office Visit',
                    fields: [
                        {
                            name: 'visitOfficeTitle',
                            type: 'text',
                            defaultValue: 'Visit Our Office',
                        },
                        {
                            name: 'visitOfficeDescription',
                            type: 'textarea',
                            defaultValue: 'We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.',
                        },
                        {
                            name: 'visitOfficeMapUrl',
                            type: 'text',
                            // defaultValue: 'https://www.google.com/maps/embed?...', // Optional default
                        },
                    ],
                },
                {
                    label: 'Response Time',
                    fields: [
                        {
                            name: 'responseTimeTitle',
                            type: 'text',
                            defaultValue: 'Response Time',
                        },
                        {
                            name: 'responseTimeDescription',
                            type: 'textarea',
                            defaultValue: 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.',
                        },
                    ],
                },
            ],
        },
    ],
};
