import type { Tab } from 'payload';

export const OpenAccountPage: Tab = {
    label: 'Open Account Specifics',
    admin: {
        condition: (data) => data?.template === 'open-account',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        {
                            name: 'openAccountHeroTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Open a Trading Account',
                            required: false,
                        },
                        {
                            name: 'openAccountHeroDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Start your investment journey with a simple, straightforward account opening process',
                            required: false,
                        },
                    ],
                },
                {
                    label: 'Process Steps',
                    fields: [
                        {
                            name: 'openAccountProcessTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Step-by-Step Process',
                        },
                        {
                            name: 'openAccountProcessDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: "Follow these simple steps to open your trading account and start investing in Nepal's stock market",
                        },
                        {
                            name: 'openAccountSteps',
                            type: 'array',
                            label: 'Steps',
                            minRows: 1,
                            fields: [
                                {
                                    name: 'stepNumber',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
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
                                {
                                    name: 'icon',
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'FileText',
                                },
                                {
                                    name: 'items',
                                    type: 'array',
                                    label: 'Checklist Items',
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            localized: true,
                                        }
                                    ]
                                }
                            ],
                        },
                    ],
                },
                {
                    label: 'Downloads',
                    fields: [
                        {
                            name: 'downloadsTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Download Forms',
                        },
                        {
                            name: 'downloadsDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Download and review our account opening forms before your visit',
                        },
                        {
                            name: 'openAccountDownloads',
                            type: 'array',
                            label: 'Form Downloads',
                            fields: [
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
                                {
                                    name: 'link',
                                    type: 'text',
                                    label: 'File URL or Link',
                                },
                                {
                                    name: 'icon',
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'Download',
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Contact & Info',
                    fields: [
                        {
                            name: 'contactTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Have Questions?',
                        },
                        {
                            name: 'contactDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Our team is ready to help you through the account opening process. Contact us today!',
                        },
                        {
                            name: 'contactCtaText',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Contact Us',
                        },
                        {
                            name: 'contactCtaUrl',
                            type: 'text',
                            defaultValue: '/contact',
                        },
                        {
                            name: 'learnMoreText',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Learn More',
                        },
                        {
                            name: 'learnMoreUrl',
                            type: 'text',
                            defaultValue: '/education',
                        },
                        {
                            name: 'infoTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Important Information',
                        },
                        {
                            name: 'infoItems',
                            type: 'array',
                            label: 'Information List',
                            fields: [
                                {
                                    name: 'text',
                                    type: 'textarea',
                                    localized: true,
                                }
                            ]
                        }
                    ]
                }
            ],
        },
    ],
};
