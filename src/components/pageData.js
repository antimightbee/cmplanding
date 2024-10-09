import options1 from "../img/icons/options-1.svg";
import options2 from "../img/icons/options-2.svg";
import options3 from "../img/icons/options-3.svg";
import optionsAboutImg1 from "../img/frontpage/optionsAbout-img1.png"
import optionsAboutImg2 from "../img/frontpage/optionsAbout-img2.png"
import optionsAboutSideImg1 from "../img/frontpage/optionsAbout-sideImg1.png"
import optionsAboutSideImg2 from "../img/frontpage/optionsAbout-sideImg2.png"
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
            }
        },
    ],
    yearDiscount:15

}
