import type { Tab } from 'payload';

export const HomePage: Tab = {
    label: 'Home Page',
    admin: {
        condition: (data) => data?.template === 'home',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero Section',
                    fields: [
                        {
                            name: 'homeHeroBadge',
                            type: 'text',
                            localized: true,
                            defaultValue: 'SEBON Licensed & NEPSE Member',
                        },
                        {
                            name: 'homeHeroTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: "Your Trusted Partner in Nepal's Capital Market",
                            required: false,
                        },
                        {
                            name: 'homeHeroDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.',
                            required: false,
                        },
                        {
                            name: 'homeHeroFeatures',
                            type: 'array',
                            label: 'Hero Trust Features',
                            minRows: 1,
                            maxRows: 3,
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'CheckCircle',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'subtitle',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Trust Indicators',
                    fields: [
                        {
                            name: 'homeTrustIndicators',
                            type: 'array',
                            label: 'Indicators',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'Shield',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Services Preview',
                    fields: [
                        {
                            name: 'homeServicesTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Our Services',
                        },
                        {
                            name: 'homeServicesDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Comprehensive brokerage services designed for Nepali investors',
                        },
                        {
                            name: 'homeServicePreviews',
                            type: 'array',
                            label: 'Services List',
                            minRows: 1,
                            maxRows: 4,
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Final CTA',
                    fields: [
                        {
                            name: 'homeCtaTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Ready to Start Trading?',
                        },
                        {
                            name: 'homeCtaDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Open your trading account today and get access to Nepal\'s capital market',
                        },
                        {
                            name: 'homeCtaButtonText',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Open Trading Account',
                        },
                    ],
                },
            ],
        },
    ],
};
