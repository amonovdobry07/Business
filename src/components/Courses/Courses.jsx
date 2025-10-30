import "./Courses.css"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import biznes1 from "../../assets/biznes1.jpg"
import biznes2 from "../../assets/biznes2.jpg"
import biznes3 from "../../assets/biznes3.jpg"
import biznes4 from "../../assets/biznes4.jpg"
import biznes5 from "../../assets/biznes5.jpg"

const Course = () => {

    const kurslash = [
        {
            id: 1,
            image: biznes1,
            title: "Biznes Asoslari",
            level: "Boshlang'ich",
            description: "Biznesni 0 dan boshlash, mijoz topish va marketing asoslari o'rganis",
            duration: "6 hafta",
            platform: "Coursere",
            price: "Bepul",
            language: "Ingliz Tili (subtitr bilan)",
            skills: ["Marketing", "StartUp", "Moliyaviy Rejalashtirish"]
        },
        {
            id: 2,
            image: biznes2,
            title: "Startap yaratish bo‘yicha master-klass",
            level: "O‘rta",
            description: "Startap g‘oyasini tahlil qilish, investor topish va biznes model yaratish.",
            duration: "8 hafta",
            platform: "Udemy",
            price: "$39.99",
            language: "Rus tili",
            skills: ["Biznes modeli", "Investorlar bilan aloqa", "Pitch Deck tayyorlash"]
        },
        {
            id: 3,
            image: biznes3,
            title: "Raqamli marketing (Digital Marketing)",
            level: "O‘rta",
            description: "Ijtimoiy tarmoqlar, SEO va email marketing orqali biznesni onlayn rivojlantirish.",
            duration: "10 hafta",
            platform: "Skillshare",
            price: "Premium (30 kun bepul)",
            language: "Ingliz",
            skills: ["SMM", "SEO", "Email marketing"]
        },
        {
            id: 4,
            image: biznes4,
            title: "Moliyaviy savodxonlik va biznes hisob-kitoblari",
            level: "Boshlang‘ich",
            description: "Daromad, xarajat va foydani tahlil qilish, buxgalteriya asoslari.",
            duration: "5 hafta",
            platform: "edX",
            price: "Bepul (sertifikat pullik)",
            language: "Ingliz",
            skills: ["Moliyaviy tahlil", "Hisob-kitob", "Byudjet tuzish"]
        },
        {
            id: 5,
            image: biznes5,
            title: "Tadbirkorlik va liderlik",
            level: "Ilg‘or",
            description: "Liderlik, jamoani boshqarish va strategik qarorlar qabul qilishni o‘rgatadi.",
            duration: "7 hafta",
            platform: "Google Digital Garage",
            price: "Bepul",
            language: "O‘zbek (yoki subtitr bilan)",
            skills: ["Liderlik", "Motivatsiya", "Strategik fikrlash"]
        }
    ];

    return (
        <div className="Course-section">
            <div className="course-section-container">
                <h1>Kurslar Ro'yxati</h1>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 10 },
                        480: { slidesPerView: 1.3, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {kurslash.map((kurs) => (
                        <SwiperSlide key={kurs.id}>
                            <div className="course-card">
                                <img src={kurs.image} alt={kurs.title} className="course-img" />
                                <div className="course-content">
                                    <h3>{kurs.title}</h3>
                                    <p className="level">{kurs.level}</p>
                                    <p className="desc">{kurs.description}</p>

                                    <div className="course-info">
                                        <p><strong>Muddati:</strong> {kurs.duration}</p>
                                        <p><strong>Narxi:</strong> {kurs.price}</p>
                                        <p><strong>Platforma:</strong> {kurs.platform}</p>
                                    </div>

                                    <ul className="skills">
                                        {kurs.skills.map((s, i) => <li key={i}>{s}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Course;
