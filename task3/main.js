// let person = {
//     name: "Tom",
//     age: 18,
//     hobbies: ["Кушать", "Спать", "Просмотр кино"],
//     contacts: {
//         phone: [89938830249, 4893809549],
//         email: ["tom@gmail.com", "tom2@icloud.com"],
//         social: "www.github.com"
//     }
// }
// console.log(person["name"], person["age"]);
// console.log(person["hobbies"][2]);
// console.log(person["contacts"]["email"][1]);

let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС 2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 5500,
        isStudent: true
    },
    {
        name: "Lisa",
        age: 17,
        group: "СА 3-1",
        studID: 321232,
        typeLearning: "Заочная",
        task: ["БЖ", "ИЗО", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "СА 3-1",
        kafedra: "Инф.технологии",
        predmet: ["БЖ", "ИЗО", "ПРАВО", "МДК-04-01"],
        isStudent: false
    },
    {
        name: "Bob",
        age: 62,
        isKurator: true,
        kuratorGroup: "ИС 2-1",
        kafedra: "Инф.технологии",
        predmet: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        isStudent: false
    }
];

let count = 1
let isStud = college[count]['isStudent']
let peopleName = college[count]['name']
let studAge = college[count]["age"]
let isKuratorGroup = college[count]['kuratorGroup']
let studCash = college[count]['cash']
let isKurator = college[count]["isKurator"]

if ( isStud === true) {
    console.log(`Вы выбрали студента ${peopleName}`);
    if ( studAge >=18 ) {
        console.log(`Студент ${peopleName} совершеннолетний. Ему ${studAge} лет`);
    } else {
        console.log(`Студент ${peopleName} не совершеннолетний. Ему ${studAge} лет`);
    }
}
if (studCash >= 4500 ) {
    console.log(`Студент ${peopleName} получает повышенную стипендию. (${studCash} руб.)`);
} else if ( studCash <= 4400 && studCash >= 1) {
    console.log(`Студент ${peopleName} получает обычную стипендию. (${studCash} руб.)`);
} else if  ( studCash == 0 ) {
    console.log(`Студент ${peopleName} не получает стипендию.`);
} else if (isStud === false) { 
    console.log(`Вы выбрали студента ${peopleName}`) }
    if ( isKurator === true) { 
        console.log(`Преподаватель ${peopleName} куратор группы ${isKuratorGroup}`) }