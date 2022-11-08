//- Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 17;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = 17;
if (time >= 0 && time <= 14) {
    console.log('Перша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('Друга чверть');
} else if (time >= 30 && time <= 44) {
    console.log('Третя чверть ');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть');
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 32;
if (day >= 1 && day <= 10) {
    document.write('Перша декада')
} else if (day >= 11 && day <= 20) {
    document.write('Друга декада')
} else if (day >= 21 && day <= 31) {
    document.write('Третя декада')
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = prompt('Введіть порядковий номер дня тижня');
console.log(week);
switch (week) {
    case '1':
        document.write('Monday');
        break;
    case '2':
        document.write('Tuesday');
        break;
    case '3':
        document.write('Wednesday');
        break;
    case'4':
        document.write('Thursday');
        break;
    case '5':
        document.write('Friday');
        break;
    case'6':
        document.write('Saturday');
        break;
    case'7':
        document.write('Sunday');
        break;
    default:
        confirm('Оберіть число від 1 до 7')

}
//    - Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//      Також потрібно врахувати коли введені рівні числа.
let number1= 10;
let number2= 10;
if (number1>number2){
    console.log(number1);
}else if (number2>number1){
    console.log(number2);
}else if (number2===number1){
    console.log(number1 = number2);
}

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x  = NaN || 'default';
console.log(x)