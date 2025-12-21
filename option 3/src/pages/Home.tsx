import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-6">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">SEBON Licensed & NEPSE Member</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Trusted Partner in Nepal's Capital Market
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Navigate the Nepal Stock Exchange with confidence. Professional brokerage services for retail and institutional investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/open-account"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Open Trading Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Licensed & Regulated</h3>
                      <p className="text-blue-100 text-sm">Authorized by SEBON for securities trading</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">NEPSE Member</h3>
                      <p className="text-blue-100 text-sm">Direct access to Nepal Stock Exchange</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 rounded-lg p-3">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert Support</h3>
                      <p className="text-blue-100 text-sm">Dedicated team to guide your investments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted</h3>
              <p className="text-gray-600">SEBON licensed broker with proven track record</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">Expert guidance for your investment journey</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">Dedicated support for all your queries</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Compliant</h3>
              <p className="text-gray-600">Strict adherence to regulatory standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive brokerage services designed for Nepali investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equity Trading</h3>
              <p className="text-gray-600 mb-4">
                Buy and sell shares on Nepal Stock Exchange with our secure and efficient trading platform.
              </p>
              <Link to="/services" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Trading Support</h3>
              <p className="text-gray-600 mb-4">
                Access NEPSE from anywhere with our online trading assistance and technical support.
              </p>
              <Link to="/services" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DEMAT Services</h3>
              <p className="text-gray-600 mb-4">
                Complete assistance with DEMAT account setup and MeroShare account management.
              </p>
              <Link to="/services" className="text-blue-900 font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Open your trading account today and get access to Nepal's capital market
          </p>
          <Link
            to="/open-account"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Open Trading Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
