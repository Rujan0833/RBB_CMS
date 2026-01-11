import type { Tab } from 'payload';

export const ServicesPage: Tab = {
    label: 'Services Specifics',
    admin: {
        condition: (data) => data?.template === 'services',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero Section',
                    fields: [
                        {
                            name: 'servicesHeroTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Our Services',
                            required: false,
                        },
                        {
                            name: 'servicesHeroDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Comprehensive brokerage solutions tailored for the Nepali investor',
                        },
                    ],
                },
                {
                    label: 'Service Blocks',
                    fields: [
                        {
                            name: 'serviceBlocks',
                            type: 'array',
                            label: 'Services',
                            minRows: 1,
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'serviceIcon',
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'TrendingUp',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'features',
                                    type: 'array',
                                    label: 'Key Features (Checklist)',
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            localized: true,
                                        },
                                    ],
                                },
                                // Side Box Fields (Flattened)
                                {
                                    name: 'sideBoxTitle',
                                    type: 'text',
                                    localized: true,
                                    label: 'Box Title',
                                },
                                {
                                    name: 'sideBoxType',
                                    type: 'select',
                                    label: 'Box Type',
                                    options: [
                                        { label: 'Blue CTA Box', value: 'blue-cta' },
                                        { label: 'Gray List Box', value: 'gray-list' },
                                        { label: 'Simple Note', value: 'simple-note' },
                                    ],
                                    defaultValue: 'simple-note',
                                },
                                {
                                    name: 'sideBoxDescription',
                                    type: 'textarea',
                                    localized: true,
                                    label: 'Box Description',
                                    admin: {
                                        condition: (_, siblingData) => siblingData.sideBoxType !== 'gray-list',
                                    },
                                },
                                {
                                    name: 'sideBoxList',
                                    type: 'array',
                                    label: 'Box List Items',
                                    admin: {
                                        condition: (_, siblingData) => siblingData.sideBoxType === 'gray-list',
                                    },
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            localized: true,
                                        },
                                    ],
                                },
                                {
                                    name: 'ctaText',
                                    type: 'text',
                                    localized: true,
                                    label: 'CTA Link Text',
                                    admin: {
                                        condition: (_, siblingData) => siblingData.sideBoxType === 'blue-cta',
                                    },
                                },
                                {
                                    name: 'ctaUrl',
                                    type: 'text',
                                    label: 'CTA Link URL',
                                    admin: {
                                        condition: (_, siblingData) => siblingData.sideBoxType === 'blue-cta',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Bottom Sections',
                    fields: [
                        {
                            name: 'helpSectionTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Need Help Choosing?',
                        },
                        {
                            name: 'helpSectionDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Our team is here to help you understand our services and guide you through the account opening process.',
                        },
                        {
                            name: 'helpSectionCtaText',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Contact Us',
                        },
                        {
                            name: 'helpSectionCtaUrl',
                            type: 'text',
                            defaultValue: '/contact',
                        },
                        {
                            name: 'disclaimerTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Important Disclaimer',
                        },
                        {
                            name: 'disclaimerText',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'We are a SEBON-licensed broker providing execution and support services only...',
                        },
                    ],
                },
            ],
        },
    ],
};
