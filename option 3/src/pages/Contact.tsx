import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchContactPage } from "../lib/cms";
import { fetchSiteSettings } from "../lib/api/siteSettings";
import { DynamicForm } from "../components/DynamicForm";

interface ContactMethod {
  icon: "MapPin" | "Phone" | "Mail" | "Clock";
  title: string;
  content: string;
}

interface ContactPageData {
  heroTitle: string;
  heroDescription: string;
  formTitle: string;
  contactInfoTitle: string;
  contactMethods: ContactMethod[];
  visitOfficeTitle: string;
  visitOfficeDescription: string;
  visitOfficeMapUrl: string;
  responseTimeTitle: string;
  responseTimeDescription: string;
  contactForm?: { id: string };
}

const DEFAULT_DATA: ContactPageData = {
  heroTitle: "Contact Us",
  heroDescription: "Get in touch with our team for any queries or assistance",
  formTitle: "Send us a Message",
  contactInfoTitle: "Contact Information",
  contactMethods: [
    { icon: "MapPin", title: "Office Address", content: "New Baneshwor, Kathmandu\nNepal" },
    { icon: "Phone", title: "Phone", content: "+977-1-XXXXXXX\n+977-9XXXXXXXXX (Mobile)" },
    { icon: "Mail", title: "Email", content: "info@nepalsecurities.com.np\nsupport@nepalsecurities.com.np" },
    { icon: "Clock", title: "Office Hours", content: "Sunday - Thursday: 10:00 AM - 5:00 PM\nFriday - Saturday: Closed" },
  ],
  visitOfficeTitle: "Visit Our Office",
  visitOfficeDescription: "We welcome you to visit our office for account opening, document submission, or any queries. Our team is ready to assist you.",
  visitOfficeMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6744197870664!2d85.33724631506176!3d27.69397798279896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890",
  responseTimeTitle: "Response Time",
  responseTimeDescription: "We strive to respond to all inquiries within 24-48 business hours. For urgent matters during trading hours, please call us directly.",
};

const IconMap: Record<string, any> = { MapPin, Phone, Mail, Clock };

export default function Contact() {
  const [data, setData] = useState<ContactPageData>(DEFAULT_DATA);

  useEffect(() => {
    const loadData = async () => {
      try {
        const cmsData = await fetchContactPage();
        const siteSettings = await fetchSiteSettings();
        const office = siteSettings?.office;

        const mergedData: ContactPageData = {
          ...DEFAULT_DATA,
          ...cmsData,
          contactMethods: [
            {
              icon: "MapPin",
              title: "Office Address",
              content: office?.address || DEFAULT_DATA.contactMethods[0].content,
            },
            {
              icon: "Phone",
              title: "Phone",
              content: office?.phones?.length ? office.phones.map(p => p.number).join("\n") : DEFAULT_DATA.contactMethods[1].content,
            },
            {
              icon: "Mail",
              title: "Email",
              content: office?.emails?.length ? office.emails.map(e => e.email).join("\n") : DEFAULT_DATA.contactMethods[2].content,
            },
            {
              icon: "Clock",
              title: "Office Hours",
              content: office?.officeHours?.length ? office.officeHours.map(o => `${o.day}: ${o.time}`).join("\n") : DEFAULT_DATA.contactMethods[3].content,
            },
          ],
        };

        setData(mergedData);
      } catch (err) {
        console.error("Failed to fetch contact page data:", err);
        setData(DEFAULT_DATA);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{data.heroDescription}</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{data.formTitle}</h2>
              {data.contactForm?.id ? (
                <DynamicForm formId={data.contactForm.id} />
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <p className="text-gray-600 italic">Form is being configured. Please check back soon.</p>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{data.contactInfoTitle}</h2>
              <div className="space-y-6 mb-8">
                {data.contactMethods.map((method, idx) => {
                  const Icon = IconMap[method.icon] || MapPin;
                  return (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-900 rounded-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{method.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{data.visitOfficeTitle}</h3>
                <p className="text-gray-600 mb-4">{data.visitOfficeDescription}</p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={data.visitOfficeMapUrl}
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

      {/* Response Time */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{data.responseTimeTitle}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{data.responseTimeDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
