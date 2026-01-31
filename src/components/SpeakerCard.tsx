import { useTranslation } from 'react-i18next';
import { type Speaker } from '../data/speakers';

interface SpeakerCardProps {
    speaker: Speaker;
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    const getSessionColor = (session: number) => {
        switch (session) {
            case 1: return 'bg-tedx-red text-white';
            case 2: return 'bg-madinah-gold text-white';
            case 3: return 'bg-black text-white';
            default: return 'bg-gray-200 text-gray-800';
        }
    };

    const getSessionBadgeText = (session: number) => {
        return t(`speakers.session_${session}_badge`);
    };

    return (
        <div
            className="group relative bg-white dark:bg-white rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center w-[320px] min-h-[480px] flex-shrink-0 snap-center"
        >
            {/* Badges - Top Right (Absolute) */}
            {/* Fix: Moved 'top-4' to 'top-4 right-4' (LTR) or 'top-4 left-4' (RTL) based on dir, but absolute positioning works best if explicit */}
            <div className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} z-20`}>
                <span className={`px-3 py-1 text-[10px] md:text-xs font-bold rounded-full shadow-sm block ${getSessionColor(speaker.session)}`}>
                    {getSessionBadgeText(speaker.session)}
                </span>
            </div>

            {/* Speaker Image - Circular & Centered */}
            <div className="relative mb-6 mt-4">
                {/* Independent Hover Effect: group-hover:border-tedx-red/30 on THIS element only because 'group' is parent */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 border-2 border-gray-100 group-hover:border-tedx-red transition-all duration-300 bg-gray-50 group-hover:scale-105">
                    {/* Placeholder or Image */}
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 overflow-hidden">
                        {speaker.image ? (
                            <img src={speaker.image} alt={isAr ? speaker.nameAr : speaker.nameEn} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl text-gray-300">?</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold font-arabic text-gray-900 mb-2 min-h-[3rem] flex items-center justify-center">
                    {isAr ? speaker.nameAr : speaker.nameEn}
                </h3>
                <p className="text-tedx-red font-medium text-sm md:text-base mb-6 min-h-[1.5rem]">
                    {isAr ? speaker.titleAr : speaker.titleEn}
                </p>

                <div className="w-full pt-6 border-t border-gray-100 mt-auto">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-snug min-h-[3.5rem] flex items-center justify-center">
                        {t(`speakers.${speaker.talkKey}.title`)}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                        {t(`speakers.${speaker.talkKey}.desc`)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard;
