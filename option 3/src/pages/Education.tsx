import { BookOpen, AlertTriangle, TrendingUp, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchInvestorPage } from '../lib/cms';
import { LucideIcon } from '../components/LucideIcon';

const DEFAULT_DATA = {
  heroTitle: "Investor Education",
  heroDescription: "Learn the basics of stock market investing in Nepal and make informed decisions",
  educationTopics: [
    {
      title: "Understanding NEPSE Trading",
      icon: "BookOpen",
      theme: "blue",
      content: {
        root: {
          children: [
            {
              children: [{ text: "The secondary market is where investors buy and sell shares that have already been issued by companies. NEPSE is Nepal's secondary market for equity trading." }]
            }
          ]
        }
      }
    },
    {
      title: "Key Trading Concepts",
      icon: "TrendingUp",
      theme: "green",
      content: {}
    }
  ],
  riskTitle: "Risk Disclaimer",
  riskItems: [
    { title: "Market investments are subject to market risks.", text: "The value of your investments can go up or down based on market conditions, company performance, economic factors, and other variables." },
    { title: "Past performance is not indicative of future results.", text: "A stock that performed well in the past may not continue to perform well in the future." },
    { title: "You can lose money.", text: "There is no guarantee of profits in the stock market. You may lose part or all of your invested capital." },
    { title: "Do your own research.", text: "Always conduct thorough research and consider seeking advice from qualified financial advisors before making investment decisions." },
    { title: "Invest only what you can afford to lose.", text: "Never invest money that you need for essential expenses or emergency situations." },
    { title: "Diversification is important.", text: "Don't put all your money in one stock or sector. Spread your investments to manage risk." }
  ],
  faqs: [
    {
      question: 'What is NEPSE?',
      answer: 'Nepal Stock Exchange (NEPSE) is the only stock exchange in Nepal where securities like shares, bonds, and mutual funds are traded. It operates under the regulation of Securities Board of Nepal (SEBON).',
    },
    {
      question: 'What is a DEMAT account?',
      answer: 'A DEMAT (Dematerialized) account is an account that holds your shares and securities in electronic form. It is mandatory to have a DEMAT account to trade on NEPSE. Your DEMAT account is managed by a Depository Participant (DP).',
    },
    {
      question: 'How does stock trading work on NEPSE?',
      answer: 'Stock trading on NEPSE follows a T+3 settlement cycle. When you buy shares, the payment is settled and shares are credited to your DEMAT account within 3 working days after the trade date. Similarly, when you sell, the shares are debited from your account and payment is received within 3 working days.',
    },
    {
      question: 'What are the trading hours?',
      answer: 'NEPSE trading hours are typically from 11:00 AM to 3:00 PM, Sunday to Thursday (Nepal follows a Saturday holiday). The exchange is closed on Fridays, Saturdays, and public holidays.',
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'There is no fixed minimum investment amount. You can buy shares in units of 10 (called a lot). The minimum investment depends on the price of the stock you want to buy. For example, if a stock is priced at NPR 500, you would need at least NPR 5,000 to buy one lot (10 shares).',
    },
    {
      question: 'What is MeroShare?',
      answer: 'MeroShare is an online platform for applying to Initial Public Offerings (IPOs) in Nepal. It is managed by CDS & Clearing Limited. You need a MeroShare account linked to your DEMAT account to apply for IPOs online.',
    },
    {
      question: 'How do I choose which stocks to buy?',
      answer: 'Stock selection should be based on your investment goals, risk tolerance, and research. Consider factors like company fundamentals, financial performance, industry trends, and market conditions. We recommend consulting with financial advisors and doing thorough research before investing.',
    },
    {
      question: 'What are the charges for trading?',
      answer: 'Trading charges include broker commission (typically 0.4-0.6% of trade value), SEBON fee (0.015%), and other applicable fees. Your broker will provide a complete breakdown of all charges.',
    },
    {
      question: 'Can I trade online?',
      answer: 'Yes, most brokers in Nepal provide online trading platforms where you can place buy and sell orders from your computer or mobile device. You need to have a trading account with a broker and proper login credentials.',
    },
    {
      question: 'What happens if I forget to sell shares before the market closes?',
      answer: 'Your shares remain in your DEMAT account and you can sell them on any future trading day. There is no expiry or time limit on holding shares. However, market prices fluctuate, so the price may be different when you decide to sell.',
    },
  ],
  practicesTitle: "Investment Best Practices",
  practicesDos: [
    "Set clear investment goals", "Research before investing", "Diversify your portfolio", "Invest for the long term", "Monitor your investments regularly", "Keep emergency funds separate"
  ],
  practicesDonts: [
    "Invest borrowed money", "Follow rumors or tips blindly", "Put all money in one stock", "Panic sell during market dips", "Invest without understanding", "Expect guaranteed returns"
  ],
  commitmentTitle: "Our Educational Commitment",
  commitmentText1: "As a SEBON-licensed broker, we are committed to investor education and awareness. The information provided here is for educational purposes only and should not be considered as investment advice.",
  commitmentText2: "We strongly encourage all investors to conduct their own research, understand the risks involved, and make investment decisions based on their own financial situation and goals. When in doubt, consult with qualified financial advisors."
};

export default function Education() {
  const [data, setData] = useState<any>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const loadData = async () => {
      const cmsData = await fetchInvestorPage();
      if (cmsData) {
        setData({ ...DEFAULT_DATA, ...cmsData });
      } else {
        setData(DEFAULT_DATA);
      }
    };
    loadData();
  }, []);

  const content = data || DEFAULT_DATA;

  const renderTopics = () => {
    if (data && data.educationTopics && data.educationTopics.length > 0) {
      return data.educationTopics.map((topic: any, index: number) => {
        const themeClass = topic.theme === 'green' ? 'from-green-50 to-green-100' : 'from-blue-50 to-blue-100';
        const iconColor = topic.theme === 'green' ? 'text-green-700' : 'text-blue-900';

        return (
          <div key={index} className={`bg-gradient-to-br ${themeClass} rounded-xl p-8`}>
            <LucideIcon name={topic.icon} className={`h-12 w-12 ${iconColor} mb-4`} size={48} fallback={BookOpen} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
            <div className="space-y-3 text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: topic.content }} />
            </div>
          </div>
        );
      });
    }

    return (
      <>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
          <LucideIcon name="BookOpen" className="h-12 w-12 text-blue-900 mb-4" size={48} fallback={BookOpen} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding NEPSE Trading</h2>
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              <strong>What is secondary market trading?</strong><br />
              The secondary market is where investors buy and sell shares that have already been issued by companies. NEPSE is Nepal's secondary market for equity trading.
            </p>
            <p className="leading-relaxed">
              <strong>Primary vs Secondary Market:</strong><br />
              • Primary: IPOs and FPOs where companies issue new shares<br />
              • Secondary: NEPSE trading where investors trade existing shares
            </p>
            <p className="leading-relaxed">
              <strong>Market Participants:</strong><br />
              Individual investors, institutional investors, brokers, market makers, and regulators all play important roles in the market ecosystem.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
          <LucideIcon name="TrendingUp" className="h-12 w-12 text-green-700 mb-4" size={48} fallback={TrendingUp} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Trading Concepts</h2>
          <div className="space-y-3 text-gray-700">
            <p className="leading-relaxed">
              <strong>Order Types:</strong><br />
              • Market Order: Buy/sell at current market price<br />
              • Limit Order: Buy/sell at a specific price or better
            </p>
            <p className="leading-relaxed">
              <strong>Circuit Breaker:</strong><br />
              NEPSE has price bands (usually ±10%) to prevent excessive volatility. Trading halts if these limits are breached.
            </p>
            <p className="leading-relaxed">
              <strong>Dividend:</strong><br />
              Companies may distribute profits to shareholders as cash dividends or bonus shares. Check ex-dividend dates for eligibility.
            </p>
          </div>
        </div>
      </>
    );
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {renderTopics()}
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-12">
            <div className="flex items-start">
              <LucideIcon name="AlertTriangle" className="h-8 w-8 text-red-600 mt-1 mr-4 flex-shrink-0" size={32} fallback={AlertTriangle} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.riskTitle}</h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  {content.riskItems.map((item: any, idx: number) => (
                    <p key={idx}>
                      {item.title && <strong>{item.title} </strong>}
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <LucideIcon name="HelpCircle" className="h-12 w-12 text-blue-900 mx-auto mb-4" size={48} fallback={HelpCircle} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Common questions from new investors in Nepal's stock market
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-blue-900">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{content.practicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Do:</h3>
                <ul className="space-y-2 text-gray-700">
                  {content.practicesDos.map((text: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-2">Don't:</h3>
                <ul className="space-y-2 text-gray-700">
                  {content.practicesDonts.map((text: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{content.commitmentTitle}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {content.commitmentText1}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {content.commitmentText2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
