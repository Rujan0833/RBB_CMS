import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
// import { supabase } from '../lib/supabase';
import { fetchContactPage } from '../lib/cms';
import { DynamicForm } from "../components/DynamicForm";

const DEFAULT_DATA = {
  heroTitle: "Contact Us",
  heroDescription: "Get in touch with our team for any queries or assistance",
  formTitle: "Send us a Message",
  contactInfoTitle: "Contact Information",
  contactMethods: [
    {
      icon: "MapPin",
      title: "Office Address",
      content: "New Baneshwor, Kathmandu\nNepal"
    },
    {
      icon: "Phone",
      title: "Phone",
      content: "+977-1-XXXXXXX\n+977-9XXXXXXXXX (Mobile)"
    },
    {
      icon: "Mail",
      title: "Email",
      content: "info@nepalsecurities.com.np\nsupport@nepalsecurities.com.np"
    },
    {
      icon: "Clock",
      title: "Office Hours",
      content: "Sunday - Thursday: 10:00 AM - 5:00 PM\nFriday - Saturday: Closed"
    }
  ],
  visitOfficeTitle: "Visit Our Office",
  visitOfficeDescription: "We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.",
  visitOfficeMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6744197870664!2d85.33724631506176!3d27.69397798279896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890",
  responseTimeTitle: "Response Time",
  responseTimeDescription: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly. For account-related issues, having your account number ready will help us serve you faster."
};

const IconMap: any = { MapPin, Phone, Mail, Clock };

export default function Contact() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchContactPage();
      if (cmsData) {
        setData({ ...DEFAULT_DATA, ...cmsData });
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {content.formTitle}
              </h2>
              {content.contactForm?.id ? (
                <DynamicForm formId={content.contactForm.id} />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-gray-600 italic">Form is being configured. Please check back soon.</p>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {content.contactInfoTitle}
              </h2>
              <div className="space-y-6 mb-8">
                {content.contactMethods.map((method: any, index: number) => {
                  const Icon = IconMap[method.icon] || MapPin;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-900 rounded-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {content.visitOfficeTitle}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.visitOfficeDescription}
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={content.visitOfficeMapUrl || DEFAULT_DATA.visitOfficeMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {content.responseTimeTitle}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {content.responseTimeDescription}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
