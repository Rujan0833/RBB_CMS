import { CollectionBeforeChangeHook } from 'payload'

export const mapSubmissionData: CollectionBeforeChangeHook = ({ data }) => {
    if (!data?.submissionData || !Array.isArray(data.submissionData)) return data

    // Added server logging to help debug field names coming from the frontend
    console.log('--- FORM SUBMISSION MAPPING ---')
    console.log('Submission ID:', data.id)
    console.log('Raw Data:', JSON.stringify(data.submissionData, null, 2))

    const findValue = (fieldNames: string[]) => {
        const match = data.submissionData.find((item: any) =>
            fieldNames.some((name) =>
                item.field?.toLowerCase() === name.toLowerCase() ||
                item.field?.toLowerCase().includes(name.toLowerCase())
            ),
        )
        return match ? match.value : undefined
    }

    // Permissive mapping logic to catch various field naming conventions
    const name = findValue(['name', 'first name', 'full name', 'fullname', 'full_name', 'fname', 'contactname'])
    const email = findValue(['email', 'email address', 'emailaddress', 'email_address', 'mail'])
    const phone = findValue(['phone', 'phone number', 'phonenumber', 'phone_number', 'tel', 'mobile', 'contact'])
    const subject = findValue(['subject', 'regarding', 'topic', 'reason'])
    const message = findValue(['message', 'msg', 'comments', 'enquiry', 'query', 'body'])

    console.log('Mapped Fields:', { name, email, phone, subject, message })
    console.log('-------------------------------')

    return {
        ...data,
        name: name || data.name,
        email: email || data.email,
        phone: phone || data.phone,
        subject: subject || data.subject,
        message: message || data.message,
    }
}
