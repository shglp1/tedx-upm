import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { speakers } from '../data/speakers';
import SpeakerCard from '../components/SpeakerCard';
import SectionPattern from '../components/SectionPattern';

const Speakers = () => {
    const { t, i18n } = useTranslation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 420; // Card w(350) + Margin(48) + Gap(24) approx
            const offset = direction === 'left' ? -scrollAmount : scrollAmount;
            scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <section id="speakers" className="bg-white dark:bg-black scroll-mt-28 relative overflow-hidden">
            {/* Decorative Pattern */}
            <SectionPattern />

            <div className="py-12 md:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className={`text-4xl font-bold text-tedx-red mb-4 ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>{t('speakers.title')}</h2>
                    <div className="w-20 h-1 bg-madinah-gold mx-auto"></div>
                </motion.div>

                <div className="relative group">
                    {/* Navigation Buttons - Visible on all screens, absolute positioned */}
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white/80 dark:bg-black/80 p-3 rounded-full shadow-lg text-tedx-red hover:scale-110 transition-transform block"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white/80 dark:bg-black/80 p-3 rounded-full shadow-lg text-tedx-red hover:scale-110 transition-transform block"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Horizontal Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 py-8 px-4 snap-x snap-mandatory scrollbar-hide scroll-smooth items-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="snap-center shrink-0"
                            >
                                <SpeakerCard speaker={speaker} index={index} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
