import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';

const UPM_LOGO_SRC = "/UPM_Logo.svg";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <footer
            dir={isRTL ? 'rtl' : 'ltr'}
            className="bg-black border-t border-gray-800 pt-12 pb-8">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

                    {/* Social Media Column */}
                    <div className={`order-3 ${isRTL ? 'md:order-3' : 'md:order-3'}`}>
                        <h3 className={`text-sm font-bold text-white tracking-normal mb-4 relative ${isRTL ? 'pr-4 font-arabic' : 'pl-4 font-english'}`}>
                            <span className={`absolute top-0 h-full w-1 bg-tedx-red ${isRTL ? 'right-0' : 'left-0'}`}></span>
                            {t('contact.follow_us')}
                        </h3>
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/tedx_upm?s=21" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors group">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/tedx_upm?igsh=MWltbW1kaHJmNTZxeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linktr.ee/Tedxupm" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors">
                                <img src="/linktree.png" alt="Linktree" className="w-5 h-5 object-contain invert" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="order-2 md:order-2">
                        <h3 className={`text-sm font-bold text-white tracking-normal mb-4 relative ${isRTL ? 'pr-4 font-arabic' : 'pl-4 font-english'}`}>
                            <span className={`absolute top-0 h-full w-1 bg-tedx-red ${isRTL ? 'right-0' : 'left-0'}`}></span>
                            {t('contact.title')}
                        </h3>
                        <ul className={`mt-3 space-y-2 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                            <li className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                                {isRTL ? 'جامعة الأمير مقرن' : 'University of Prince Mugrin'}
                            </li>
                            <li className="text-gray-300" dir="ltr">
                                <a href="mailto:career.center@upm.edu.sa" className="hover:text-tedx-red transition-colors font-english">
                                    career.center@upm.edu.sa
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Branding Column */}
                    <div className={`order-1 ${isRTL ? 'md:order-1' : 'md:order-1'} flex-grow md:flex-grow-0 md:w-1/2`}>
                        <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                            <div className="flex items-center gap-3">

                                <div className="flex flex-col gap-1" dir="ltr">
                                    <span className="text-lg sm:text-2xl font-bold font-english tracking-tighter leading-none inline-flex items-baseline">
                                        <span className="text-tedx-red">TED</span>
                                        <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                                        <span className="text-white ms-2">UPM</span>
                                    </span>
                                    <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                                        <span className="text-tedx-red">x</span> = independently organized event
                                    </span>
                                </div>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
                            <a href="https://upm.edu.sa/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={UPM_LOGO_SRC}
                                    alt="University of Prince Muqrin"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>
                        <p className={`text-gray-300 max-w-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                            {t('hero.subtitle')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col gap-4 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <p className={`${isRTL ? 'font-arabic' : 'font-english'}`}>{t('footer.rights')} © 2026 TEDxUPM.</p>
                        <p className={`mt-2 md:mt-0 ${isRTL ? 'font-arabic' : 'font-english'}`}>{t('footer.disclaimer')}</p>
                    </div>
                    <div className="flex justify-center w-full">
                        <a
                            href="https://wa.me/966560019865"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:text-tedx-red transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                        >
                            {t('footer.developed_by')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
