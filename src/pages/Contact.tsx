import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-warm-beige dark:bg-madinah-dark py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <h1 className="text-4xl font-bold text-tedx-red mb-8">{t('contact.title')}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            {t('contact.subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-tedx-red mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{t('contact.venue_label')}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{t('contact.venue')}</p>
                                    <p className="text-gray-600 dark:text-gray-400">Bin Laden Hall</p>
                                    <p className="text-gray-600 dark:text-gray-400">Madinah, Saudi Arabia</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-tedx-red" />
                                <a href="mailto:career.center@upm.edu.sa" className="text-gray-600 dark:text-gray-400 font-english hover:text-tedx-red transition-colors">career.center@upm.edu.sa</a>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t('contact.follow_us')}</h3>
                            <div className="flex gap-4">
                                <a href="https://x.com/UPMMadinah" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/upmmadinah/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-tedx-red hover:text-white transition-colors">
                                    <Instagram className="w-5 h-5" />
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9876543210!2d39.6123456!3d24.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzI0LjQiTiAzOcKwMzYnNDQuNCJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>

                            <a
                                href="https://maps.app.goo.gl/SneJXAgUMNPYCpxM9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white dark:bg-madinah-dark text-tedx-red px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 hover:bg-tedx-red hover:text-white transition-colors"
                            >
                                {t('contact.open_maps')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
