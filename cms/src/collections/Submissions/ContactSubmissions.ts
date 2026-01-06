import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '../../access/isSuperAdmin'
import { isClientAdmin } from '../../access/isClientAdmin'

const isSuperOrClientAdmin = (args: any) => isSuperAdmin(args) || isClientAdmin(args)

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    dbName: 'form_submissions',
    labels: {
        singular: 'Contact Submission',
        plural: 'Contact Submissions',
    },
    admin: {
        group: 'Form Submissions',
        defaultColumns: ['name', 'email', 'subject', 'createdAt'],
        useAsTitle: 'name',
         listSearchableFields: ['name', 'email', 'subject'],
    },
    access: {
        read: (args): any => {
            const isAdmin = isSuperOrClientAdmin(args)
            if (typeof isAdmin === 'boolean' && !isAdmin) return false

            return {
                form: {
                    equals: '1', // Ensure this matches the ID of your Contact Form
                },
            }
        },
        update: isSuperOrClientAdmin,
        create: () => true,
        delete: isSuperOrClientAdmin,
    },
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'name',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'email',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'phone',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'subject',
            type: 'text',
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'message',
            type: 'textarea',
            admin: {
                readOnly: true,
            },
        },
    ],
}
