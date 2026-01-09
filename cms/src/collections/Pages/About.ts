import type { Tab } from 'payload';

export const AboutPage: Tab = {
    label: 'About Specifics',
    admin: {
        condition: (data) => data?.template === 'about',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Hero Section',
                    fields: [
                        {
                            name: 'heroTitle',
                            type: 'text',
                            label: 'Hero Title',
                            localized: true,
                            defaultValue: 'About Nepal Securities',
                            required: true,
                        },
                        {
                            name: 'heroDescription',
                            type: 'textarea',
                            label: 'Hero Description',
                            localized: true,
                            defaultValue: "A trusted name in Nepal's capital market, dedicated to empowering investors with professional brokerage services.",
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Who We Are',
                    fields: [
                        {
                            name: 'whoWeAreTitle',
                            type: 'text',
                            label: 'Section Title',
                            localized: true,
                            defaultValue: 'Who We Are',
                        },
                        {
                            name: 'whoWeAreContent',
                            type: 'richText', // Using RichText to allow multiple paragraphs/formatting
                            label: 'Content',
                            localized: true,
                        },
                    ],
                },
                {
                    label: 'Our Values',
                    fields: [
                        {
                            name: 'valuesTitle',
                            type: 'text',
                            label: 'Section Title',
                            localized: true,
                            defaultValue: 'Our Values',
                        },
                        {
                            name: 'values',
                            type: 'array',
                            label: 'Values List',
                            minRows: 1,
                            maxRows: 4, // Frontend grid is set for 4 usually, but can be flexible
                            fields: [
                                {
                                    name: 'valueIcon', // Renamed to avoid enum conflict
                                    type: 'text',
                                    admin: {
                                        components: {
                                            Field: '@/components/fields/IconPicker',
                                        },
                                    },
                                    defaultValue: 'Shield',
                                    required: true,
                                },
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Compliance',
                    fields: [
                        {
                            name: 'complianceTitle',
                            type: 'text',
                            label: 'Section Title',
                            localized: true,
                            defaultValue: 'License & Regulatory Compliance',
                        },
                        {
                            name: 'licenses',
                            type: 'array',
                            label: 'Licenses & Memberships',
                            fields: [
                                {
                                    name: 'licenseIcon', // Renamed to avoid enum conflict
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
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                    required: true,
                                },
                                {
                                    name: 'licenseIdLabel', // e.g. "License No" or "Member ID"
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'licenseIdValue', // e.g. "XXX/XXX"
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Leadership',
                    fields: [
                        {
                            name: 'leadershipTitle',
                            type: 'text',
                            label: 'Section Title',
                            localized: true,
                            defaultValue: 'Our Leadership',
                        },
                        {
                            name: 'leaders',
                            type: 'array',
                            label: 'Leaders',
                            fields: [
                                {
                                    name: 'photo',
                                    type: 'relationship',
                                    relationTo: 'media',
                                    label: 'Leader Photo',
                                },
                                {
                                    name: 'name',
                                    type: 'text',
                                    localized: true,
                                    required: true,
                                },
                                {
                                    name: 'role',
                                    type: 'text',
                                    localized: true,
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Commitment',
                    fields: [
                        {
                            name: 'commitmentTitle',
                            type: 'text',
                            localized: true,
                            defaultValue: 'Our Commitment to You',
                        },
                        {
                            name: 'commitmentDescription',
                            type: 'textarea',
                            localized: true,
                            required: false,
                        },
                    ],
                },
            ],
        },
    ],
};
