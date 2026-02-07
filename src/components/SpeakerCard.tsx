import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { type Speaker } from '../data/speakers';

interface SpeakerCardProps {
    speaker: Speaker;
    index?: number;
}

const SpeakerCard = ({ speaker, index = 0 }: SpeakerCardProps) => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const getSessionBadgeText = (session: number) => {
        return t(`speakers.session_${session}_badge`);
    };

    // Movement settings: Increased distance to make the movement obvious
    const patternVariants = (xDist: number, yDist: number, rotateDist: number) => ({
        initial: { x: 0, y: 0, rotate: rotateDist, opacity: 0.8 },
        hover: {
            x: xDist, // Fixed physical movement (Removed isAr flip)
            y: yDist,
            rotate: rotateDist + 15,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" as any }
        }
    });

    // PURE RED FILTER: This forces any SVG to become #EB0028
    const pureRedFilter = {
        filter: 'invert(12%) sepia(91%) saturate(7400%) hue-rotate(352deg) brightness(95%) contrast(115%)'
    };

    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group relative bg-white rounded-[2.5rem] shadow-2xl border-4 border-white w-[350px] h-[580px] flex-shrink-0 snap-center flex flex-col p-6 m-6"
            style={{ direction: isAr ? 'rtl' : 'ltr' }}
        >
            {/* 1. Session Badge */}
            <div className={`absolute top-8 ${isAr ? 'right-8' : 'left-8'} z-40`}>
                <div className={`bg-[#EB0028] text-white text-[11px] font-black px-5 py-2 rounded-full shadow-lg uppercase tracking-wider ${isAr ? 'font-arabic' : 'font-english'}`}>
                    {getSessionBadgeText(speaker.session)}
                </div>
            </div>

            {/* 2. Image Area with VIBRANT RED Patterns */}
            <div className="relative w-full flex justify-center mt-12 mb-8 h-[250px]">

                {/* BIG RED PATTERN: Top Left (ALWAYS Left) */}
                <motion.div
                    variants={patternVariants(-35, -20, -15)}
                    className="absolute -top-12 -left-12 z-10 will-change-transform"
                >
                    <img
                        src="/logo_UPM_Patterns.svg"
                        className="w-36 h-36"
                        style={pureRedFilter}
                        alt=""
                    />
                </motion.div>

                {/* BIG RED PATTERN: Bottom Right (ALWAYS Right) */}
                <motion.div
                    variants={patternVariants(40, 25, 20)}
                    className="absolute -bottom-14 -right-14 z-10 will-change-transform"
                >
                    <img
                        src="/logo_Plam_Pattern.svg"
                        className="w-44 h-44"
                        style={pureRedFilter}
                        alt=""
                    />
                </motion.div>

                {/* RED PATTERN: Side (ALWAYS Right) */}
                <motion.div
                    variants={patternVariants(20, 0, 45)}
                    className="absolute top-1/2 -right-14 z-10 will-change-transform"
                >
                    <img
                        src="/logo_Haram_Pattern.svg"
                        className="w-28 h-28"
                        style={pureRedFilter}
                        alt=""
                    />
                </motion.div>

                {/* The Red Photo Square */}
                <motion.div
                    className="w-[210px] h-[230px] bg-[#EB0028] relative z-20 shadow-[0_20px_50px_rgba(235,0,40,0.3)] overflow-hidden rounded-2xl flex items-end justify-center will-change-transform"
                    whileHover={{ scale: 1.02, y: -5 }}
                >
                    {speaker.image ? (
                        <img
                            src={speaker.image}
                            alt={isAr ? speaker.nameAr : speaker.nameEn}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                            <span className="text-white text-6xl font-black">?</span>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* 3. Text Content */}
            <div className="flex-1 flex flex-col items-center text-center px-2">
                <h3 className={`text-black font-black text-2xl mb-1 tracking-tight ${isAr ? 'font-arabic' : 'font-english'}`}>
                    {t('speakers.label') || (isAr ? "متحدث" : "Speaker")} {index + 1}
                </h3>

                <h4 className={`text-[#EB0028] font-bold text-xl mb-6 ${isAr ? 'font-arabic' : 'font-english'}`}>
                    {isAr ? speaker.nameAr : speaker.nameEn}
                </h4>

                <div className="w-full border-t-2 border-dashed border-gray-100 pt-6 mt-auto">
                    <p className={`text-black font-black text-lg leading-tight mb-2 ${isAr ? 'font-arabic' : 'font-english'}`}>
                        {t(`speakers.${speaker.talkKey}.title`)}
                    </p>
                    <p className={`text-gray-500 text-sm font-medium leading-relaxed line-clamp-2 ${isAr ? 'font-arabic' : 'font-english'}`}>
                        {t(`speakers.${speaker.talkKey}.desc`)}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default SpeakerCard;