1 
//создайте пустой обьект 3мя способами
const person = {};
const person1 = new Object();
const person2 = Object.create()

2
//создайте обьект с вашими персональными данными 
//пример: 
let obj1 = {
    name: 'Alex',
    age: 24
}

let person3 = {
    name: 'Ugur',
    age: 10
}

3
//чем является name в обьекте ниже?
let obj2 = {
    name: 'Alex',
    age: 24
}
//Alex

4
//чем является 'Alex' в обьекте ниже?
let obj3 = {
    name: 'Alex',
    age: 24
}
//name

5
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/

6
//выведите в консоли значение name из обьекта
let obj4 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj4.name);
7
//выведите в консоли значение age из обьекта
let obj5 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj4.age);

8
//выведите в консоли значение isMarried из обьекта
let obj6 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj4.isMarried);

9
//выведите в консоли имя первого ребенка из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.children[0]

10
//выведите в консоли имена всех детей с помощью for из обьекта
let obj7 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for (let x of obj.children) {
    console.log(x)
}

11
//выведите в консоли значение itMaster из обьекта
let obj8 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj8.awards.itMaster);

12
//выведите в консоли все свойства с помощью for...in из обьекта
let obj9 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let x in obj9){
    console.log(x);
}

13
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj10 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let x in obj10){
    console.log(obj10[x]);
}

14
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj11 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj11.childs[1] = 'Linda'

15
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj12 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj12.job = 'menedjer'

16
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj13 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj13.awards[0]

17
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj14 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj14['name']


18
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj15 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj15.job
obj15.hasJob = 'false'

19
//удалите name из обьекта
let obj16 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj16.name

20
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj17 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj17['job']
obj17.hasJob = 'false'