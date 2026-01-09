import { Shield, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchAboutPage, getImageUrl } from '../lib/cms';
import { LucideIcon } from '../components/LucideIcon';
import { useLocale } from '../context/LocaleContext';

// Fallback data (existing hardcoded content)
const DEFAULT_DATA = {
  heroTitle: "About Nepal Securities",
  heroDescription: "A trusted name in Nepal's capital market, dedicated to empowering investors with professional brokerage services.",
  whoWeAreTitle: "Who We Are",
  whoWeAreContent: [
    "Nepal Securities is a fully licensed securities broker authorized by the Securities Board of Nepal (SEBON) and a registered member of the Nepal Stock Exchange (NEPSE). We have been serving the Nepali investment community with integrity, professionalism, and dedication.",
    "Our mission is to democratize access to Nepal's capital market by providing reliable, transparent, and efficient brokerage services to retail investors, high-net-worth individuals, and institutional clients.",
    "We believe in building long-term relationships with our clients based on trust, compliance, and consistent service excellence."
  ],
  valuesTitle: "Our Values",
  values: [
    { icon: 'Shield', title: 'Integrity', description: 'Honest and transparent dealings with all stakeholders' },
    { icon: 'Award', title: 'Compliance', description: 'Strict adherence to SEBON regulations and guidelines' },
    { icon: 'Users', title: 'Client Focus', description: 'Putting client needs at the center of everything we do' },
    { icon: 'Target', title: 'Excellence', description: 'Commitment to delivering superior service quality' }
  ],
  complianceTitle: "License & Regulatory Compliance",
  licenses: [
    { icon: 'Shield', title: 'SEBON Licensed', description: 'Authorized and regulated by the Securities Board of Nepal, the apex regulatory body for securities market in Nepal.', licenseIdLabel: 'License No', licenseIdValue: 'XXX/XXX' },
    { icon: 'Award', title: 'NEPSE Member', description: 'Registered trading member of Nepal Stock Exchange (NEPSE), providing direct market access to investors.', licenseIdLabel: 'Member ID', licenseIdValue: 'XXX' }
  ],
  leadershipTitle: "Our Leadership",
  leaders: [
    { name: "Sachin", role: "Chief Executive Officer", description: "Leading the organization with over 15 years of experience in Nepal's capital market." },
    { name: "Name Here", role: "Head of Operations", description: "Ensuring smooth trading operations and client service excellence." },
    { name: "Name Here", role: "Compliance Officer", description: "Maintaining regulatory compliance and protecting client interests." }
  ],
  commitmentTitle: "Our Commitment to You",
  commitmentDescription: "We are committed to providing honest, transparent, and compliant brokerage services. We do not promise guaranteed returns or unrealistic gains. Market investments are subject to market risks, and we encourage all investors to make informed decisions based on their financial goals and risk appetite. Our role is to facilitate your trading and provide guidance, not to assure profits."
};

export default function About() {
  const [data, setData] = useState<any>(null);
  const { locale } = useLocale();

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchAboutPage(locale);
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
  }, [locale]);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whoWeAreTitle}</h2>
              {content.whoWeAreContent.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.valuesTitle}</h3>
              <div className="space-y-4">
                {content.values.map((value: any, index: number) => {
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <LucideIcon name={value.icon} className="h-6 w-6 text-blue-900 mt-1 flex-shrink-0" size={24} fallback={Shield} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{content.complianceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.licenses.map((license: any, index: number) => {
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 mx-auto">
                    <LucideIcon name={license.icon} className="h-8 w-8" size={32} fallback={Shield} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{license.title}</h3>
                  <p className="text-gray-600 text-center">
                    {license.description}
                  </p>
                  {(license.licenseIdLabel || license.licenseIdValue) && (
                    <p className="text-sm text-gray-500 mt-4 text-center">{license.licenseIdLabel}: {license.licenseIdValue}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{content.leadershipTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.leaders.map((leader: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {leader.photo ? (
                    <img src={getImageUrl(leader.photo)} alt={leader.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <Users className="h-16 w-16 text-gray-400" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-900 font-medium mb-2">{leader.role}</p>
                <p className="text-gray-600 text-sm">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">{content.commitmentTitle}</h3>
            <p className="text-blue-100 leading-relaxed">
              {content.commitmentDescription}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
