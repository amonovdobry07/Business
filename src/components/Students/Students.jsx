import "./Students.css"
import talaba1 from "../../assets/talaba1.avif"
import talaba2 from "../../assets/talaba2.avif"
import talaba3 from "../../assets/talaba3.avif"
import talaba4 from "../../assets/talaba4.avif"
import talaba5 from "../../assets/talaba5.avif"
import talaba6 from "../../assets/talaba6.avif"

const Students = () => {

    const talabalar = [
        {
            id: 1,
            name: "Ali Karimov",
            age: 22,
            profession: "Biznes talabasi",
            experience: "3 yil",
            specialty: "Startap menejment va sarmoya jalb qilish",
            achievements: [
                "2023-yilda 'Yosh Startapchi' tanlovida 1-o‘rin",
                "2 ta muvaffaqiyatli kichik biznes asoschisi"
            ],
            description: "Startap loyihalar bilan shug‘ullanadi va marketing sohasiga qiziqadi. Jamoaviy ishlash va boshqaruvda faol.",
            image: talaba1,
        },
        {
            id: 2,
            name: "Malika Nurmatova",
            age: 21,
            profession: "Marketing mutaxassisi",
            experience: "2 yil",
            specialty: "Raqamli marketing va brending",
            achievements: [
                "Bir nechta brend uchun SMM kampaniyalar yaratgan",
                "2024-yilda eng faol marketing talabasi sifatida taqdirlangan"
            ],
            description: "Brend rivojlantirish va raqamli reklama yo‘nalishida yetakchi talabalar qatorida.",
            image: talaba2,
        },
        {
            id: 3,
            name: "Jasur Ahmedov",
            age: 23,
            profession: "Startap asoschisi",
            experience: "4 yil",
            specialty: "IT va biznes integratsiyasi",
            achievements: [
                "Innovatsion IT yechim loyihasini ishlab chiqqan",
                "Biznes inkubator dasturida grant yutgan"
            ],
            description: "Biznes g‘oyalarini amalda qo‘llash va investor topish bo‘yicha tajribali.",
            image: talaba3,
        },
        {
            id: 4,
            name: "Nilufar Qodirova",
            age: 20,
            profession: "Biznes tahlilchi",
            experience: "1.5 yil",
            specialty: "Bozor tahlili va ma’lumotlar analitikasi",
            achievements: [
                "Bozor tahlili bo‘yicha talabalar konferensiyasida qatnashgan",
                "Bir nechta biznes jamoalarga konsalting ko‘rsatgan"
            ],
            description: "Ma’lumotlarni tahlil qilib biznes strategiyalarini ishlab chiqadi.",
            image: talaba4,
        },
        {
            id: 5,
            name: "Dilshod Karimov",
            age: 24,
            field: "Biznes boshqaruvi",
            experience: "3 yil",
            achievements: "Startap loyihasini muvaffaqiyatli yo‘lga qo‘ygan",
            description:
                "Dilshod innovatsion fikrlashga ega va jamoani samarali boshqarish bo‘yicha ko‘plab tajribaga ega.",
            image: talaba5,
        },
        {
            id: 6,
            name: "Malika To‘xtayeva",
            age: 22,
            field: "Marketing va reklama",
            experience: "2 yil",
            achievements: "SMM strategiyasi orqali 300% o‘sishni ta’minlagan",
            description:
                "Malika kreativ marketing yechimlarini topishda usta va ijtimoiy tarmoqlarni chuqur tahlil qiladi.",
            image: talaba6,
        }
    ]
    return (
        <div className="Students" id="mijozlar">
            <div className="students-container">
                <h1>Bizning Talabalar</h1>
            </div>
            <div className="students-container2">
                <div className="students-wrapper">
                    {talabalar.map((talaba) => {
                        return (
                            <div key={talaba.id} className="card">
                                <img src={talaba.image} alt={talaba.name} className="card-img" />
                                <div className="card-info">
                                    <h2>{talaba.name}</h2>
                                    <p className="profession">{talaba.profession}</p>
                                    <p><strong>Tajriba:</strong> {talaba.experience}</p> <br />
                                    <p><strong>Soha:</strong> {talaba.specialty}</p>
                                    <ul>
                                        {talaba.achievements}
                                    </ul>
                                    <p className="desc">{talaba.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Students; 