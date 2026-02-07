import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram } from 'lucide-react';
import SectionPattern from '../components/SectionPattern';

const Contact = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="contact" className="min-h-screen bg-warm-beige dark:bg-madinah-dark scroll-mt-28 relative overflow-hidden">
            {/* Decorative Pattern */}
            <SectionPattern />

            <div className="py-12 md:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <h1 className={`text-4xl font-bold text-tedx-red mb-8 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>{t('contact.title')}</h1>
                        <p className={`text-xl text-gray-600 dark:text-gray-300 mb-8 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                            {t('contact.subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-tedx-red mt-1" />
                                <div>
                                    <h3 className={`font-bold text-gray-900 dark:text-white ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>{t('contact.venue_label')}</h3>
                                    <p className={`text-gray-600 dark:text-gray-400 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>{t('contact.venue')}</p>
                                    <p className="text-gray-600 dark:text-gray-400 font-english">Bin Laden Hall</p>
                                    <p className="text-gray-600 dark:text-gray-400 font-english">Madinah, Saudi Arabia</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-tedx-red" />
                                <a href="mailto:career.center@upm.edu.sa" className="text-gray-600 dark:text-gray-400 font-english hover:text-tedx-red transition-colors">career.center@upm.edu.sa</a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className={`font-bold text-gray-900 dark:text-white mb-4 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>{t('contact.follow_us')}</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://x.com/tedx_upm?s=21" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors group">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/tedx_upm?igsh=MWltbW1kaHJmNTZxeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.tiktok.com/@tedx_upm?_r=1&_t=ZS-93W2qHIKdw9" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                </a>
                                <a href="https://snapchat.com/t/l0fGYpVs" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <img src="/snapchat.png" alt="Snapchat" className="w-5 h-5 object-contain" />
                                </a>
                                <a href="https://linktr.ee/Tedxupm" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <img src="/linktree.png" alt="Linktree" className="w-5 h-5 object-contain scale-125" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-[400px] w-full relative overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1816.306654423541!2d39.6585831!3d24.4294981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd955a48f25715%3A0xe094c52ae0da324d!2z2KzYp9mF2LnYqSDYp9mE2KPZhdmK2LEg2YXZgtix2YYg2KjZhiDYudio2K_Yp9mE2LnYstmK2LIgLSDZgtiz2YUg2KfZhNi32KfZhNio2KfYqg!5e0!3m2!1sar!2ssa!4v1770167716252!5m2!1sar!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>

                            <a
                                href="https://maps.app.goo.gl/tUfnZQyVV3iD7nq77"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`absolute bottom-4 right-4 bg-white dark:bg-madinah-dark text-tedx-red px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 hover:bg-tedx-red hover:text-white transition-colors ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}
                            >
                                {t('contact.open_maps')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
