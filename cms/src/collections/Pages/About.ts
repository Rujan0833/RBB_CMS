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
                            defaultValue: 'About Nepal Securities',
                            required: true,
                        },
                        {
                            name: 'heroDescription',
                            type: 'textarea',
                            label: 'Hero Description',
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
                            defaultValue: 'Who We Are',
                        },
                        {
                            name: 'whoWeAreContent',
                            type: 'richText', // Using RichText to allow multiple paragraphs/formatting
                            label: 'Content',
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
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
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
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: true,
                                },
                                {
                                    name: 'licenseIdLabel', // e.g. "License No" or "Member ID"
                                    type: 'text',
                                },
                                {
                                    name: 'licenseIdValue', // e.g. "XXX/XXX"
                                    type: 'text',
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
                                    required: true,
                                },
                                {
                                    name: 'role',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
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
                            defaultValue: 'Our Commitment to You',
                        },
                        {
                            name: 'commitmentDescription',
                            type: 'textarea',
                            required: false,
                        },
                    ],
                },
            ],
        },
    ],
};
