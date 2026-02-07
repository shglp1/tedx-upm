import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionPattern from './SectionPattern';

const Sponsors = () => {
    const { t, i18n } = useTranslation();

    const sponsors = [
        "/comp0.svg",
        "/comp1.svg",
        "/comp2.svg",
        "/comp3.svg",
        "/comp4.svg"
    ];

    return (
        <section className="bg-white dark:bg-black relative overflow-hidden pb-8">
            <SectionPattern />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className={`text-4xl font-bold text-tedx-red mb-4 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        {t('sponsors.title')}
                    </h2>
                    <div className="w-20 h-1 bg-madinah-gold mx-auto"></div>
                </motion.div>

                {/* Gradient Masks for fading effect sides */}
                <div className="absolute left-0 top-[60px] bottom-0 w-20 bg-gradient-to-r from-white dark:from-black z-10"></div>
                <div className="absolute right-0 top-[60px] bottom-0 w-20 bg-gradient-to-l from-white dark:from-black z-10"></div>

                <div className="flex overflow-hidden" dir="ltr">
                    {/* First Strip */}
                    <motion.div
                        className="flex gap-8 md:gap-20 items-center whitespace-nowrap px-4 md:px-10"
                        initial={{ x: "0%" }}
                        whileInView={{ x: "-100%" }}
                        viewport={{ once: true }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 45,
                        }}
                    >
                        {[...sponsors, ...sponsors, ...sponsors].map((src, index) => (
                            <div
                                key={`strip1-${index}`}
                                className="w-28 sm:w-36 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                            >
                                <img
                                    src={src}
                                    alt={`Sponsor`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Second Strip (Identical copy) */}
                    <motion.div
                        className="flex gap-8 md:gap-20 items-center whitespace-nowrap px-4 md:px-10"
                        initial={{ x: "0%" }}
                        whileInView={{ x: "-100%" }}
                        viewport={{ once: true }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 45,
                        }}
                    >
                        {[...sponsors, ...sponsors, ...sponsors].map((src, index) => (
                            <div
                                key={`strip2-${index}`}
                                className="w-28 sm:w-36 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                            >
                                <img
                                    src={src}
                                    alt={`Sponsor`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
