import { useTranslation } from 'react-i18next';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

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

                    <div className={`order-1 ${isRTL ? 'md:order-1' : 'md:order-3'}`}>
                        <h3 className={`text-sm font-bold text-white tracking-normal mb-4 relative ${isRTL ? 'pr-4' : 'pl-4'}`}>
                            <span className={`absolute top-0 h-full w-1 bg-tedx-red ${isRTL ? 'right-0' : 'left-0'}`}></span>
                            {t('contact.follow_us')}
                        </h3>
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/UPMMadinah" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/upmmadinah/" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/school/university-of-prince-mugrin/" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-tedx-red/10 text-gray-400 hover:text-tedx-red transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="order-2 md:order-2">
                        <h3 className={`text-sm font-bold text-white tracking-normal mb-4 relative ${isRTL ? 'pr-4' : 'pl-4'}`}>
                            <span className={`absolute top-0 h-full w-1 bg-tedx-red ${isRTL ? 'right-0' : 'left-0'}`}></span>
                            {t('contact.title')}
                        </h3>
                        <ul className={`mt-3 space-y-2 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                            <li className="text-gray-300">
                                {t('common.location')}
                            </li>
                            <li className="text-gray-300" dir="ltr">
                                <a href="mailto:career.center@upm.edu.sa" className="hover:text-tedx-red transition-colors">
                                    career.center@upm.edu.sa
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={`order-3 ${isRTL ? 'md:order-3' : 'md:order-1'} flex-grow md:flex-grow-0 md:w-1/2`}>
                        <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                            <div className="flex items-center gap-3">

                                <div className="flex flex-col gap-1" dir="ltr">
                                    <span className="text-lg sm:text-2xl font-bold font-english tracking-tighter leading-none inline-flex items-baseline">
                                        <span className="text-tedx-red">TED</span>
                                        <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                                        <span className="text-white ms-2">UPM</span>
                                    </span>
                                    <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
                                        x = independently organized event
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
                        <p className="text-gray-300 max-w-sm">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>{t('footer.rights')} © 2026 TEDxUPM.</p>
                    <p className="mt-2 md:mt-0">{t('footer.disclaimer')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
