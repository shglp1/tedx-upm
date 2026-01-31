// Interface defined at bottom

export const speakers: Speaker[] = [
    // Session 1: نور الفكرة بنور المكان (Red Badge)
    {
        id: 1,
        nameAr: "متحدث 1",
        nameEn: "Speaker 1",
        titleAr: "خبير تخطيط عمراني",
        titleEn: "Urban Planning Expert",
        image: "/speakers/placeholder-1.webp",
        session: 1,
        talkNumber: 1,
        talkKey: "talk_1"
    },
    {
        id: 2,
        nameAr: "متحدث 2",
        nameEn: "Speaker 2",
        titleAr: "خبير ضيافة",
        titleEn: "Hospitality Expert",
        image: "/speakers/placeholder-2.webp",
        session: 1,
        talkNumber: 2,
        talkKey: "talk_2"
    },
    {
        id: 3,
        nameAr: "متحدث 3",
        nameEn: "Speaker 3",
        titleAr: "شخصية مؤثرة",
        titleEn: "Influential Figure",
        image: "/speakers/placeholder-3.webp",
        session: 1,
        talkNumber: 3,
        talkKey: "talk_3"
    },
    {
        id: 4,
        nameAr: "متحدث 4",
        nameEn: "Speaker 4",
        titleAr: "ممثل العمل التطوعي",
        titleEn: "Volunteer Representative",
        image: "/speakers/placeholder-4.webp",
        session: 1,
        talkNumber: 4,
        talkKey: "talk_4"
    },

    // Session 2: السياحة الذكية (Gold Badge)
    {
        id: 5,
        nameAr: "متحدث 5",
        nameEn: "Speaker 5",
        titleAr: "أخصائي أرشفة",
        titleEn: "Archiving Specialist",
        image: "/speakers/placeholder-5.webp",
        session: 2,
        talkNumber: 5,
        talkKey: "talk_5"
    },
    {
        id: 6,
        nameAr: "متحدث 6",
        nameEn: "Speaker 6",
        titleAr: "صانع محتوى ثقافي",
        titleEn: "Cultural Content Creator",
        image: "/speakers/placeholder-6.webp",
        session: 2,
        talkNumber: 6,
        talkKey: "talk_6"
    },
    {
        id: 7,
        nameAr: "متحدث 7",
        nameEn: "Speaker 7",
        titleAr: "مؤسس شركة سياحة تقنية",
        titleEn: "Tech Tourism Founder",
        image: "/speakers/placeholder-7.webp",
        session: 2,
        talkNumber: 7,
        talkKey: "talk_7"
    },

    // Session 3: المدينة كتجربة متكاملة (Black Badge)
    {
        id: 8,
        nameAr: "متحدث 8",
        nameEn: "Speaker 8",
        titleAr: "رائد أعمال سياحي",
        titleEn: "Tourism Entrepreneur",
        image: "/speakers/placeholder-8.webp",
        session: 3,
        talkNumber: 8,
        talkKey: "talk_8"
    },
    {
        id: 9,
        nameAr: "متحدث 9",
        nameEn: "Speaker 9",
        titleAr: "مطور تعليمي",
        titleEn: "Educational Developer",
        image: "/speakers/placeholder-9.webp",
        session: 3,
        talkNumber: 9,
        talkKey: "talk_9"
    },
    {
        id: 10,
        nameAr: "متحدث 10",
        nameEn: "Speaker 10",
        titleAr: "مصمم تجارب",
        titleEn: "Experience Designer",
        image: "/speakers/placeholder-10.webp",
        session: 3,
        talkNumber: 10,
        talkKey: "talk_10"
    },
    {
        id: 11,
        nameAr: "متحدث 11",
        nameEn: "Speaker 11",
        titleAr: "قيادي صناعي",
        titleEn: "Industrial Leader",
        image: "/speakers/placeholder-11.webp",
        session: 3,
        talkNumber: 11,
        talkKey: "talk_11"
    }
];

export interface Speaker {
    id: number;
    nameAr: string;
    nameEn: string;
    titleAr: string;
    titleEn: string;
    image: string;
    session: number;
    talkNumber: number;
    talkKey: string;
}
