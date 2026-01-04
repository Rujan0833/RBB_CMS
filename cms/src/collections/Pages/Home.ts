import { Tab } from 'payload/types';

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
                            defaultValue: 'SEBON Licensed & NEPSE Member',
                        },
                        {
                            name: 'homeHeroTitle',
                            type: 'text',
                            defaultValue: "Your Trusted Partner in Nepal's Capital Market",
                            required: false,
                        },
                        {
                            name: 'homeHeroDescription',
                            type: 'textarea',
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
                                    type: 'select',
                                    options: [
                                        { label: 'Check Circle', value: 'CheckCircle2' },
                                        { label: 'Shield', value: 'Shield' },
                                    ],
                                    defaultValue: 'CheckCircle2',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                },
                                {
                                    name: 'subtitle',
                                    type: 'text',
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
                                    type: 'select',
                                    options: [
                                        { label: 'Shield', value: 'Shield' },
                                        { label: 'Trending Up', value: 'TrendingUp' },
                                        { label: 'Users', value: 'Users' },
                                        { label: 'Award', value: 'Award' },
                                    ],
                                    defaultValue: 'Shield',
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                },
                                {
                                    name: 'description',
                                    type: 'text',
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
                            defaultValue: 'Our Services',
                        },
                        {
                            name: 'homeServicesDescription',
                            type: 'textarea',
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
                                    required: false,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
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
                            defaultValue: 'Ready to Start Trading?',
                        },
                        {
                            name: 'homeCtaDescription',
                            type: 'textarea',
                            defaultValue: 'Open your trading account today and get access to Nepal\'s capital market',
                        },
                        {
                            name: 'homeCtaButtonText',
                            type: 'text',
                            defaultValue: 'Open Trading Account',
                        },
                    ],
                },
            ],
        },
    ],
};
