import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Coffee, Mic, Users, Moon } from 'lucide-react';
import SectionPattern from '../components/SectionPattern';

const Schedule = () => {
    const { t, i18n } = useTranslation();

    const events = [
        { key: 'opening', icon: Users },
        { key: 'session1', icon: Mic },
        { key: 'break1', icon: Coffee },
        { key: 'session2', icon: Mic },
        { key: 'session3', icon: Mic },
        { key: 'closing', icon: Moon },
    ];

    return (
        <section id="schedule" className="min-h-screen bg-white dark:bg-madinah-dark scroll-mt-28 relative overflow-hidden">
            {/* Decorative Pattern */}
            <SectionPattern />

            <div className="py-12 md:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}
                    >
                        {t('nav.schedule')}
                    </motion.h1>
                    <div className="w-24 h-1 bg-tedx-red mx-auto rounded-full"></div>
                </div>

                <div className="relative pb-12">
                    {/* Vertical Line - Fixed full height */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className={`w-5/12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`w-full max-w-[420px] p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border-l-4 ${t(`schedule.${event.key}.type`).includes('Session') || t(`schedule.${event.key}.type`).includes('الجلسة') ? 'border-tedx-red' : 'border-madinah-gold'}`}>
                                        <h3 className={`text-lg font-bold text-gray-900 dark:text-white mb-1 ${i18n.language === 'ar' ? (index % 2 === 0 ? 'text-right' : 'text-left') : 'text-left'}`}>
                                            {t(`schedule.${event.key}.title`)}
                                        </h3>
                                        <div className={`flex items-center gap-2 text-sm text-gray-500 font-medium ${i18n.language === 'ar' ? (index % 2 === 0 ? 'justify-end' : 'justify-start') : 'justify-end'}`}>
                                            <Clock className="w-4 h-4" />
                                            <span>{t(`schedule.${event.key}.time`)}</span>
                                        </div>
                                        <div className={`mt-2 text-xs font-semibold text-tedx-red uppercase tracking-wider ${i18n.language === 'ar' ? (index % 2 === 0 ? 'text-right' : 'text-left') : 'text-left'}`}>
                                            {t(`schedule.${event.key}.type`)}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-tedx-red flex items-center justify-center z-10 shadow-md">
                                    <event.icon className="w-5 h-5 text-tedx-red" />
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="w-5/12"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
