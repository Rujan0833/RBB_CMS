import type { Tab } from 'payload';

export const InvestorPage: Tab = {
    label: 'Investor Specifics',
    admin: {
        condition: (data) => data?.template === 'investor',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero',
                    fields: [
                        {
                            name: 'investorHeroTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Investor Education',
                            required: false,
                        },
                        {
                            name: 'investorHeroDescription',
                            type: 'textarea',
                            localized: true,
                            defaultValue: 'Learn the basics of stock market investing in Nepal and make informed decisions',
                            required: false,
                        },
                    ],
                },
                {
                    label: 'Topics',
                    fields: [
                        {
                            name: 'educationTopics',
                            type: 'array',
                            label: 'Educational Topics',
                            minRows: 1,
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
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
                                    defaultValue: 'BookOpen',
                                },
                                {
                                    name: 'theme',
                                    type: 'select',
                                    options: [
                                        { label: 'Blue', value: 'blue' },
                                        { label: 'Green', value: 'green' },
                                    ],
                                    defaultValue: 'blue',
                                },
                                {
                                    name: 'content',
                                    type: 'richText',
                                    localized: true,
                                    label: 'Content',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Risk Disclaimer',
                    fields: [
                        {
                            name: 'riskTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Risk Disclaimer',
                        },
                        {
                            name: 'riskItems',
                            type: 'array',
                            label: 'Risk Points',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    label: 'Bold Title (Optional)',
                                },
                                {
                                    name: 'text',
                                    type: 'textarea',
                                    localized: true,
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'FAQs',
                    fields: [
                        {
                            name: 'investorFaqs',
                            type: 'array',
                            label: 'Frequently Asked Questions',
                            fields: [
                                {
                                    name: 'question',
                                    type: 'text',
                                    localized: true,
                                    required: false,
                                },
                                {
                                    name: 'answer',
                                    type: 'textarea',
                                    localized: true,
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Best Practices',
                    fields: [
                        {
                            name: 'practicesTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Investment Best Practices',
                        },
                        {
                            name: 'practicesDos',
                            type: 'array',
                            label: 'Do List',
                            fields: [
                                {
                                    name: 'text',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                        {
                            name: 'practicesDonts',
                            type: 'array',
                            label: 'Don\'t List',
                            fields: [
                                {
                                    name: 'text',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Footer',
                    fields: [
                        {
                            name: 'investorCommitmentTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Our Educational Commitment',
                        },
                        {
                            name: 'investorCommitmentText1',
                            type: 'textarea',
                            localized: true,
                        },
                        {
                            name: 'investorCommitmentText2',
                            type: 'textarea',
                            localized: true,
                        },
                    ],
                },
            ],
        },
    ],
};