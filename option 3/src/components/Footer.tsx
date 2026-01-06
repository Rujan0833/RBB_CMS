<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react'
import { fetchFooter } from '../lib/api/siteSettings'

/* =====================
   Fallback Footer Data
===================== */
const FALLBACK_FOOTER = {
  brand: {
    companyName: 'Nepal Securities',
    tagline: 'SEBON Licensed Broker',
    description:
      'A trusted securities broker licensed by Securities Board of Nepal (SEBON) and member of Nepal Stock Exchange (NEPSE). We provide comprehensive brokerage services to retail and institutional investors.',
  },
  contact: {
    phone: '+977-1-XXXXXXX',
    email: 'info@nepalsecurities.com.np',
    address: 'Kathmandu, Nepal',
  },
  quickLinks: [
    { id: '1', label: 'About Us', url: '/about' },
    { id: '2', label: 'Services', url: '/services' },
    { id: '3', label: 'Open Account', url: '/open-account' },
    { id: '4', label: 'Investor Education', url: '/education' },
    { id: '5', label: 'Contact Us', url: '/contact' },
  ],
  legalLinks: [
    { id: '1', label: 'Privacy Policy', url: '#' },
    { id: '2', label: 'Terms of Service', url: '#' },
    { id: '3', label: 'Disclaimer', url: '#' },
    { id: '4', label: 'Compliance', url: '#' },
  ],
  riskDisclaimer: {
    title: 'Risk Disclaimer',
    content:
      'Market investments are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully before investing. The securities quoted are for illustration only and are not recommendatory.',
  },
  bottom: {
    copyright:
      '© 2024 Nepal Securities. All rights reserved.',
    licenseInfo:
      'Licensed by SEBON | Member of NEPSE',
  },
}

export default function Footer() {
  const [footer, setFooter] = useState<any>(FALLBACK_FOOTER)

useEffect(() => {
  const loadFooter = async () => {   // <-- rename this function
    try {
      const data = await fetchFooter()   // <-- calls the imported API function
      setFooter(data)
    } catch (error) {
      console.error('Error fetching footer data:', error)
    }
  }

  loadFooter()
}, [])

>>>>>>> origin/rbb_new

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-bold text-white">
                  {footer?.brand?.companyName ?? FALLBACK_FOOTER.brand.companyName}
                </h3>
                <p className="text-sm text-gray-400">
                  {footer?.brand?.tagline ?? FALLBACK_FOOTER.brand.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm mb-4 max-w-md">
              {footer?.brand?.description ?? FALLBACK_FOOTER.brand.description}
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>{footer?.contact?.phone ?? FALLBACK_FOOTER.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>{footer?.contact?.email ?? FALLBACK_FOOTER.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{footer?.contact?.address ?? FALLBACK_FOOTER.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
<<<<<<< HEAD
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
=======
              {(footer?.quickLinks || FALLBACK_FOOTER.quickLinks).map((link: any) => (
                <li key={link.id}>
                  <Link to={link.url} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
>>>>>>> origin/rbb_new
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {(footer?.legalLinks || FALLBACK_FOOTER.legalLinks).map((link: any) => (
                <li key={link.id}>
                  <a href={link.url} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer & Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-200 font-medium mb-2">
              {footer?.riskDisclaimer?.title ?? FALLBACK_FOOTER.riskDisclaimer.title}
            </p>
            <p className="text-xs text-gray-400">
              {footer?.riskDisclaimer?.content ?? FALLBACK_FOOTER.riskDisclaimer.content}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>{footer?.bottom?.copyright ?? FALLBACK_FOOTER.bottom.copyright}</p>
            <p className="mt-2 md:mt-0">
              {footer?.bottom?.licenseInfo ?? FALLBACK_FOOTER.bottom.licenseInfo}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
