import React, { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'en' | 'ne';

interface LocaleContextType {
    locale: Locale;
    toggleLocale: () => void;
    setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [locale, setLocaleState] = useState<Locale>(
        (localStorage.getItem('preferred_locale') as Locale) || 'en'
    );

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('preferred_locale', newLocale);
    };

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'ne' : 'en';
        setLocale(newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, toggleLocale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
