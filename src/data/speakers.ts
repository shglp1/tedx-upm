// Interface defined at bottom

export const speakers: Speaker[] = [
    // Session 1 (5:00 - 6:10)
    {
        id: 1,
        nameAr: "د. وليد فتيحي",
        nameEn: "Dr. Walid Fitaihi",
        titleAr: "طبيب استشاري - مؤسس ورئيس مجلس إدارة المركز الطبي الدولي",
        titleEn: "Consultant Physician - Founder and Chairman of International Medical Center",
        image: "/waleed.svg",
        session: 1,
        talkNumber: 1,
        talkKey: "talk_1"
    },
    {
        id: 2,
        nameAr: "م. أرون موراليدهار",
        nameEn: "Eng. Arun Muralidhar",
        titleAr: "مدير التصميم في مدينة المعرفة الاقتصادية",
        titleEn: "Design Director at Knowledge Economic City",
        image: "/engArawan.svg",
        session: 1,
        talkNumber: 2,
        talkKey: "talk_3"
    },
    {
        id: 3,
        nameAr: "روف العوفي",
        nameEn: "Rof Al-Ofi",
        titleAr: "أخصائية تخطيط استراتيجي - برنامج جودة الحياة",
        titleEn: "Strategic Planning Specialist - Quality of Life Program",
        image: "/roof aloufi.svg",
        session: 1,
        talkNumber: 3,
        talkKey: "talk_4"
    },
    {
        id: 4,
        nameAr: "أ. محمد رباط",
        nameEn: "Mr. Mohammed Ribat",
        titleAr: "فنان ومدير إبداعي",
        titleEn: "Artist and Creative Director",
        image: "/mohmmad ribat.svg",
        session: 1,
        talkNumber: 4,
        talkKey: "talk_5"
    },
    {
        id: 5,
        nameAr: "د. حسين الصادق",
        nameEn: "Dr. Hussein Al-Sadiq",
        titleAr: "خبير في الهندسة الميكانيكية والابتكار المدني",
        titleEn: "Expert in Mechanical Engineering and Civic Innovation",
        image: "/hussin.svg",
        session: 1,
        talkNumber: 5,
        talkKey: "talk_6"
    },

    // Session 2 (6:40 - 7:20)
    {
        id: 6,
        nameAr: "م. صفية صقر",
        nameEn: "Eng. Safia Saqr",
        titleAr: "رائدة أعمال - شريكة في مشروع المغيسلة",
        titleEn: "Entrepreneur - Partner in Al-Mughaisila Project",
        image: "/Safia.svg",
        session: 2,
        talkNumber: 6,
        talkKey: "talk_7"
    },
    {
        id: 7,
        nameAr: "د. أحمد الحايك",
        nameEn: "Dr. Ahmad Al-Hayek",
        titleAr: "رئيس قسم الذكاء الاصطناعي بجامعة الأمير مقرن",
        titleEn: "Head of AI Department at Prince Muqrin University",
        image: "/Ahmad .svg",
        session: 2,
        talkNumber: 7,
        talkKey: "talk_8"
    },
    {
        id: 8,
        nameAr: "أحمد الجريشي",
        nameEn: "Ahmad Al-Jurayshi",
        titleAr: "رئيس مجلس إدارة مشروع “قصة المكان”",
        titleEn: "Chairman of 'Story of the Place' Project",
        image: "/AhmadAljarishi.svg",
        session: 2,
        talkNumber: 8,
        talkKey: "talk_9"
    },

    // Session 3 (7:25+)
    {
        id: 9,
        nameAr: "محمود جنيد",
        nameEn: "Mahmoud Junaid",
        titleAr: "طالب هندسة معمارية بجامعة الأمير مقرن",
        titleEn: "Architecture Student at Prince Muqrin University",
        image: "/mahoomd.svg",
        session: 3,
        talkNumber: 9,
        talkKey: "talk_10"
    },
    {
        id: 10,
        nameAr: "د. عبدالله كابر",
        nameEn: "Dr. Abdullah Kabir",
        titleAr: "خبير ومستشار في تاريخ ومعالم المدينة المنورة",
        titleEn: "Expert and Consultant in Madinah History and Landmarks",
        image: "/abdullahkabir.svg",
        session: 3,
        talkNumber: 10,
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
