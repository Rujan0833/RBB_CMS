import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { fetchContactPage } from "../lib/cms";
import { fetchSiteSettings } from "../lib/api/siteSettings";

// ----- TypeScript Types -----
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
}

// ----- Default fallback data -----
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

// ----- Icon mapping -----
const IconMap: Record<string, any> = { MapPin, Phone, Mail, Clock };

// ----- Contact Component -----
export default function Contact() {
  const [data, setData] = useState<ContactPageData | null>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // ----- Fetch CMS page + site settings -----
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
            content:
              office?.address ||
              DEFAULT_DATA.contactMethods[0].content,
          },
          {
            icon: "Phone",
            title: "Phone",
            content:
              office?.phones?.length
                ? office.phones.map(p => p.number).join("\n")
                : DEFAULT_DATA.contactMethods[1].content,
          },
          {
            icon: "Mail",
            title: "Email",
            content:
              office?.emails?.length
                ? office.emails.map(e => e.email).join("\n")
                : DEFAULT_DATA.contactMethods[2].content,
          },
          {
            icon: "Clock",
            title: "Office Hours",
            content:
              office?.officeHours?.length
                ? office.officeHours
                    .map(o => `${o.day}: ${o.time}`)
                    .join("\n")
                : DEFAULT_DATA.contactMethods[3].content,
          },
        ],
      };


        setData(mergedData);
      } catch (error) {
        console.error("Failed to load contact page data:", error);
        setData(DEFAULT_DATA);
      }
    };

    loadData();
  }, []);

  const content = data || DEFAULT_DATA;

  // ----- Handle form submission -----
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission (replace with Supabase/API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ full_name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ----- Render -----
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.heroTitle}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{content.heroDescription}</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["full_name", "email", "phone", "subject", "message"].map((field) => {
                  const isTextarea = field === "message";
                  const placeholderMap: Record<string, string> = {
                    full_name: "Enter your full name",
                    email: "your.email@example.com",
                    phone: "+977-XXX-XXXXXXX",
                    subject: "Select a subject",
                    message: "Tell us how we can help you...",
                  };

                  return (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {field.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())} *
                      </label>
                      {isTextarea ? (
                        <textarea
                          rows={6}
                          required
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field]: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-colors resize-none"
                          placeholder={placeholderMap[field]}
                        ></textarea>
                      ) : field === "subject" ? (
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Account Opening">Account Opening</option>
                          <option value="Trading Support">Trading Support</option>
                          <option value="DEMAT Services">DEMAT Services</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Complaint">Complaint</option>
                          <option value="Other">Other</option>
                        </select>
                      ) : (
                        <input
                          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                          required
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field]: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-colors"
                          placeholder={placeholderMap[field]}
                        />
                      )}
                    </div>
                  );
                })}

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">
                      Thank you for contacting us! We will get back to you shortly.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : <><Send className="mr-2 h-5 w-5" />Send Message</>}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{content.contactInfoTitle}</h2>
                <div className="space-y-6 mb-8">
                  {content.contactMethods.map((method, index) => {
                    const Icon = IconMap[method.icon] || MapPin;
                    return (
                      <div key={index} className="flex items-start space-x-4">
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
              </div>


              {/* Visit Office */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{content.visitOfficeTitle}</h3>
                <p className="text-gray-600 mb-4">{content.visitOfficeDescription}</p>
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

      {/* Response Time */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.responseTimeTitle}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{content.responseTimeDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

