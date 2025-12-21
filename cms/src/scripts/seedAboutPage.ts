import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

// NOTE: This content mirrors the hardcoded content in option 3/option 3/src/pages/About.tsx
const run = async () => {
    const payload = await getPayload({ config })

    const existing = await payload.find({
        collection: 'pages',
        where: {
            slug: { equals: 'about' }
        }
    })

    if (existing.docs.length > 0) {
        console.log("About page already exists. Updating it to match new structure...")
        await payload.update({
            collection: 'pages',
            id: existing.docs[0].id,
            data: getSeedData()
        })
        console.log("Updated existing About page.")
        process.exit(0)
    }

    console.log("Creating 'About' page...")

    try {
        await payload.create({
            collection: 'pages',
            data: {
                title: 'About Us',
                slug: 'about',
                template: 'about',
                _status: 'published',
                publishedAt: new Date().toISOString(),
                ...getSeedData()
            }
        })
        console.log("✅ Successfully created 'About' page with Nepal Securities content.")
    } catch (e: any) {
        console.error("❌ Failed to create About page.")
        console.error(e)
    }
    process.exit(0)
}

function getSeedData() {
    return {
        // Hero
        heroTitle: "About Nepal Securities",
        heroDescription: "A trusted name in Nepal's capital market, dedicated to empowering investors with professional brokerage services.",

        // Who We Are
        whoWeAreTitle: "Who We Are",
        whoWeAreContent: {
            root: {
                type: "root",
                format: "",
                indent: 0,
                version: 1,
                children: [
                    {
                        type: "paragraph",
                        version: 1,
                        children: [{
                            type: "text",
                            text: "Nepal Securities is a fully licensed securities broker authorized by the Securities Board of Nepal (SEBON) and a registered member of the Nepal Stock Exchange (NEPSE). We have been serving the Nepali investment community with integrity, professionalism, and dedication.",
                            version: 1
                        }]
                    },
                    {
                        type: "paragraph",
                        version: 1,
                        children: [{
                            type: "text",
                            text: "Our mission is to democratize access to Nepal's capital market by providing reliable, transparent, and efficient brokerage services to retail investors, high-net-worth individuals, and institutional clients.",
                            version: 1
                        }]
                    },
                    {
                        type: "paragraph",
                        version: 1,
                        children: [{
                            type: "text",
                            text: "We believe in building long-term relationships with our clients based on trust, compliance, and consistent service excellence.",
                            version: 1
                        }]
                    }
                ],
                direction: "ltr"
            }
        },

        // Values
        valuesTitle: "Our Values",
        values: [
            {
                valueIcon: "Shield" as const,
                title: "Integrity",
                description: "Honest and transparent dealings with all stakeholders"
            },
            {
                valueIcon: "Award" as const,
                title: "Compliance",
                description: "Strict adherence to SEBON regulations and guidelines"
            },
            {
                valueIcon: "Users" as const,
                title: "Client Focus",
                description: "Putting client needs at the center of everything we do"
            },
            {
                valueIcon: "Target" as const,
                title: "Excellence",
                description: "Commitment to delivering superior service quality"
            }
        ],

        // Compliance
        complianceTitle: "License & Regulatory Compliance",
        licenses: [
            {
                licenseIcon: "Shield" as const,
                title: "SEBON Licensed",
                description: "Authorized and regulated by the Securities Board of Nepal, the apex regulatory body for securities market in Nepal.",
                licenseIdLabel: "License No",
                licenseIdValue: "XXX/XXX"
            },
            {
                licenseIcon: "Award" as const,
                title: "NEPSE Member",
                description: "Registered trading member of Nepal Stock Exchange (NEPSE), providing direct market access to investors.",
                licenseIdLabel: "Member ID",
                licenseIdValue: "XXX"
            }
        ],

        // Leadership
        leadershipTitle: "Our Leadership",
        leaders: [
            {
                name: "Name Here",
                role: "Chief Executive Officer",
                description: "Leading the organization with over 15 years of experience in Nepal's capital market."
            },
            {
                name: "Name Here",
                role: "Head of Operations",
                description: "Ensuring smooth trading operations and client service excellence."
            },
            {
                name: "Name Here",
                role: "Compliance Officer",
                description: "Maintaining regulatory compliance and protecting client interests."
            }
        ],

        // Commitment
        commitmentTitle: "Our Commitment to You",
        commitmentDescription: "We are committed to providing honest, transparent, and compliant brokerage services. We do not promise guaranteed returns or unrealistic gains. Market investments are subject to market risks, and we encourage all investors to make informed decisions based on their financial goals and risk appetite. Our role is to facilitate your trading and provide guidance, not to assure profits."
    }
}

run()
