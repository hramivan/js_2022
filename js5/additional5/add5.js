//- створити функцію яка повертає найбільше число з масиву
/*let arr=[3,4,77,111,98,4];
let max = (array) => {
    let max = array[0];
    for (const item of array) {
        if (item > max) {
            max = item;
        }

    }
    return max;
};
console.log(max(arr));*/

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function foo(a,b,c){
    if(a>b && a>c){
        console.log(a);
    }else if (b>a && b>c){
        console.log(b);
    }else if (c>a && c>b){
        console.log(c);
    }
}
foo(9,50,6)*/
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*const arr = [9,6,3,3];
function  foo (array){
    let sum=0;
    for (const item of array){
        sum  += item;
    }

   return sum/array.length;
}
console.log(foo(arr))*/
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function foo (a,b,c){
    if (a<b && c>a){
        console.log(a);
    }else if ((b<a && b<c)){
        console.log(b);
    }else if (c<b && c<a){
        console.log(c);
    }
}
foo (9,11,10)*/
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*function foo(...arguments){
    let min = arguments [0];
    let max = arguments [0];
    for (const item of arguments){
        if (item>max){
            max=item;
        }
        if(item<min){
            min=item;
        }
    }
    console.log(max);
    return min;

}
let foo1 = foo(1,2,3,4,5);
console.log(foo1)*/
//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*let arr=[];
function foo(array){
    for (let i = 0; i<10;i++){
       arr[i]=Math.floor(Math.random()*100);
    }
    console.log(arr);
}
foo()*/
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*let arr=[];
function foo(limit){
    for (let i = 0; i<limit;i++){
       arr[i]=Math.floor(Math.random()*100);
    }
    console.log(arr);
}
foo(67)*/
//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*let arr= [1,2,3];
function foo (array){
    let newArrray =[];
    for (let i= array.length-1, j=0; i>=0;i--){
        newArrray[j++]=array[i];
    }
    return newArrray;
}
console.log(foo(arr))*/


//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*const foo = (...arguments) =>arguments.length===2 ? arguments[0]+arguments[1]:arguments[0];
let foo1=foo('q',`y`);
console.log(foo1)*/

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  //  EXAMPLE:
//[1,2,3,4]
  //  [2,3,4,5]
//результат
 //   [3,5,7,9]
/*let arr1=[1,2,3,4];
let arr2=[1,2,3];
function foo(array1,array2){
    let res=[];
    let xxx= array1.length>=array2.length ? array1 : array2;
    for (let i=0;i<xxx.length; i++){
        res[i]=(array1[i] || 0)+(array2[i]|| 0);
    }
    return res;
}
console.log(foo(arr1,arr2));*/
//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
  //  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
/* let arr =[
     {name: 'Dima', age: 13},
     {model: 'Camry'}
 ]
function foo(array){
     let newArray =[];
     for (let i=0, j= 0; i<array.length;i++){
         for(const key in array[i]){
             newArray[j++]=key;
         }
     }
     return newArray;
}
console.log(foo(arr))*/

    //- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
  //  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arr =[
    {name: 'Dima', age: 13},
    {model: 'Camry'}
]
function foo(array){
    let newArray =[];
    for (let i=0, j= 0; i<array.length;i++){
        for(const key in array[i]){
            newArray[j++]=array[i][key];
        }
    }
    return newArray;
}
console.log(foo(arr))