import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getHeader, fetchSiteSettings, getImageUrl } from '../lib/cms';
import { NavItem, SiteSettings } from '../lib/cms/types';
import { useLocale } from '../context/LocaleContext';
import { LucideIcon } from './LucideIcon';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState<{ path: string; label: string }[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const { locale, toggleLocale } = useLocale();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const [header, siteSettings] = await Promise.all([
        getHeader(locale),
        fetchSiteSettings(locale)
      ]);

      setSettings(siteSettings);

      if (header?.navItems) {
        const mappedLinks = header.navItems.map((item: NavItem) => {
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
    fetchData();
  }, [locale]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-decoration-none">
            {settings?.branding?.logo?.url ? (
              <img
                src={getImageUrl(settings.branding.logo)}
                alt={settings.branding.logo.alt || ''}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <TrendingUp className="h-8 w-8 text-blue-900" />
            )}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900 leading-tight">
                {settings?.branding?.siteName || 'Nepal Securities'}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide uppercase">
                {settings?.branding?.siteTagline || 'SEBON Licensed Broker'}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleLocale}
              className="ml-4 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              <LucideIcon name="Languages" size={16} />
              {locale === 'en' ? 'नेपाली' : 'English'}
            </button>

            <button className="ml-4 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
              Client Login
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleLocale();
                setIsMenuOpen(false);
              }}
              className="w-full mt-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-base font-medium flex items-center justify-center gap-2"
            >
              <LucideIcon name="Languages" size={18} />
              {locale === 'en' ? 'नेपाली' : 'English'}
            </button>

            <button className="w-full mt-2 px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700">
              Client Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
