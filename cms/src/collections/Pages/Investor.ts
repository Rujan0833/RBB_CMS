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
                            defaultValue: 'Investor Education',
                            required: false,
                        },
                        {
                            name: 'investorHeroDescription',
                            type: 'textarea',
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
                                    label: 'Bold Title (Optional)',
                                },
                                {
                                    name: 'text',
                                    type: 'textarea',
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
                                    required: false,
                                },
                                {
                                    name: 'answer',
                                    type: 'textarea',
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
                            defaultValue: 'Our Educational Commitment',
                        },
                        {
                            name: 'investorCommitmentText1',
                            type: 'textarea',
                        },
                        {
                            name: 'investorCommitmentText2',
                            type: 'textarea',
                        },
                    ],
                },
            ],
        },
    ],
};