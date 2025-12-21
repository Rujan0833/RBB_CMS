import 'dotenv/config';
import { getPayload } from 'payload';
import config from '@payload-config';

const seedServicesPage = async () => {
    const payload = await getPayload({ config });

    console.log('[✓] Seeding Services Page...');

    try {
        const pages = await payload.find({
            collection: 'pages',
            where: {
                slug: {
                    equals: 'services',
                },
            },
        });

        const seedData = {
            title: 'Services',
            slug: 'services',
            template: 'services' as const,
            publishedAt: new Date().toISOString(),
            _status: 'published',
            servicesHeroTitle: 'Our Services',
            servicesHeroDescription: 'Comprehensive brokerage solutions tailored for the Nepali investor',
            serviceBlocks: [
                {
                    title: "Equity Trading (Secondary Market)",
                    serviceIcon: "TrendingUp" as const,
                    description: "Buy and sell shares listed on Nepal Stock Exchange (NEPSE) through our secure and efficient trading platform. We facilitate seamless execution of your trades in the secondary market.",
                    features: [
                        { text: "Real-time order placement and execution" },
                        { text: "Access to all NEPSE-listed securities" },
                        { text: "Transparent pricing and commission structure" },
                        { text: "Trade confirmation and settlement support" }
                    ],
                    sideBoxTitle: "Who is this for?",
                    sideBoxType: "blue-cta" as const,
                    sideBoxDescription: "Perfect for retail investors, HNIs, and institutional clients looking to participate in Nepal's equity market.",
                    ctaText: "Open trading account",
                    ctaUrl: "/open-account"
                },
                {
                    title: "Online Trading Support",
                    serviceIcon: "Monitor" as const,
                    description: "Trade from anywhere in Nepal with our online trading support. We provide technical assistance and guidance to help you navigate the online trading platform efficiently.",
                    features: [
                        { text: "Platform setup and login assistance" },
                        { text: "Training on how to place orders online" },
                        { text: "Technical troubleshooting support" },
                        { text: "Account statements and transaction history" }
                    ],
                    sideBoxTitle: "Trading Channels",
                    sideBoxType: "gray-list" as const,
                    sideBoxList: [
                        { text: "Online trading platform access" },
                        { text: "Phone-based order placement" },
                        { text: "Branch visit for assisted trading" },
                        { text: "Technical support during trading hours" }
                    ]
                },
                {
                    title: "DEMAT & MeroShare Assistance",
                    serviceIcon: "FileText" as const,
                    description: "Complete support for opening and managing your DEMAT account with any Depository Participant, and assistance with MeroShare account for IPO applications.",
                    features: [
                        { text: "DEMAT account opening guidance" },
                        { text: "MeroShare account setup support" },
                        { text: "IPO application assistance" },
                        { text: "DEMAT statement and transfer support" }
                    ],
                    sideBoxTitle: "Important Note",
                    sideBoxType: "simple-note" as const,
                    sideBoxDescription: "A DEMAT account is mandatory for trading on NEPSE. We will guide you through the entire process of opening your DEMAT account with authorized Depository Participants in Nepal."
                },
                {
                    title: "Portfolio Support",
                    serviceIcon: "PieChart" as const,
                    description: "Keep track of your investments with our portfolio tracking and reporting services. We provide regular updates on your holdings and transactions.",
                    features: [], // No checklist for this one in original
                    sideBoxTitle: "What We Provide",
                    sideBoxType: "gray-list" as const,
                    sideBoxList: [
                        { text: "Regular portfolio statements" },
                        { text: "Transaction summaries and tax reports" },
                        { text: "Market information and updates" },
                        { text: "Holdings and profit/loss tracking" }
                    ]
                }
            ],
            helpSectionTitle: "Need Help Choosing?",
            helpSectionDescription: "Our team is here to help you understand our services and guide you through the account opening process.",
            helpSectionCtaText: "Contact Us",
            helpSectionCtaUrl: "/contact",
            disclaimerTitle: "Important Disclaimer",
            disclaimerText: "We are a SEBON-licensed broker providing execution and support services only. We do not guarantee returns or profits from market investments. All investments in the securities market are subject to market risks. Past performance is not indicative of future results. Investors should carefully assess their financial situation and risk tolerance before investing."
        };

        if (pages.totalDocs > 0) {
            console.log(`[!] Services page exists. Updating...`);
            await payload.update({
                collection: 'pages',
                id: pages.docs[0].id,
                data: seedData,
            });
        } else {
            console.log(`[+] Creating Services page...`);
            await payload.create({
                collection: 'pages',
                data: seedData,
            });
        }

        console.log('[✓] Services page seeded successfully.');
        process.exit(0);
    } catch (error) {
        console.error('[x] Error seeding Services page:', error);
        process.exit(1);
    }
};

seedServicesPage();
