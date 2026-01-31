import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutTEDxUPM = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    // Brand Lock Component
    const Brand = () => (
        <span dir="ltr" className="inline-flex items-baseline leading-none whitespace-nowrap">
            <span className="text-tedx-red font-extrabold">TEDx</span>
            <span className="mx-1.5 font-extrabold">UPM</span>
        </span>
    );

    return (
        <section id="about-upm" className="min-h-screen bg-[#F4EFE6] dark:bg-black py-20 lg:py-32 scroll-mt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto"
                >
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center tracking-tight">
                        {isAr ? <>عن <Brand /></> : <>About <Brand /></>}
                    </h1>

                    {/* Poetic Tagline */}
                    <div className="mb-20 text-center relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-madinah-gold/5 blur-3xl rounded-full -z-10"></div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-arabic text-madinah-gold leading-tight drop-shadow-sm">
                            {t('about_upm.intro_title')}
                        </h2>
                        <h3 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mt-6">
                            {t('about_upm.intro_subtitle')}
                        </h3>
                    </div>

                    {/* Intro Content Cards */}
                    <div className="space-y-12">
                        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-sm border border-white/50 dark:border-gray-800">
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                {t('about_upm.content_p1')}
                            </p>
                        </div>

                        {/* Quote Highlight */}
                        <div className="py-12 px-6 md:px-16 text-center">
                            <blockquote className="text-2xl md:text-4xl font-arabic font-bold text-gray-900 dark:text-white leading-relaxed relative inline-block">
                                <span className={`absolute top-0 ${isAr ? 'right-[-20px]' : 'left-[-20px]'} text-6xl text-madinah-gold opacity-30 select-none`}>"</span>
                                {t('about_upm.quote')}
                                <span className={`absolute bottom-[-20px] ${isAr ? 'left-[-20px]' : 'right-[-20px]'} text-6xl text-madinah-gold opacity-30 select-none`}>"</span>
                            </blockquote>
                        </div>

                        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-sm border border-white/50 dark:border-gray-800">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                <div>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose text-justify mb-6">
                                        {t('about_upm.content_p2')}
                                    </p>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-loose text-justify">
                                        {isAr ? (
                                            <>
                                                تأتي نسخة <Brand /> هذا العام لتقدم حدثاً لا يشاهد فقط... بل يحس ويعاش. حدث يجمع بين نور الفكرة التي تستحق الانتشار، ونور المدينة التي ألهمت العالم عبر القرون، ونور الإلهام الذي يولد عندما تترابط التجربة الإنسانية مع القيم العميقة لهذه الأرض المباركة.
                                            </>
                                        ) : (
                                            <>
                                                This year's <Brand /> edition presents an event not just to be watched... but felt and lived. An event bringing together the light of ideas worth spreading, the light of a city that has inspired the world for centuries, and the light of inspiration born when human experience intertwines with the deep values of this blessed land.
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className={`relative ${isAr ? 'border-r-4' : 'border-l-4'} border-madinah-gold pl-6 md:pl-8 flex flex-col justify-center bg-warm-beige/30 dark:bg-black/20 rounded-xl p-6`}>
                                    <h3 className="text-2xl font-bold text-tedx-red mb-4">{t('about_upm.tourism_title')}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                        {isAr ? (
                                            <>
                                                تماشياً مع مستهدفات رؤية المملكة 2030 في جعل المدينة المنورة وجهة عالمية رائدة في السياحة التاريخية والثقافية، تبنت جامعة الأمير مقرن فعالية <Brand /> لهذا العام مستهدفة مجال "السياحة" لتعزيز الوعي بالفرص المستقبلية في القطاع السياحي، وربط الطلبة بدورهم في تطوير هذا المجال الواعد.
                                            </>
                                        ) : (
                                            <>
                                                In alignment with Saudi Vision 2030's objectives to make Madinah a leading global destination for historical and cultural tourism, Prince Muqrin University has adopted this year's <Brand /> event targeting the "tourism" sector to raise awareness of future opportunities in tourism and connect students with their role in developing this promising field.
                                            </>
                                        )}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                        {t('about_upm.tourism_content_p2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTEDxUPM;
