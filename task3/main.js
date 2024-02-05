// let students = ["Андрей", "Иван", "Стас"];
// students[50] = "Индекс 50"
// console.log(students);

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// college[1][1] = 112
// let kab = college[1][1]
// console.log(kab)

let number = [ 1,2,3,4,5,6,7 ];

const coutLength = 5;
if ( number.length === 5 ) {
    console.log("ok")
} else if ( number.length < coutLength) {
    let result = coutLength - number.length;
    console.log(`Длина массива не равна: ${number.length}. Длину массива нужно увеличить до ${coutLength} Прибавьте к массиву значение ${result}`)
} else if ( number.length > coutLength ) {
    result = number.length - coutLength;
    console.log(`Длина массива не равна: ${number.length}. Длину массива нужно уменьшить до ${coutLength} Удалите из массива значение ${result}` )
}
    
