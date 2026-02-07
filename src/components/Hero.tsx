import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <section id="home" className="relative overflow-hidden bg-madinah-dark text-white min-h-[95dvh] flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-tedx-red/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            {/* Main Content Area - KEEP THIS CONTAINER AS IS */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    {/* Header section */}
                    <span className={`inline-block py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide mb-6 text-white ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        {t('common.date')}   <span className="text-tedx-red"> • </span> {t('common.location')}
                    </span>

                    {/* TEDxUPM Text */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-0" dir="ltr">
                        <span className="text-tedx-red">TED</span>
                        <span className="text-tedx-red text-[0.65em] align-top">x</span>
                        <span className="text-white-300 ms-2 md:ms-3">UPM</span>
                    </h1>

                    {/* LOGO SECTION WITH SIDE PATTERNS - ANIMATED */}
                    <div className="relative inline-block mx-auto mb-6">
                        {/* LEFT PATTERN */}
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden lg:block pointer-events-none"
                            style={{ height: '120%', marginLeft: '-80px' }}
                        >
                            <motion.img
                                src="/logo_pattern_left.svg"
                                alt="Left Pattern"
                                className="w-auto h-full object-contain"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: [0, -10, 0] }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.5 },
                                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                                }}
                            />
                        </div>

                        {/* CENTER LOGO */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
                        >
                            <motion.img
                                src="/logo_logo.svg"
                                alt="جامعة الأمير مقرن - University of Prince Mugrin"
                                className="h-auto mx-auto -mt-12 mb-0"
                                style={{
                                    width: 'clamp(300px, 85vw, 500px)',
                                    maxWidth: 'none'
                                }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                            />
                        </motion.div>

                        {/* RIGHT PATTERN */}
                        <div
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block pointer-events-none"
                            style={{ height: '120%', marginRight: '-40px' }}
                        >
                            <motion.img
                                src="/logo_pattern_right.svg"
                                alt="Right Pattern"
                                className="w-auto h-full object-contain"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: [0, 10, 0] }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.5 },
                                    x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                                }}
                            />
                        </div>
                    </div>

                    {/* Buttons Container */}
                    <div className="-mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('about-upm')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-10 py-4 bg-tedx-red text-white font-bold rounded-full shadow-lg shadow-tedx-red/30 hover:shadow-tedx-red/50 hover:brightness-110 transition-all flex items-center gap-2 group ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}
                        >
                            {t('hero.cta')}
                            {isRTL ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </motion.button>
                        <button
                            onClick={() => document.getElementById('about-tedx')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-10 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}
                        >
                            {t('nav.about_tedx').split(' ').map((word, i) => word.includes('TED') ? <span key={i} className="text-tedx-red font-bold">{word} </span> : word + ' ')}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="relative z-20 w-full flex-shrink-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="w-full cursor-pointer pb-8"
                    onClick={() => document.getElementById('about-tedx')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <motion.div
                        className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;