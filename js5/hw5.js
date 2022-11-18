//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area (longSide,shortside) {
    let result = (longSide * shortside) ;
    console.log(result);
}
 area(4, 3);
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (radius){
    let result = (3.14* Math.pow(radius,2));
    console.log(result)
}
circle(10)
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (hight,radius){
    let result = (2*3.14*Math.pow(radius,2)+ 2*3.14*radius*hight)
    console.log(result);
}
cylinder(3,5)
//- створити функцію яка приймає масив та виводить кожен його елемент
/*let arr=[1,2,3,];
function foo(array){
    for (const iten of array){
        console.log(iten)
    }
}
foo(arr);*/
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function writer(text){
    document.write(`<p>${text}</p>`)
}
writer('fjshorgjlntejnp')*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function writer (text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
writer('hello');*/
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function elements(text,num){
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
elements('kjg;jggip',3)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let arr = [17,'ghkjl',true,];
function foo(array){
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);

    }
    document.write(`</ul>`)
}
foo(arr);*/

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr =[
    {
        name: 'Ivan',
        age : 26
    },
    {
        name: 'Stella',
        age : 22
    }
]
 function object (array){
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.name}--${arrayElement.age}</div>`)

    }
}
object(arr)
//- створити функцію яка повертає найменьше число з масиву

/*let arr = [117,-75,0,1,5,50,-5,59];

function foo(array){
    let min = array[0];
    for (const iten of array){
        if (iten < min){
            min = iten;
        }
    }
    return min;
}

console.log(foo(arr));*/

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*let arr = [10,9,55,1];
function foo(array){
    let sum=0;
    for (const item of array){
        sum += item;
    }
return sum;
}
console.log(foo(arr))*/