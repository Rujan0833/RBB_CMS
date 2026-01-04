import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getFooter } from '../lib/cms';
import { NavItem } from '../lib/cms/types';

export default function Footer() {
  const [navLinks, setNavLinks] = useState<{ path: string; label: string }[]>([]);

  useEffect(() => {
    const fetchNav = async () => {
      const footer = await getFooter();
      if (footer?.navItems) {
        const mappedLinks = footer.navItems.map((item: NavItem) => {
          const { link } = item;
          let path = '/';

          if (link.type === 'reference' && link.reference?.value) {
            const page = link.reference.value;
            const slug = typeof page === 'object' ? page.slug : null;
            path = slug === 'home' ? '/' : `/${slug}`;
          } else if (link.type === 'custom' && link.url) {
            path = link.url;
          }

          return {
            path,
            label: link.label
          };
        });
        setNavLinks(mappedLinks);
      }
    };
    fetchNav();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Nepal Securities</h3>
                <p className="text-sm text-gray-400">SEBON Licensed Broker</p>
              </div>
            </div>
            <p className="text-sm mb-4 max-w-md">
              A trusted securities broker licensed by Securities Board of Nepal (SEBON) and member of Nepal Stock Exchange (NEPSE). We provide comprehensive brokerage services to retail and institutional investors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@nepalsecurities.com.np</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.length > 0 ? (
                navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/open-account" className="hover:text-white transition-colors">Open Account</Link></li>
                  <li><Link to="/investor" className="hover:text-white transition-colors">Investor Education</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-200 font-medium mb-2">Risk Disclaimer</p>
            <p className="text-xs text-gray-400">
              Market investments are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing. The securities quoted are for illustration only and are not recommendatory.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Nepal Securities. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Licensed by SEBON | Member of NEPSE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
