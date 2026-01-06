import type { CollectionConfig } from 'payload'
import { Pages } from './index'

export const createVirtualPageCollection = (slug: string, template: string, label: string): CollectionConfig => ({
    slug,
    dbName: 'pages',
    lockDocuments: false,
    labels: {
        singular: label,
        plural: label,
    },
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    access: {
        read: ({ req: { user } }): any => {
            // If no user (Public/Frontend), only show published documents of this template
            if (!user) {
                return {
                    _status: {
                        equals: 'published',
                    },
                    template: {
                        equals: template,
                    },
                }
            }

            // If user exists (Admin Panel), show all documents of this template
            return {
                template: {
                    equals: template,
                },
            }
        },
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    hooks: {
        ...Pages.hooks,
        beforeChange: [
            ...(Pages.hooks?.beforeChange || []),
            ({ data }) => {
                return {
                    ...data,
                    template,
                }
            },
        ],
    },
    versions: Pages.versions,
    fields: Pages.fields,
})
