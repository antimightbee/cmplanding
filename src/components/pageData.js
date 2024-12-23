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
export const pageData = {
    options: [
        {
            iconURL: options1,
            title: "Організація компанії",
            description: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            iconURL: options2,
            title: "Зручне управління кейсами ",
            description: "Lorem ipsum dolor sit amet consectetur. At eget at habitasse tincidunt."
        },
        {
            iconURL: options3,
            title: "Відстеження статистики",
            description: "Lorem ipsum dolor sit amet consectetur."
        },
    ],

    optionsAbout:[
        {
            title:"Відстежуйте загальну статистику своїх кейсів",
            description:"Lorem ipsum dolor sit amet consectetur. Id venenatis et tincidunt faucibus. Amet et nibh bibendum pretium elit malesuada pellentesque.",
            img:optionsAboutImg1,
            sideImg:optionsAboutSideImg1
        },
        {
            title:"Керуйте логістикою між своїми кейсами ",
            description:"Lorem ipsum dolor sit amet consectetur. Id venenatis et tincidunt faucibus. Amet et nibh bibendum pretium elit malesuada pellentesque.",
            img:optionsAboutImg2,
            sideImg:optionsAboutSideImg2
        },
    ],

    subscriptions:[
        {
            title:"стандарт",
            price:500,
            payment:"виставляється щомісячно",
            options:{
                "Щомісячна підтримка":true,
                "Допомога встановлення":true,
                "Повний доступ":true,
                "Щоденна підтримка":false,
            }
        },
        {
            title:"стандарт плюс",
            price:1000,
            payment:"виставляється щомісячно",
            options:{
                "Щомісячна підтримка":true,
                "Допомога встановлення":true,
                "Повний доступ":true,
                "Щоденна підтримка":true,
            },
            img:true
        },
    ],
    yearDiscount:15,
    sliderData:[{
        profileImg:profileImg1,
        name:"Вікторія Бойко",
        date:"30.06.2024",
        rating:4,
        text:"Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    },{
        profileImg:profileImg2,
        name:"Тетяна Колесник",
        date:"30.06.2024",
        rating:5,
        text:"Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    },{
        profileImg:profileImg3,
        name:"Віктор Коломейчук",
        date:"30.06.2024",
        rating:5,
        text:"Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    },{
        profileImg:profileImg4,
        name:"Вероніка Лях",
        date:"30.06.2024",
        rating:5,
        text:"Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus.Lorem ipsum dolor sit amet consectetur. Ipsum vitae praesent viverra nulla duis ut ut dui cursus."
    },
],
burgerOptions:{
    about:{
        title:"Про Case Manager",
        elementId:"about"
    },
    options:{
        title:"Тарифи",
        elementId:"options"
    },
    contacts:{
        title:"Контакти",
        elementId:"contacts"
    },
}

}
