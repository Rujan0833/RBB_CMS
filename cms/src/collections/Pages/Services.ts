import { Tab } from 'payload/types';

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
                            name: 'servicesHeroTitle', // Scoped to avoid conflict with AboutPage
                            type: 'text',
                            defaultValue: 'Our Services',
                            required: false,
                        },
                        {
                            name: 'servicesHeroDescription', // Scoped to avoid conflict
                            type: 'textarea',
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
                                    required: false,
                                },
                                {
                                    name: 'serviceIcon',
                                    type: 'select',
                                    options: [
                                        { label: 'Trending Up', value: 'TrendingUp' },
                                        { label: 'Monitor', value: 'Monitor' },
                                        { label: 'File Text', value: 'FileText' },
                                        { label: 'Pie Chart', value: 'PieChart' },
                                    ],
                                    defaultValue: 'TrendingUp',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
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
                                        },
                                    ],
                                },
                                // Side Box Fields (Flattened)
                                {
                                    name: 'sideBoxTitle',
                                    type: 'text',
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
                                        },
                                    ],
                                },
                                {
                                    name: 'ctaText',
                                    type: 'text',
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
                            defaultValue: 'Need Help Choosing?',
                        },
                        {
                            name: 'helpSectionDescription',
                            type: 'textarea',
                            defaultValue: 'Our team is here to help you understand our services and guide you through the account opening process.',
                        },
                        {
                            name: 'helpSectionCtaText',
                            type: 'text',
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
                            defaultValue: 'Important Disclaimer',
                        },
                        {
                            name: 'disclaimerText',
                            type: 'textarea',
                            defaultValue: 'We are a SEBON-licensed broker providing execution and support services only...',
                        },
                    ],
                },
            ],
        },
    ],
};
