//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
/*let user = []
function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}
user.push(new User(1 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(2 ,'asfd','qawe','gf@gmail.com',37880985));
user.push(new User(3 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(4,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(5 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(6 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(7 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(8,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(9,'asd','qwe','ghlkajlkf@gmail.com',976489005));
user.push(new User(10 ,'asd','qwe','ghlkajlkf@gmail.com',976489005));

console.log(user)*/
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//let filter = user.filter(value => value.id %2===0);
//console.log(filter)

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//let sort = user.sort ((a,b)=> b.id - a.id);
//console.log(sort)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

/*let client=[];
class Client {




    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
client.push(new Client(1,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3']));
client.push(new Client(2,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3']));
client.push(new Client(3,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book3']));
client.push(new Client(4,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3','book4']))
client.push(new Client(5,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3']))
client.push(new Client(6,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3']))
client.push(new Client(7,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1',]))
client.push(new Client(8,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3']))
client.push(new Client(9,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2']))
client.push(new Client(10,'Ivan','Khramov','gmail@gmail.com',9009979886,['book1','book2','book3','book4','book5']))


console.log(client);

let sort = client.sort((a,b)=>a.order.length - b.order.length);
console.log(sort);*/

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        return console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    // this.info= function (){
    // return document.write(`<li>Модель-${model}</li>,<li>Виробник-${producer}</li>,<li>Рік-${year}</li>,<li>Максимальна швидкість-${maxSpeed}</li>,<li>О'бєм двигуна-${engineCapacity}</li>`)

    // }
    this.info = function () {
        for (const CarKey in this) {
            if (typeof this[CarKey] !== 'function') {
                console.log(`${CarKey}--${this[CarKey]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = maxSpeed + newSpeed
    }
    this.changeYear = function (newValue) {
        return this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver;

    }

}

let car = new Car('tavriya', 'zaz', 2008, 200, 1.2);

car.drive()
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2022)
car.addDriver({name:'Ivan',age:26})

console.log(car)*/


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*
class Cars {
    constructor(model,producer, year,maxSpeed,engineCapacity) {
        this.model=model;
        this.producer=producer;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineCapacity=engineCapacity;
    }
    drive (){
         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        for (const CarKey in this) {
            if (typeof this[CarKey] !== 'function') {
                console.log(`${CarKey}--${this[CarKey]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed){
        return this.maxSpeed=this.maxSpeed+newSpeed
    }
    changeYear (newValue){
        return this.year=newValue
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let cars = new Cars('slavuta','zaz',2007,250,1.2)
cars.drive()
cars.info()
cars.increaseMaxSpeed(50)
cars.changeYear(2022)
cars.addDriver({name:'Ivan'})
console.log(cars)

 */
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//  Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princes{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
let princes= [];
princes.push(new Princes('Ira',40,38));
princes.push(new Princes('Anna',21,42));
princes.push(new Princes('Olga',35,38));
princes.push(new Princes('Marina',40,40));
princes.push(new Princes('Olga',18,35));
princes.push(new Princes('Inna',15,38));
princes.push(new Princes('Alla',22,42));
princes.push(new Princes('Liza',26,39));
princes.push(new Princes('Jhon',25,37));
princes.push(new Princes('Anastasiya',29,42));
console.log(princes);


class Prince{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
let prince = new Prince('Denis',30,38)
let findPrinces = function (arr,boy){
    for( let item of arr){
        if (item.size===boy.size){
            if (item.age>=18 && item.age<30){
                console.log(item.name)
            }
        }
    }
}

findPrinces(princes,prince)
let find= princes.find(value => value.size === prince.size )
console.log(find)