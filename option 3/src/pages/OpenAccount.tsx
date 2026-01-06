import { CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOpenAccountPage } from '../lib/cms';
import { LucideIcon } from '../components/LucideIcon';

const DEFAULT_DATA = {
  heroTitle: "Open a Trading Account",
  heroDescription: "Start your investment journey with a simple, straightforward account opening process",
  processTitle: "Step-by-Step Process",
  processDescription: "Follow these simple steps to open your trading account and start investing in Nepal's stock market",
  steps: [
    {
      stepNumber: "1",
      title: "Gather Required Documents",
      description: "Collect all necessary documents before visiting our office or submitting online:",
      icon: "FileText",
      items: [
        "Nepali Citizenship Certificate (both sides) or valid Passport for foreign nationals",
        "PAN Card (Permanent Account Number)",
        "Recent passport-size photographs (2 copies)",
        "Bank account details and bank statement (recent)",
        "DEMAT account number (if you already have one)"
      ]
    },
    {
      stepNumber: "2",
      title: "Open a DEMAT Account",
      description: "A DEMAT account is mandatory for trading on NEPSE. If you don't have one:",
      icon: "CreditCard",
      items: [
        "We will guide you to authorized Depository Participants (DPs)",
        "Fill out the DEMAT account opening form",
        "Submit required documents to the DP",
        "Receive your DEMAT account number (BO ID)"
      ]
    },
    {
      stepNumber: "3",
      title: "Complete KYC & Trading Account Form",
      description: "Visit our office or submit documents online to complete your KYC:",
      icon: "UserCheck",
      items: [
        "Fill out the trading account opening form",
        "Submit all required documents for verification",
        "Complete in-person verification (as per SEBON guidelines)",
        "Sign the broker-client agreement"
      ]
    },
    {
      stepNumber: "4",
      title: "Account Activation & Start Trading",
      description: "Once your documents are verified and approved:",
      icon: "CheckCircle2",
      items: [
        "Receive your trading account credentials",
        "Get access to online trading platform",
        "Fund your account through linked bank account",
        "Start trading on NEPSE!"
      ]
    }
  ],
  downloadsTitle: "Download Forms",
  downloadsDescription: "Download and review our account opening forms before your visit",
  downloads: [
    {
      title: "Trading Account Form",
      description: "Account opening application form",
      link: "#",
      icon: "Download"
    },
    {
      title: "KYC Form",
      description: "Know Your Customer form",
      link: "#",
      icon: "Download"
    },
    {
      title: "Agreement Form",
      description: "Broker-client agreement",
      link: "#",
      icon: "Download"
    }
  ],
  contactTitle: "Have Questions?",
  contactDescription: "Our team is ready to help you through the account opening process. Contact us today!",
  contactCtaText: "Contact Us",
  contactCtaUrl: "/contact",
  learnMoreText: "Learn More",
  learnMoreUrl: "/education",
  infoTitle: "Important Information",
  infoItems: [
    { text: "Account opening is free of charge. We do not charge any fees for opening a trading account." },
    { text: "Processing time is typically 3-5 business days after submission of complete documents." },
    { text: "In-person verification may be required as per SEBON regulations." },
    { text: "Only Nepali citizens and legal foreign residents can open trading accounts." }
  ]
};

export default function OpenAccount() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchOpenAccountPage();
      if (cmsData) {
        setData({
          ...DEFAULT_DATA,
          ...cmsData
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.processTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content.processDescription}
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {content.steps.map((step: any, index: number) => {
              const isLast = index === content.steps.length - 1;
              const boxClass = isLast
                ? "bg-green-50 border-2 border-green-200"
                : "bg-gray-50";
              const circleClass = isLast
                ? "bg-green-600"
                : "bg-blue-900";
              const iconClass = isLast
                ? "text-green-600"
                : "text-blue-900";

              return (
                <div key={index} className={`flex flex-col md:flex-row gap-6 items-start ${boxClass} rounded-xl p-6 md:p-8`}>
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center w-16 h-16 ${circleClass} text-white rounded-full text-2xl font-bold`}>
                      {step.stepNumber}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <LucideIcon name={step.icon} className={`h-6 w-6 mr-2 ${iconClass}`} size={24} fallback={CheckCircle2} />
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {step.description}
                    </p>
                    {step.items && step.items.length > 0 && (
                      <ul className="space-y-2 text-gray-700">
                        {step.items.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className={`h-5 w-5 ${isLast ? 'text-green-600' : 'text-green-600'} mr-2 mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.downloadsTitle}</h2>
            <p className="text-gray-600">
              {content.downloadsDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {content.downloads.map((download: any, index: number) => (
              <a
                key={index}
                href={download.link || "#"}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <LucideIcon name={download.icon} className="h-12 w-12 text-blue-900 mb-4" size={48} fallback={Download} />
                <h3 className="font-semibold text-gray-900 mb-2">{download.title}</h3>
                <p className="text-sm text-gray-600 text-center mb-3">{download.description}</p>
                <span className="text-sm text-blue-900 font-medium">Download PDF</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.contactTitle}</h2>
            <p className="text-gray-700 mb-6">
              {content.contactDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={content.contactCtaUrl}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                {content.contactCtaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to={content.learnMoreUrl}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg border-2 border-blue-900 hover:bg-blue-50 transition-colors"
              >
                {content.learnMoreText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.infoTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {content.infoItems.map((item: any, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
