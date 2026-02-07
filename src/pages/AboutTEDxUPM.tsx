import { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionPattern from '../components/SectionPattern';

const AboutTEDxUPM = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms
    const yLayer1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yLayer2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotateLayer = useTransform(scrollYProgress, [0, 1], [0, 45]);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
    };

    // Parallax-style floating entry for patterns
    const floatIn = (direction: 'left' | 'right') => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            rotate: direction === 'left' ? -20 : 20
        },
        visible: {
            opacity: 1,
            x: 0,
            rotate: direction === 'left' ? 12 : -12,
            transition: { duration: 1.2, ease: "easeOut" as any }
        }
    });

    return (
        <section
            ref={sectionRef}
            id="about-upm"
            className="min-h-screen bg-white relative overflow-hidden pt-16 pb-48 md:py-32"
            dir={isAr ? 'rtl' : 'ltr'}
        >
            {/* Standard Section Pattern - Absolute Position to ignore pt-16 */}
            <div className="absolute top-0 left-0 w-full z-20">
                <SectionPattern />
            </div>

            {/* =========================================
               BACKGROUND DECORATIVE LAYER (BIG LOGOS)
               ========================================= */}
            <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden">


                {/* --- LEFT SIDE PATTERNS --- */}
                {/* Top Left - Pushed down to avoid header overlap */}
                <motion.div style={{ y: yLayer1 }} className="absolute top-40 -left-6 md:top-20 md:left-4 lg:-left-12 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('left')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        src="/logo_Haram_Pattern.svg"
                        className="w-48 md:w-64 lg:w-96"
                    />
                </motion.div>

                {/* Middle Left (Between Card 1 and Quote) - Adjusted % to hit the gap */}
                <motion.div style={{ y: yLayer2 }} className="absolute top-[50%] -left-2 md:left-8 lg:left-0 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('left')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        src="/logo_Haram2_Pattern.svg"
                        className="w-36 md:w-56 lg:w-80"
                    />
                </motion.div>

                {/* Bottom Left (Below Card 2) */}
                <motion.div style={{ rotate: rotateLayer }} className="absolute bottom-20 left-4 md:bottom-32 md:left-10 lg:left-12 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('left')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        src="/logo_Plam_Pattern.svg"
                        className="w-36 md:w-72 lg:w-96 rotate-45"
                    />
                </motion.div>

                {/* --- RIGHT SIDE PATTERNS --- */}
                {/* Top Right - Pushed down to avoid header overlap */}
                <motion.div style={{ y: yLayer2 }} className="absolute top-48 -right-6 md:top-32 md:right-8 lg:-right-8 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('right')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        src="/logo_Plam_Pattern.svg"
                        className="w-48 md:w-64 lg:w-96 -rotate-12"
                    />
                </motion.div>

                {/* Middle Right (Between Quote and Card 2) - Adjusted % to hit the gap */}
                <motion.div style={{ y: yLayer1 }} className="absolute top-[55%] -right-6 md:right-12 lg:right-4 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('right')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                        src="/logo_Haram2_Pattern.svg"
                        className="w-40 md:w-60 lg:w-80 rotate-12"
                    />
                </motion.div>

                {/* Bottom Right (Below Card 2) */}
                <motion.div style={{ rotate: rotateLayer }} className="absolute bottom-5 right-4 md:bottom-20 md:right-16 lg:right-10 z-0 will-change-transform">
                    <motion.img
                        variants={floatIn('right')} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        src="/logo_UPM_Patterns.svg"
                        className="w-48 md:w-72 lg:w-96"
                    />
                </motion.div>
            </div>


            {/* =========================================
               MAIN CONTENT (Center Column)
               ========================================= */}
            {/* max-w-4xl ensures logos have space on the sides on desktop */}
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >

                    {/* 1. HEADER & LOGO */}
                    <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-1 tracking-tighter">
                            {isAr ? 'عن ' : 'About '}
                            <span className="text-tedx-red">TEDx</span> <span className="text-black">UPM</span>
                        </motion.h1>

                        <motion.img
                            variants={fadeInUp}
                            src="/logo_logo.svg"
                            alt="Min Noorha Logo"
                            className="w-64 md:w-96 h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 -mt-12"
                        />
                    </div>

                    {/* 2. CARD 1: Intro (Top Black Card) */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255, 43, 6, 0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-neutral-900 text-white rounded-[2.5rem] p-8 md:p-14 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-neutral-800 relative overflow-hidden group"
                    >
                        {/* Subtle inner glow */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tedx-red via-red-600 to-tedx-red opacity-80"></div>

                        <p className={`text-lg md:text-2xl leading-loose font-medium opacity-90 relative z-10 whitespace-pre-line ${isAr ? 'font-arabic' : 'font-english'}`}>
                            <Trans
                                i18nKey="about_upm.content_intro"
                                components={[<span className="text-tedx-red font-bold" />]}
                            />
                        </p>
                    </motion.div>

                    {/* 3. CENTER QUOTE */}
                    <motion.div variants={fadeInUp} className="py-16 md:py-24 text-center px-4">
                        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-tedx-red leading-snug drop-shadow-sm ${isAr ? 'font-arabic' : 'font-english'}`}>
                            <span className="text-black">"</span>{t('about_upm.intro_subtitle')}<span className="text-black">"</span>
                        </h2>
                    </motion.div>

                    {/* 4. CARD 2: Split Layout (Tourism) */}
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-neutral-900 text-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-neutral-800 overflow-hidden flex flex-col md:flex-row relative"
                    >
                        {/* Subtle inner glow */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 opacity-80"></div>

                        {/* LEFT SIDE (Right in Arabic): Title & Intro */}
                        <div className="flex-1 p-8 md:p-14 bg-neutral-900/50 backdrop-blur-sm z-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-800">
                            <h3 className={`text-3xl md:text-4xl font-bold text-tedx-red mb-6 ${isAr ? 'font-arabic' : 'font-english'}`}>
                                {t('about_upm.tourism_title')}؟
                            </h3>
                        </div>

                        {/* RIGHT SIDE (Left in Arabic): Content Description */}
                        <div className="flex-[2] p-8 md:p-14 flex items-center justify-center bg-neutral-900 z-10">
                            <p className={`text-base md:text-lg leading-loose text-justify opacity-90 whitespace-pre-line ${isAr ? 'font-arabic' : 'font-english'}`}>
                                <Trans
                                    i18nKey="about_upm.tourism_content"
                                    components={[<span className="text-tedx-red font-bold" />]}
                                />
                            </p>
                        </div>

                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutTEDxUPM;