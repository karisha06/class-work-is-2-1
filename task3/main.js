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

if ( college[0]["isStudent"] === true) {
    console.log(`Студент ${college[0]["name"]}`);
    if ( college[0]["age"] >=18 ) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний. Ему ${college[0]["age"]} лет`);
    } else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний. Ему ${college[0]["age"]} лет`);
    }
}
if (college[0]["cash"] >= 4500 ) {
    console.log(`Студент ${college[0]["name"]} получает повышенную стипендию. (${college[0]["cash"]} руб.)`);
} else if ( college[0]["cash"] <= 4400 && college[0]["cash"] >= 1) {
    console.log(`Студент ${college[0]["name"]} получает обычную стипендию. (${college[0]["cash"]} руб.)`);
} else if  ( college[0]["cash"] == 0 ) {
    console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
} else if (college[0]["isStudent"] === false) { 
    console.log(`Вы выбрали студента ${college[0]["name"]}`) }
    if (college[0]["isKurator"] === true) { 
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0]["name"]}`) }