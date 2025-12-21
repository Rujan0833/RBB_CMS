import { Tab } from 'payload/types';

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
                            defaultValue: 'Open a Trading Account',
                            required: true,
                        },
                        {
                            name: 'openAccountHeroDescription',
                            type: 'textarea',
                            defaultValue: 'Start your investment journey with a simple, straightforward account opening process',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Process Steps',
                    fields: [
                        {
                            name: 'openAccountProcessTitle',
                            type: 'text',
                            defaultValue: 'Step-by-Step Process',
                        },
                        {
                            name: 'openAccountProcessDescription',
                            type: 'textarea',
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
                                    required: true,
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: true,
                                },
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'FileText', value: 'FileText' },
                                        { label: 'CreditCard', value: 'CreditCard' },
                                        { label: 'UserCheck', value: 'UserCheck' },
                                        { label: 'CheckCircle2', value: 'CheckCircle2' },
                                        { label: 'Download', value: 'Download' },
                                    ],
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
                            defaultValue: 'Download Forms',
                        },
                        {
                            name: 'downloadsDescription',
                            type: 'textarea',
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
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'text',
                                },
                                {
                                    name: 'link',
                                    type: 'text',
                                    label: 'File URL or Link',
                                },
                                {
                                    name: 'icon',
                                    type: 'select',
                                    options: [
                                        { label: 'Download', value: 'Download' },
                                    ],
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
                            defaultValue: 'Have Questions?',
                        },
                        {
                            name: 'contactDescription',
                            type: 'textarea',
                            defaultValue: 'Our team is ready to help you through the account opening process. Contact us today!',
                        },
                        {
                            name: 'contactCtaText',
                            type: 'text',
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
                                }
                            ]
                        }
                    ]
                }
            ],
        },
    ],
};
