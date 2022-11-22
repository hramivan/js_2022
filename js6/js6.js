//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
/*let str= 'hello world';
console.log(str.length);
let str1='lorem ipsum';
console.log(str1.length);
let str2='javascript is cool';
console.log(str2.length)*/
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
//let str =['hello world', 'lorem ipsum', 'javascript is cool'];
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string of str1) {
    arr=str1.toLowerCase(string)

}
console.log(arr)
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   ';
console.log(str.length)
let s = str.trim();
console.log(s)
console.log(s.length)*/

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
/*let str = 'Ревуть воли як ясла повні';
arr = str.split(' ');
console.log(arr);*/



//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let array = arr.map();
console.log(array)

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//sortNums(nums,'ascending') // [3,11,21]
//let nums = [11,21,3];
//console.log(nums.sort(function (a,b){
  //  return a-b;
//}));
//sortNums(nums,'descending') // [21,11,3]
//console.log(nums.sort(function (a,b){
  //  return b-a;
//}))

//- є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
//-- відсортувати його за спаданням за monthDuration
//let filter1 = coursesAndDurationArray.filter((user)=>user.monthDuration );
//console.log(filter1)
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//let filter = coursesAndDurationArray.filter((user)=>user.monthDuration > 5);
//console.log(filter)

//описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше


/*{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/


//Додатково по reduce
//Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
/*{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]*/