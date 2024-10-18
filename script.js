
// 1
// 1.1
// function greeter(name, surname, age){
//     return `Привет ${name} ${surname} с возрастом ${age}`;
// }

// inName = 'Ivan';
// inFamily = 'Petrov';
// inAge = 17;

// console.log(greeter(inName, inFamily, inAge));

// //1.2
// const sqr = (num) => {
//     return num**2;
// }

// let n = Number(prompt('Input number'));
// console.log(sqr(n));

// //1.3

// const posNeg = (num) => {
//     return (num >=0)? '+++':'---';
// }

// let n = Number(prompt('Input number'));
// console.log(posNeg(n));

//2
// const sum3 = (a, b, c) => {
//     return a + b + c;
// }

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// console.log(sum3(param1, param2, param3));

// function func(num = 5){
//     console.log(num*num);
// }
// func(2);
// func(3);
// func();

//3
//3.1
// const root = (x) => {
//     return Math.sqrt(x);
// }

// let a = Number(prompt('Введите число'));

// console.log(root(a));

//3.2
// const getMin = (a,b) => {
//     return (a > b)? b: a;
// }

// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));

// console.log(getMin(a,b));

//4
//4.1
// const weekDay = (numDay) => {
//     switch(numDay){
//         case 1: return 'понедельник';
//         case 2: return 'вторник';
//         case 3: return 'среда';
//         case 4: return 'четверг';
//         case 5: return 'пятница';
//         case 6: return 'суббота';
//         case 7: return 'воскресенье';
//         default: return 'Такого дня нет';
//     }


// }

//     let a = Number(prompt('Введите номер дня'));

//     console.log(weekDay(a));

// 4.2

// const TimeOfDay = () => {
//     let now = new Date();
//     if (now.getHours >= 0 && now.getHours < 6){
//         return 'ночи';
//     } else if (now.getHours >=6 && now.getHours < 12){
//         return 'утра';
//     } else if (now.getHours >=12 && now.getHours < 18){
//         return 'дня';
//     } else {
//         return 'вечера';
//     }
// }

// const greeterTime = (inName) => {
//     return `Доброго ${TimeOfDay()} ${inName}`;
// }

// let myName = prompt('Ваше имя');

// console.log(greeterTime(myName));

//homework

const cube = (number) => {
    return number**3;
}

//console.log(cube(2) +cube(3));

function checkInput(inputValue){
    let a = Number(inputValue);
    if(isNaN(a)){
        return 'Вы ввели не число';
    } else {
        return a;
    }
}

//let n = checkInput(prompt('введите значение'));


const getSalaryToHand = (salary) => {
    return `Размер заработной платы за вычетом налогов равен ${salary * 0.87}`;
}

//console.log(getSalaryToHand(n));

const maxThree = (a,b,c) => {
    return Math.max(a, b, c);
}

// let num1 = parseFloat(prompt('Введите первое число:'));
// let num2 = parseFloat(prompt('Введите второе число:'));
// let num3 = parseFloat(prompt('Введите третье число:'));
// console.log(`Максимальное из трех ${maxThree(num1,num2,num3)}`);

// Функция сложения
function add(a, b) {
    return a + b;
    }
    // Функция вычитания
    function subtract(a, b) {
    return a > b ? a - b : 0;
    }
    // Функция умножения
    function multiply(a, b) {
    return a * b;
    }
    // Функция деления
    function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль недопустимо';
    }
    // Примеры использования функций
    console.log(add(2, 6)); // 8
    console.log(subtract(5, 3)); // 2
    console.log(multiply(4, 7)); // 28
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Деление на ноль недопустимо