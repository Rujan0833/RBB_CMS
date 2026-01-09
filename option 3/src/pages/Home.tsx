// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchHomePage } from '../lib/cms';
import { LucideIcon } from '../components/LucideIcon';
import { useLocale } from '../context/LocaleContext';

// Default fallback data
const DEFAULT_DATA = {
  heroBadge: "SEBON Licensed & NEPSE Member",
  heroTitle: "Your Trusted Partner in Nepal's Capital Market",
  heroDescription: "Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.",
  heroFeatures: [
    { icon: "CheckCircle2", title: "Licensed & Regulated", subtitle: "Authorized by SEBON for securities trading" },
    { icon: "CheckCircle2", title: "NEPSE Member", subtitle: "Direct access to Nepal Stock Exchange" },
    { icon: "CheckCircle2", title: "Expert Support", subtitle: "Dedicated team to guide your investments" }
  ],
  trustIndicators: [
    { icon: "Shield", title: "Trusted", description: "SEBON licensed broker with proven track record" },
    { icon: "TrendingUp", title: "Professional", description: "Expert guidance for your investment journey" },
    { icon: "Users", title: "Customer First", description: "Dedicated support for all your queries" },
    { icon: "Award", title: "Compliant", description: "Strict adherence to regulatory standards" }
  ],
  servicesTitle: "Our Services",
  servicesDescription: "Comprehensive brokerage services designed for Nepali investors",
  servicePreviews: [
    { title: "Equity Trading", description: "Buy and sell shares on Nepal Stock Exchange with our secure and efficient trading platform." },
    { title: "Online Trading Support", description: "Access NEPSE from anywhere with our online trading assistance and technical support." },
    { title: "DEMAT Services", description: "Complete assistance with DEMAT account setup and MeroShare account management." }
  ],
  ctaTitle: "Ready to Start Trading?",
  ctaDescription: "Open your trading account today and get access to Nepal's capital market",
  ctaButtonText: "Open Trading Account"
};

// Merge CMS data with defaults safely
const mergeHomeData = (cmsData: Partial<typeof DEFAULT_DATA>) => ({
  heroBadge: cmsData.heroBadge ?? DEFAULT_DATA.heroBadge,
  heroTitle: cmsData.heroTitle ?? DEFAULT_DATA.heroTitle,
  heroDescription: cmsData.heroDescription ?? DEFAULT_DATA.heroDescription,
  heroFeatures: cmsData.heroFeatures?.length ? cmsData.heroFeatures : DEFAULT_DATA.heroFeatures,
  trustIndicators: cmsData.trustIndicators?.length ? cmsData.trustIndicators : DEFAULT_DATA.trustIndicators,
  servicesTitle: cmsData.servicesTitle ?? DEFAULT_DATA.servicesTitle,
  servicesDescription: cmsData.servicesDescription ?? DEFAULT_DATA.servicesDescription,
  servicePreviews: cmsData.servicePreviews?.length ? cmsData.servicePreviews : DEFAULT_DATA.servicePreviews,
  ctaTitle: cmsData.ctaTitle ?? DEFAULT_DATA.ctaTitle,
  ctaDescription: cmsData.ctaDescription ?? DEFAULT_DATA.ctaDescription,
  ctaButtonText: cmsData.ctaButtonText ?? DEFAULT_DATA.ctaButtonText
});

export default function Home() {
  const { locale } = useLocale();
  const [data, setData] = useState<typeof DEFAULT_DATA | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchHomePage(locale);
      if (cmsData) setData(mergeHomeData(cmsData));
      else setData(DEFAULT_DATA);
    };
    loadData();
  }, [locale]); // re-fetch whenever locale changes

  const content = data || DEFAULT_DATA;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-6">
                <LucideIcon name="Shield" className="h-4 w-4 mr-2" size={16} />
                <span className="text-sm font-medium">{content.heroBadge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{content.heroTitle}</h1>
              <p className="text-xl text-blue-100 mb-8">{content.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/open-account" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  {content.ctaButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="space-y-6">
                  {content.heroFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-600 rounded-lg p-3">
                        <LucideIcon name={feature.icon} className="h-6 w-6" size={24} fallback={CheckCircle2} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-blue-100 text-sm">{feature.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                  <LucideIcon name={indicator.icon} className="h-8 w-8" size={32} fallback={Shield} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.servicesTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{content.servicesDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.servicePreviews.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-8">{content.ctaDescription}</p>
          <Link to="/open-account" className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            {content.ctaButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
