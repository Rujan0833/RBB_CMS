import { useLocale } from '../context/LocaleContext'
import { Link, useLocation } from 'react-router-dom'
import { TrendingUp, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getHeader } from '../lib/cms.ts'
import { fetchSiteSettings } from '../lib/api/siteSettings.ts'

export default function Navigation() {
  const { locale, setLocale } = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [navLinks, setNavLinks] = useState<{ path: string; label: string }[]>([])
  const location = useLocation()
  const [sitename, setSitename] = useState<any>(null);

 useEffect(() => {
  const fetchNav = async () => {
    //important
    const sitedata = await fetchSiteSettings(locale);
    setSitename(sitedata);
    document.title = sitedata?.branding?.siteName || 'Nepal Securities';

    
    const header = await getHeader(locale); // pass locale
    if (header?.navItems) {
      const mappedLinks = header.navItems.map((item) => {
        const { link } = item;
        let path = '/';
        if (link.type === 'reference' && link.reference?.value) {
          const page = link.reference.value;
          const slug = typeof page === 'object' ? page.slug : null;
          path = slug === 'home' ? '/' : `/${slug}`;
        } else if (link.type === 'custom' && link.url) path = link.url;
        return { path, label: link.label };
      });
      setNavLinks(mappedLinks);
    }
  }
  fetchNav();
}, [locale]); // ✅ refetch when locale changes

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-blue-900" />

            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">{sitename?.branding?.siteName || 'Nepal Securities'}</span>
              <span className="text-xs text-gray-600">{sitename?.branding?.subSiteName || ''}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button className="ml-4 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
              Client Login
            </button>

            {/* Locale Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
              >
                {locale.toUpperCase()}
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-50">
                  <button
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    onClick={() => {
                      setLocale('en')
                      setIsLangOpen(false)
                    }}
                  >
                    EN
                  </button>
                  <button
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    onClick={() => {
                      setLocale('ne')
                      setIsLangOpen(false)
                    }}
                  >
                    NE
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full mt-2 px-3 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700">
              Client Login
            </button>

            <div className="mt-2 px-3 py-2 bg-gray-100 rounded-md">
              <button
                onClick={() => setLocale('en')}
                className={`block w-full text-left py-1 ${locale === 'en' ? 'font-bold' : ''}`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('ne')}
                className={`block w-full text-left py-1 ${locale === 'ne' ? 'font-bold' : ''}`}
              >
                NE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
