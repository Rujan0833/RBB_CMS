import { TrendingUp, Monitor, FileText, PieChart, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchServicesPage } from '../lib/cms';

const DEFAULT_DATA = {
  heroTitle: "Our Services",
  heroDescription: "Comprehensive brokerage solutions tailored for the Nepali investor",
  serviceBlocks: [
    {
      title: "Equity Trading (Secondary Market)",
      serviceIcon: "TrendingUp",
      description: "Buy and sell shares listed on Nepal Stock Exchange (NEPSE) through our secure and efficient trading platform. We facilitate seamless execution of your trades in the secondary market.",
      features: [
        { text: "Real-time order placement and execution" },
        { text: "Access to all NEPSE-listed securities" },
        { text: "Transparent pricing and commission structure" },
        { text: "Trade confirmation and settlement support" }
      ],
      sideBoxTitle: "Who is this for?",
      sideBoxType: "blue-cta",
      sideBoxDescription: "Perfect for retail investors, HNIs, and institutional clients looking to participate in Nepal's equity market.",
      ctaText: "Open trading account",
      ctaUrl: "/open-account"
    },
    {
      title: "Online Trading Support",
      serviceIcon: "Monitor",
      description: "Trade from anywhere in Nepal with our online trading support. We provide technical assistance and guidance to help you navigate the online trading platform efficiently.",
      features: [
        { text: "Platform setup and login assistance" },
        { text: "Training on how to place orders online" },
        { text: "Technical troubleshooting support" },
        { text: "Account statements and transaction history" }
      ],
      sideBoxTitle: "Trading Channels",
      sideBoxType: "gray-list",
      sideBoxList: [
        { text: "Online trading platform access" },
        { text: "Phone-based order placement" },
        { text: "Branch visit for assisted trading" },
        { text: "Technical support during trading hours" }
      ]
    },
    {
      title: "DEMAT & MeroShare Assistance",
      serviceIcon: "FileText",
      description: "Complete support for opening and managing your DEMAT account with any Depository Participant, and assistance with MeroShare account for IPO applications.",
      features: [
        { text: "DEMAT account opening guidance" },
        { text: "MeroShare account setup support" },
        { text: "IPO application assistance" },
        { text: "DEMAT statement and transfer support" }
      ],
      sideBoxTitle: "Important Note",
      sideBoxType: "simple-note",
      sideBoxDescription: "A DEMAT account is mandatory for trading on NEPSE. We will guide you through the entire process of opening your DEMAT account with authorized Depository Participants in Nepal."
    },
    {
      title: "Portfolio Support",
      serviceIcon: "PieChart",
      description: "Keep track of your investments with our portfolio tracking and reporting services. We provide regular updates on your holdings and transactions.",
      features: [],
      sideBoxTitle: "What We Provide",
      sideBoxType: "gray-list",
      sideBoxList: [
        { text: "Regular portfolio statements" },
        { text: "Transaction summaries and tax reports" },
        { text: "Market information and updates" },
        { text: "Holdings and profit/loss tracking" }
      ]
    }
  ],
  helpSection: {
    title: "Need Help Choosing?",
    description: "Our team is here to help you understand our services and guide you through the account opening process.",
    ctaText: "Contact Us",
    ctaUrl: "/contact"
  },
  disclaimer: {
    title: "Important Disclaimer",
    text: "We are a SEBON-licensed broker providing execution and support services only. We do not guarantee returns or profits from market investments. All investments in the securities market are subject to market risks. Past performance is not indicative of future results. Investors should carefully assess their financial situation and risk tolerance before investing."
  }
};

const IconMap: any = { TrendingUp, Monitor, FileText, PieChart, HelpCircle };

export default function Services() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchServicesPage();
      if (cmsData) {
        setData({
          heroTitle: cmsData.heroTitle || DEFAULT_DATA.heroTitle,
          heroDescription: cmsData.heroDescription || DEFAULT_DATA.heroDescription,
          serviceBlocks: cmsData.serviceBlocks || DEFAULT_DATA.serviceBlocks,
          helpSection: cmsData.helpSection || DEFAULT_DATA.helpSection,
          disclaimer: cmsData.disclaimer || DEFAULT_DATA.disclaimer,
        });
      } else {
        setData(DEFAULT_DATA);
      }
    };
    loadData();
  }, []);

  const content = data || DEFAULT_DATA;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {content.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {content.serviceBlocks.map((block: any, index: number) => {
              const isEven = index % 2 === 0;
              const Icon = IconMap[block.serviceIcon] || TrendingUp;

              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? "" : "order-1 md:order-2"}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-xl mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{block.title}</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {block.description}
                    </p>
                    {block.features && block.features.length > 0 && (
                      <ul className="space-y-3 mb-6">
                        {block.features.map((item: any, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className={`${isEven ? "bg-gray-50" : "order-2 md:order-1 bg-gray-50"} rounded-xl p-8`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{block.sideBoxTitle}</h3>

                    {block.sideBoxType === 'blue-cta' && (
                      <>
                        <p className="text-gray-600 mb-4">{block.sideBoxDescription}</p>
                        <Link
                          to={block.ctaUrl || "#"}
                          className="inline-flex items-center text-blue-900 font-medium hover:underline"
                        >
                          {block.ctaText} <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </>
                    )}

                    {block.sideBoxType === 'gray-list' && (
                      <ul className="space-y-3 text-gray-600">
                        {block.sideBoxList?.map((item: any, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-900 mr-2">•</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {block.sideBoxType === 'simple-note' && (
                      <p className="text-gray-600">
                        {block.sideBoxDescription}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-8 w-8 text-blue-900 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{content.helpSection.title}</h2>
                </div>
                <p className="text-gray-600">
                  {content.helpSection.description}
                </p>
              </div>
              <Link
                to={content.helpSection.ctaUrl}
                className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
              >
                {content.helpSection.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.disclaimer.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {content.disclaimer.text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
