import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutTEDx = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <div className="min-h-screen bg-warm-beige dark:bg-madinah-dark py-20 lg:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16 relative">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="w-24 h-1 bg-tedx-red mx-auto mb-6 rounded-full"
                        ></motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold font-english text-gray-900 dark:text-white mb-6 leading-tight">
                            {t('nav.about_tedx').split(' ').map((word, i) => word.includes('TED') ? <span key={i} className="text-tedx-red">{word} </span> : word + ' ')}
                        </h1>
                    </div>

                    {isAr ? (
                        <div className="space-y-12">
                            {/* TEDx Card */}
                            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/50 dark:border-gray-800 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-2 h-full bg-tedx-red"></div>
                                <h2 className="text-3xl font-bold text-tedx-red mb-6">ما هو TEDx؟</h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    في ظل روح <span className="text-tedx-red font-bold">"الأفكار التي تستحق الانتشار"</span>، يعتبر <span className="text-tedx-red font-bold">TEDx</span> برنامجاً للأحداث المحلية المنظمة ذاتياً التي تجمع الناس معاً لتبادل تجربة تشبه TED. في حدث TEDx، تتحد مقاطع فيديو TED Talks والمتحدثون المباشرون لإثارة مناقشة عميقة واتصال في مجموعة صغيرة. هذه الأحداث المحلية المنظمة ذاتياً تحمل علامة TEDx، حيث x = حدث TED منظم بشكل مستقل.
                                </p>
                                <div className="mt-6 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border-r-4 border-gray-300 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 italic">
                                        يوفر مؤتمر TED إرشادات عامة لبرنامج TEDx، لكن أحداث TEDx الفردية منظمة ذاتياً (تخضع لقواعد وأنظمة معينة).
                                    </p>
                                </div>
                            </div>

                            {/* TED Card */}
                            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/50 dark:border-gray-800 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-2 h-full bg-madinah-dark dark:bg-white"></div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">عن <span className="text-tedx-red">TED</span></h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    <span className="text-tedx-red font-bold">تيد</span> هي منظمة غير ربحية مكرسة للأفكار التي تستحق الانتشار، وغالباً ما تكون في شكل محادثات قصيرة يلقيها كبار المفكرين والفعالين. بدأت العديد من هذه المحادثات في مؤتمر TED، بما في ذلك العلماء والفلاسفة والموسيقيين والقادة الدينيين والمبادرات الخيرية وغيرها.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {/* TEDx Card */}
                            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/50 dark:border-gray-800 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 left-0 w-2 h-full bg-tedx-red"></div>
                                <h2 className="text-3xl font-bold text-tedx-red mb-6">What is <span className="text-tedx-red">TEDx</span>?</h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    In the spirit of <span className="text-tedx-red font-bold">"ideas worth spreading"</span>, <span className="text-tedx-red font-bold">TEDx</span> is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event.
                                </p>
                                <div className="mt-6 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border-l-4 border-gray-300 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 italic">
                                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
                                    </p>
                                </div>
                            </div>

                            {/* TED Card */}
                            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/50 dark:border-gray-800 relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 left-0 w-2 h-full bg-madinah-dark dark:bg-white"></div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About <span className="text-tedx-red">TED</span></h2>
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                    <span className="text-tedx-red font-bold">TED</span> is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED conferences, including scientists, philosophers, musicians, religious leaders, philanthropists and many others.
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default AboutTEDx;
