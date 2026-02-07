import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionPattern from '../components/SectionPattern';

const AboutTEDx = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <section id="about-tedx" className="min-h-screen bg-warm-beige dark:bg-madinah-dark scroll-mt-28 relative overflow-hidden">
            {/* Decorative Pattern */}
            <SectionPattern />

            <div className="py-12 md:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                            className="w-24 h-1 bg-tedx-red mx-auto mb-6 rounded-full"
                        ></motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 50 }}
                            className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight ${isAr ? 'font-arabic' : 'font-english'}`}
                        >
                            {t('nav.about_tedx').split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`inline-block ${word.includes('TED') ? 'text-tedx-red' : ''}`}
                                >
                                    {word}{' '}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {isAr ? (
                        <div className="space-y-16">
                            {/* TEDx Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-800 relative overflow-hidden group transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-tedx-red origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                                <div className="absolute top-0 right-0 w-2 h-full bg-tedx-red opacity-30"></div>
                                <h2 className="text-3xl font-bold text-tedx-red mb-6 font-arabic translate-x-0 group-hover:-translate-x-2 transition-transform duration-300">ما هو TEDx؟</h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify font-arabic">
                                    في ظل روح <span className="text-tedx-red font-bold">"الأفكار التي تستحق الانتشار"</span>، يعتبر <span className="text-tedx-red font-bold">TEDx</span> برنامجاً للأحداث المحلية المنظمة ذاتياً التي تجمع الناس معاً لتبادل تجربة تشبه TED. في حدث TEDx، تتحد مقاطع فيديو TED Talks والمتحدثون المباشرون لإثارة مناقشة عميقة واتصال في مجموعة صغيرة. هذه الأحداث المحلية المنظمة ذاتياً تحمل علامة TEDx، حيث x = حدث TED منظم بشكل مستقل.
                                </p>
                                <div className="mt-6 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border-r-4 border-gray-300 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 italic font-arabic">
                                        يوفر مؤتمر TED إرشادات عامة لبرنامج TEDx، لكن أحداث TEDx الفردية منظمة ذاتياً تخضع لقواعد وأنظمة معينة.
                                    </p>
                                </div>
                            </motion.div>

                            {/* TED Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-800 relative overflow-hidden group transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-madinah-dark dark:bg-white origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                                <div className="absolute top-0 right-0 w-2 h-full bg-madinah-dark dark:bg-white opacity-30"></div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-arabic translate-x-0 group-hover:-translate-x-2 transition-transform duration-300"> عن <span className="text-tedx-red">TED</span></h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify font-arabic">
                                    <span className="text-tedx-red font-bold">تيد</span> هي منظمة غير ربحية مكرسة للأفكار التي تستحق الانتشار، وغالباً ما تكون في شكل محادثات قصيرة يلقيها كبار المفكرين والفعالين. بدأت العديد من هذه المحادثات في مؤتمر <span className="text-tedx-red font-bold">TED</span>، بما في ذلك العلماء والفلاسفة والموسيقيين والقادة الدينيين والمبادرات الخيرية وغيرها.
                                </p>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* TEDx Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-800 relative overflow-hidden group transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-tedx-red origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                                <div className="absolute top-0 left-0 w-2 h-full bg-tedx-red opacity-30"></div>
                                <h2 className="text-3xl font-bold text-tedx-red mb-6 translate-x-0 group-hover:translate-x-2 transition-transform duration-300">What is <span className="text-tedx-red">TEDx</span>?</h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    In the spirit of <span className="text-tedx-red font-bold">"ideas worth spreading"</span>, <span className="text-tedx-red font-bold">TEDx</span> is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event.
                                </p>
                                <div className="mt-6 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border-l-4 border-gray-300 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 italic">
                                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
                                    </p>
                                </div>
                            </motion.div>

                            {/* TED Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                                className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-800 relative overflow-hidden group transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-madinah-dark dark:bg-white origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                                <div className="absolute top-0 left-0 w-2 h-full bg-madinah-dark dark:bg-white opacity-30"></div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 translate-x-0 group-hover:translate-x-2 transition-transform duration-300">About <span className="text-tedx-red">TED</span></h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    <span className="text-tedx-red font-bold">TED</span> is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED conferences, including scientists, philosophers, musicians, religious leaders, philanthropists and many others.
                                </p>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutTEDx;
