//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = [10, 'dog', true, 0, '17', 100, 'cat', 4, [58, 'rat']];
a [9] = 59;
console.log(a [0]);
console.log(a [1]);
console.log(a [2]);
console.log(a [3]);
console.log(a [4]);
console.log(a [5]);
console.log(a [6]);
console.log(a [7]);
console.log(a [8][0])
console.log(a [8][1]);
console.log(a [9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Хіба ревуть воли, як ясла повні?',
    pageCount: 311,
    genre: 'Роман'
};
let book2 = {
    title: 'Я робот',
    pageCount: 253,
    genre: 'Фантастика'

};
let book3 = {
    title: 'Гаррі Поттер’',
    pageCount: 367,
    genre: 'Фентезі'
};
console.log(book1);
console.log(book2);
console.log(book3);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
book1.authors = [name = 'Панас Мирний', age = 71];

let book5 = {
    title: 'Я робот',
    pageCount: 253,
    genre: 'Фантастика',
    authors: [name = 'Айзек Азімов', age = 72]
};
let book6 = {
    title: 'Гаррі Поттер’',
    pageCount: 367,
    genre: 'Фентезі',
    authors: [name = 'Джоан Роулін', age = 57]

};
console.log(book1);
console.log(book5);
console.log(book6);
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'a', username: 'b', password: '123'},
    {name: 'b', username: 'c', password: '321'},
    {name: 'c', username: 'g', password: '4325'},
    {name: 'd', username: 'g', password: '346'},
    {name: 'e', username: '7', password: '45'},
    {name: 'f', username: 'gl', password: '7978p'},
    {name: 'g', username: '.jk', password: '875p'},
    {name: 'h', username: 'dfh', password: 'l896356'},
    {name: 'i', username: 'fds', password: '67i35'},
    {name: 'j', username: 'fdsD', password: '56356'},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);