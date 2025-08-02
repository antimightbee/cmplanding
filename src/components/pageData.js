import options1 from "../img/icons/options-1.svg";
import options2 from "../img/icons/options-2.svg";
import options3 from "../img/icons/options-3.svg";
import optionsAboutImg1 from "../img/frontpage/optionsAbout-img1.png"
import optionsAboutImg2 from "../img/frontpage/optionsAbout-img2.png"
import optionsAboutSideImg1 from "../img/frontpage/optionsAbout-sideImg1.png"
import optionsAboutSideImg2 from "../img/frontpage/optionsAbout-sideImg2.png"
import profileImg1 from "../img/frontpage/slider1.png"
import profileImg2 from "../img/frontpage/slider2.png"
import profileImg3 from "../img/frontpage/slider3.png"
import profileImg4 from "../img/frontpage/slider4.png"
import facebook from "../img/icons/facebook.svg"
import instagram from "../img/icons/instagram.svg"
import telegram from "../img/icons/telegram.svg"
export const LANG = {
    ua: {
        deco: "Декорація",
        header: {
            subscribe: "Оформити підписку",
            logo_alt: "Логотип Case Manager"
        },
        first_screen: {
            title: "Оптимізуйте свою роботу з",
            description: "Платформою для управління соціальними послугами, спрощення ведення справ, зберігання даних та координації наданої допомоги"
        },
        feedback_form: {
            title: "Залишити заявку",
            name: 'Ім`я',
            phone: 'Телефон',
            personal_data_start: "Даю згоду на обробку ",
            personal_data_end: "персональних даних",
            send: "Надіслати",
            close:"Закрити",
            error: 'Сталася помилка при надсиланні. Спробуйте пізніше.',
        },
        options: [
            { title: "Організація компанії", description: "Автоматизуйте рутинні процеси для швидшої обробки випадків та зменшення адміністративного навантаження" },
            { title: "Зручне управління кейсами", description: "Швидко знаходьте структуровану інформацію та контролюйте ведення кейсів для спрощення супроводу клієнтів" },
            { title: "Безпека", description: "Гнучкі права доступу, шифрування даних та окремий сервер гарантують надійний захист вашої інформації." }
        ],
        options_about: [
            { title: "Відстежуйте загальну статистику своїх кейсів", descriptiion: "Групуйте кейси за кольорами, додавайте фото, документи, корисні посилання і надані послуги — усе впорядковано та під рукою." },
            { title: "Керуйте логістикою між своїми кейсами ", descriptiion: "Швидкий пошук, зручна таблиця, експорт в PDF. Тримайте всі дані про клієнтів під контролем — без хаосу і дублювань." }
        ],
        about_case_manager: "Case Manager Pro — сучасна платформа, яка оптимізує щоденну рутину соціальних працівників, психологів, викладачів та волонтерських організацій.",
        subscription: {
            title: "Доступний кожному",
            description: "Почніть економити свій час",
            monthly: "Помісячно",
            yearly: "На рік",
            discount: "Знижка"
        },
        card: {
            from: "від",
            uah: "грн",
            year: "рік",
            month: "місяць",
            set: "виставляється",
            yearly: "щорічно",
            monthly: "щомісячно",
            subscribe: "Оформити підписку"
        },
        subscriptions: [
            {
                title: "Індивідуальний підхід",
                payment: "виставляється щомісячно",
            }
        ],
        subscriptions_options: {
            official_license: "Офіційна ліцензія",
            fast_support: "Швидка підтримка",
            mobile_version: "Мобільна версія",
            up_to_100_users: "До 100 користувачів",
            up_to_50_cases: "До 50 кейсів"
        },
        feedbacks: "Відгуки",
        burger_options: {
            about: "Про нас",
            price: "Вартість",
            contacts: "Контакти"
        },
        footer:{
            logo_alt: "Логотип Case Manager",
            our_contacts:"Наші контакти"
        }
    },
    eng: {}
}
export const pageData = {
    options: [
        {
            iconURL: options1,
            title: LANG.ua.options[0].title,
            description: LANG.ua.options[0].description
        },
        {
            iconURL: options2,
            title: LANG.ua.options[1].title,
            description: LANG.ua.options[1].description
        },
        {
            iconURL: options3,
            title: LANG.ua.options[2].title,
            description: LANG.ua.options[2].description
        },
    ],

    optionsAbout: [
        {
            title: LANG.ua.options_about[0].title,
            description: LANG.ua.options_about[0].descriptiion,
            img: optionsAboutImg1,
            sideImg: optionsAboutSideImg1
        },
        {
            title: LANG.ua.options_about[1].title,
            description: LANG.ua.options_about[1].descriptiion,
            img: optionsAboutImg2,
            sideImg: optionsAboutSideImg2
        },
    ],

    subscriptions: [
        {
            title: LANG.ua.subscriptions[0].title,
            price: 299,
            payment: LANG.ua.subscriptions[0].payment,
            options: {
                [LANG.ua.subscriptions_options.official_license]: true,
                [LANG.ua.subscriptions_options.fast_support]: true,
                [LANG.ua.subscriptions_options.mobile_version]: true,
                [LANG.ua.subscriptions_options.up_to_100_users]: true,
                [LANG.ua.subscriptions_options.up_to_50_cases]: true,
            }
        },
    ],
    yearDiscount: 15,
    sliderData: [{
        profileImg: profileImg1,
        name: "Вікторія Бойко",
        date: "30.06.2024",
        rating: 4,
        text: "Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    }, {
        profileImg: profileImg2,
        name: "Тетяна Колесник",
        date: "30.06.2024",
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    }, {
        profileImg: profileImg3,
        name: "Віктор Коломейчук",
        date: "30.06.2024",
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    }, {
        profileImg: profileImg4,
        name: "Вероніка Лях",
        date: "30.06.2024",
        rating: 5,
        text: "Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    },
    ],
    burgerOptions: {
        about: {
            title: LANG.ua.burger_options.about,
            elementId: "about"
        },
        price: {
            title: LANG.ua.burger_options.price,
            elementId: "price"
        },
        contacts: {
            title: LANG.ua.burger_options.contacts,
            elementId: "contacts"
        },
    },
    socials: [
        // {
        //     href: '',
        //     alt: 'Facebook',
        //     img: facebook
        // },
        // {
        //     href: '',
        //     alt: 'Instagram',
        //     img: instagram
        // },
        {
            href: 'https://t.me/caseManagerPro',
            alt: 'Telegram',
            img: telegram
        }
    ]
}

