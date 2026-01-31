import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const TEDX_LOGO_SRC = "/TEDxUPM_Logo.png";
const UPM_LOGO_SRC = "/UPM_Logo.svg";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // We only change document dir for body/html, layout logic in navbar is fixed
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: t('nav.home'), id: 'home' },
        { name: t('nav.about_tedx'), id: 'about-tedx' },
        { name: t('nav.about_upm'), id: 'about-upm' },
        { name: t('nav.speakers'), id: 'speakers' },
        { name: t('nav.schedule'), id: 'schedule' },
        { name: t('nav.contact'), id: 'contact' },
    ];

    return (
        // FORCE LTR on the Navbar to prevent any RTL swapping of zones
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-black/95 backdrop-blur-md shadow-md py-4 ${isScrolled ? 'py-2' : ''}`}
            dir="ltr"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 
                  FIXED LAYOUT (No swapping)
                  Zone 1 (Left): Desktop Lang / Mobile Hamburger + Mobile Lang
                  Zone 2 (Center): Desktop Nav
                  Zone 3 (Right): Brand
                */}
                <div className="flex items-center justify-between w-full">

                    {/* ZONE 1 (LEFT) - Hamburger + Lang */}
                    <div className="flex items-center min-w-fit gap-3">
                        {/* Desktop: Language Button */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden lg:flex items-center text-white hover:text-tedx-red transition-colors border border-white/20 rounded-full px-6 py-2 bg-white/5 hover:bg-white/10"
                        >
                            <Globe className="w-5 h-5" />
                            <span className="mx-2 text-sm font-bold">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
                        </button>

                        {/* Mobile: Hamburger Menu (ALWAYS Left) */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-tedx-red focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>

                        {/* Mobile: Language Toggle (Moved to Left next to Hamburger) */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleLanguage}
                                className="text-white font-bold text-sm"
                            >
                                {i18n.language === 'en' ? 'AR' : 'EN'}
                            </button>
                        </div>
                    </div>

                    {/* ZONE 2 (CENTER) - Desktop Only */}
                    <div className="flex-1 hidden lg:flex justify-center px-8 min-w-0 overflow-hidden">
                        {/* 
                            Requirement: Nav links ordered RIGHT to LEFT always (Home on far right).
                            Implementation: flex-row-reverse puts the first item (Home) at the end (Right).
                        */}
                        <div className="flex flex-row-reverse items-center gap-0.75em">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    // Set text direction per-item: RTL for Arabic labels, LTR for content
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    className="text-white hover:text-tedx-red px-6 py-2 text-sm font-medium transition-colors rounded-full transition-all hover:bg-white/5 flex-shrink whitespace-nowrap"
                                >
                                    {link.id === 'about-upm' ? (
                                        <span className="flex items-baseline gap-1">
                                            {isRTL ? 'عن' : 'About'}
                                            {/* Strictly LTR Brand Lock */}
                                            <span className="font-bold font-english inline-flex items-baseline" dir="ltr">
                                                <span className="text-tedx-red">TED</span>
                                                <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                                                <span className="text-white ms-1">UPM</span>
                                            </span>
                                        </span>
                                    ) : link.id === 'about-tedx' ? (
                                        <span className="flex items-baseline gap-1">
                                            {isRTL ? 'عن' : 'About'}
                                            {/* Strictly LTR Brand Lock for TEDx */}
                                            <span className="font-bold font-english text-tedx-red" dir="ltr">TEDx</span>
                                        </span>
                                    ) : (
                                        link.name
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ZONE 3 (RIGHT) - Brand Only */}
                    <div className="flex items-center justify-end gap-3 min-w-fit">

                        {/* Brand Block (Always here) */}
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')} dir="ltr">
                            <img
                                src={UPM_LOGO_SRC}
                                alt="Prince Muqrin University"
                                className="h-9 sm:h-12 w-auto flex-shrink-0"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <div className="h-6 sm:h-8 w-px bg-gray-300 dark:bg-gray-600 mx-2 flex-shrink-0"></div>

                            <div className="flex items-start gap-3">
                                <img
                                    src={TEDX_LOGO_SRC}
                                    alt="TEDx Logo"
                                    className="h-7 w-7 sm:h-10 sm:w-10 object-contain flex-shrink-0"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-2xl font-bold font-english tracking-tighter leading-none text-left inline-flex items-baseline">
                                        <span className="text-tedx-red">TED</span>
                                        <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                                        <span className="text-white ms-2">UPM</span>
                                    </span>
                                    <span className="hidden sm:block text-[10px] text-gray-500 font-medium tracking-widest uppercase text-left leading-tight mt-1 break-words">
                                        x = independently organized event
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay - Content respects RTL, but container is fixed */}
            {isOpen && (
                <div
                    className="lg:hidden bg-black/95 border-t border-gray-800 absolute w-full shadow-lg backdrop-blur-md"
                    // Container dir flips for menu items text alignment
                    dir={isRTL ? 'rtl' : 'ltr'}
                >
                    <div className="px-4 pt-4 pb-6 flex flex-col items-center gap-2">
                        <div className="w-full max-w-xs divide-y divide-gray-800 rounded-xl overflow-hidden bg-white/5 border border-gray-800">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-center px-4 py-3 text-base font-semibold text-white hover:text-tedx-red hover:bg-tedx-red/5 transition-colors"
                                >
                                    {link.id === 'about-upm' ? (
                                        <span className="flex items-center justify-center gap-1">
                                            {isRTL ? 'عن' : 'About'}
                                            <span className="font-bold font-english inline-flex items-baseline" dir="ltr">
                                                <span className="text-tedx-red">TED</span>
                                                <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                                                <span className="text-white ms-1">UPM</span>
                                            </span>
                                        </span>
                                    ) : link.id === 'about-tedx' ? (
                                        <span className="flex items-center justify-center gap-1">
                                            {isRTL ? 'عن' : 'About'}
                                            <span className="font-bold font-english text-tedx-red" dir="ltr">TEDx</span>
                                        </span>
                                    ) : (
                                        link.name
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
