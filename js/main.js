// let users = [
//     {
//         id:1,
//         name:"Sarvar",
//         surname:"Azamov",
//         age:18,
//         study:null,
//         achievements:["History olimpic 1 st degree"]
//     },
//     {
//         id:2,
//         name:"Islomxon",
//         surname:"Dexqonov",
//         age:16,
//         study:undefined,
//         achievements:["weight 80kg", "Boxer"]
//     },
// ]

// function misol1 (value){
//     let yigindi = 0
//     const res = users.map(item =>  item[value] )
//    res.map(value => {yigindi += value})
//     return yigindi
// }
// console.log(misol1("age"));


// let son = [11, 22, 33, 44, 55, 66, 77]

// function misol2 (value){
//     let summa = 0
//     son.map((Item, index ) => index % 2 === 0 ? summa += Item : "")
//     return summa
// }
// console.log(misol2())




//UY ISHI
// //1-misol
// let sonlar = Array(5).fill(0).map(()=> +prompt("Ixtiyoriy son kiriting"))
// let max = sonlar[0]
// sonlar.map((item) => {
//    if(item > max){
//     max = item
//    }
// })
// console.log("Eng katta son:", max)


//2-misol
// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6]
// const ikkalasi = [...arr1, ...arr2]
// let yigindi = 0 
// ikkalasi.forEach((Item) => { yigindi += Number(Item)})
// console.log(yigindi)


//3-misol
// let sonlar = [12, 24, 3, 4, 2, 6, 7, 8]
// let engKichik = Math.min(...sonlar);
// let index = sonlar.indexOf(engKichik);

// console.log("Eng kichik son:", engKichik); 
// console.log("Index:", index); 


//5-misol
// let arr1 = [5, 4, 3, 6, 3, 7, 1]
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32]
// let ikkalasi = arr1.concat(arr2)
// ikkalasi.sort((a,b) => a - b)
// console.log(ikkalasi)


//6-misol
// let carsArr = [
// {
//     name:"Lacetti",
//     price: 9000
// },
// {
//     name:"Damas",
//     price: 7000
// },
// {
//     name:"Cobalt",
//     price: 12500
// },
// {
//     name:"Gentra",
//     price: 14000
// },
// {
//     name:"Onix",
//     price: 15000
// }
// ]

// let sortedCars = carsArr.map(car => car);

// sortedCars.sort(function (a, b) {
//     return a.price - b.price;
// });

// console.log(sortedCars);



//7-misol
// let sozlar = ["Salom", "Rahmat"]
// sozlar.splice(1, 0, "Js", "juda qiyin ekan")
// console.log(sozlar)


//8-misol
// let soz = prompt("Soz yoki son kiriting");

// function sozTeskari(soz) {
//     let result = soz.split("").reverse().join('');
//     return result; 
// }

// let natija = sozTeskari(soz); 
// console.log(natija); 



//Task 2

//1-misol
// const workers = [
//     { firstName: "Ali", lastName: "Valiyev", age: 25 },
//     { firstName: "Malika", lastName: "Karimova", age: 30 },
//     { firstName: "Sardor", lastName: "Qodirov", age: 22 }
//   ];
//   const newWorkers = workers.map(workers => `${workers.firstName} ${workers.lastName} (${workers.age} yosh)`)
// console.log(newWorkers)
  

//2-misol
// const users = [
//     { firstName: "Ali", lastName: "Valiyev" },
//     { firstName: "Laylo", lastName: "Oripova" }
//   ];
//   const newUsers = users.map(users => `${users.firstName} ${users.lastName}`)
// console.log(newUsers)

  
//3-misol
// let son = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function misol2(array) {
//     let summa = 0;
//     array.map((item, index) => {
//         if (index % 2 === 0) {
//             summa += item;
//         }
//     });
//     return summa;
// }

// console.log(misol2(son));  

//4-misol
// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const toqIndeksdagilar = [];

// numbers2.forEach((num, index) => {
//   if (index % 2 !== 0) {
//     toqIndeksdagilar.push(num);  
//   }
// });

// console.log(toqIndeksdagilar);



//5-misol
// const users = [
//     {id:1 , name: "Layloxon"},
//     {id:2 , name: "Ali"}
// ]
// const usersId = users.map(users => `${users.id}`)
// console.log(usersId)


//6-misol
// const numbers3 = [2, 4, 6, 8];

// const sonlarKvadrati = numbers3.map(num => num * num);

// console.log(sonlarKvadrati);


//7-misol
// const sana = ["2025.05.05", "2024.12.31"];

// const kerakliSana = sana.map(item => {
//   const [yil, oy, kun] = item.split('.');
//   return [kun, oy, yil].join('.');
// });

// console.log(kerakliSana);



//100 Ballga
//Nazariy qism:
//Filter = Berilgan shartni bajargan elementlarni yangi array qilib qaytaradi.
//Find = Shartni birinchi bajargan elementni o‘zini qaytaradi.
//FindIndex = Shartni birinchi bajargan elementning indexini qaytaradi.
//Sort = Array elementlarini tartiblaydi (son, alfavit). Number uchun (a - b), matn uchun localeCompare ishlatiladi.
//Some = Kamida 1 ta element shartni bajarsa true qaytaradi. (true/false)
//Every = Barcha elementlar shartni bajarsa true qaytaradi. (true/false)


//Amaliyot
//Filter
//1-misol-juft sonlarni filterlash kerak
// let son = [1, 22, 54, 46, 78, 57]
// let sonlarniFilterlash = son.filter(i => i % 2 === 0)
// console.log(sonlarniFilterlash)

//2-misol-barcha 2 xonali sonlarni chiqarish kerak
// let son = [1, 22, 54, 46, 7, 5, 4, 8, 45, 65]
// let natija = son.filter(i => i >= 10 && i <= 99)
// console.log(natija)

//3-misol-barcha juft sonlarni toq qilish kerak ya'ni hamma son toq bolishi kerak
// let son = [12, 55, 66, 44, 78, 54, 36, 15, 24];
// let natija = son.filter(i => i % 2 === 0).map(i => i + 1);
// console.log(natija);


//Find
//1-misol-sonlar orasida birinchi 3 xonali sonni topish kerak
// let son = [12, 55, 665, 44, 787, 54, 365, 154, 24];
// let natija = son.find(i => i >= 100 && i <= 999)
// console.log(natija)

//2-misol-sonlar orasida birinchi qoldiqsiz 4 ga bo'linadigan sonni topish kerak
// let son = [57, 55, 665, 44, 787, 54, 444, 154, 32];
// let natija = son.find(i => i % 4 === 0)
// console.log(natija)

//3-misol-birinchi  4 xonali qoldiqsiz 6 ga bo'linadigan sonni topish kerak
// let son = [57, 55, 6655, 4445, 78721, 54, 6666, 154, 32];
// let natija = son.find(i => i >= 1000 && i <= 9999 && i % 6 === 0)
// console.log(natija)


//Find Index
//1-misol-sonlar orasida birinchi 3 xonali sonni indexini topish kerak
// let son = [12, 55, 665, 44, 787, 54, 365, 154, 24];
// let natija = son.findIndex(i => i >= 100 && i <= 999);
// console.log(natija);


//2-misol-sonlar orasida birinchi qoldiqsiz 4 ga bo'linadigan sonni indexini topish kerak
// let son = [57, 55, 665, 44, 787, 54, 444, 154, 32];
// let natija = son.findIndex(i => i % 4 === 0)
// console.log(natija)

//3-misol-birinchi  4 xonali qoldiqsiz 6 ga bo'linadigan sonni indexini topish kerak
// let son = [57, 55, 6655, 4445, 78721, 54, 6666, 154, 32];
// let natija = son.findIndex(i => i >= 1000 && i <= 9999 && i % 6 === 0)
// console.log(natija)

//Sort
//1-misol-berilgan ma'lumotlarni yosh bo'yicha tartiblash kerak
// let malumotlar =[
//     {
//         ism:"Sho'lponoy",
//         yosh: 50
//     },
// {
//     ism:"Dilnoza",
//     yosh: 17
// },
// {
//     ism:"Nigora",
//     yosh: 18
// },
// {
//     ism:"Layloxon",
//     yosh: 15
// }
// ]
//  let taryiblanganMalumotlar = malumotlar.sort((a , b) => a.yosh - b.yosh)
// console.log(taryiblanganMalumotlar)

//2-misol-berilgan ma'lumotlarni ism bo'yicha tartiblash kerak
// let malumotlar =[
//     {
//         ism:"Sho'lponoy",
//         yosh: 50
//     },
// {
//     ism:"Dilnoza",
//     yosh: 17
// },
// {
//     ism:"Nigora",
//     yosh: 18
// },
// {
//     ism:"Layloxon",
//     yosh: 15
// }
// ]
// let taryiblanganMalumotlar = malumotlar.sort((a , b) => a.ism.localeCompare (b.ism));
// console.log(taryiblanganMalumotlar);


//3-misol juft sonlarni tartiblash kerak
// let sonlar = [12, 55, 665, 44, 787, 54, 365, 154, 24];
// let natija = sonlar.filter(i => i % 2 === 0).sort((a, b) => a - b);
// console.log(natija);


//Some
//1-misol-toq sonni bor yoki yo'qligini aniqlash
// let son = [12, 24, 55, 56]
// let natija = son.some(i => i % 2 !== 0);
// console.log(natija)


//2-misol-4 xonali son bor yoki yo'qligijin aniqlash
// let son = [12, 24, 55, 56, 544]
// let natija = son.some(i => i >= 1000 && i <=9999 )
// console.log(natija)

//3-misol- 3 xonali 3 ga qoldiqsiz bo'linadigan son bor yoki yo'qligini aniqlash
// let son = [12, 24, 55, 56, 544, 333]
// let natija = son.some(i => i >= 100 && i <=999 && i % 3 === 0 )
// console.log(natija)


//Every
//1-misol-hamma sonlar 2 xonali ekanligini tekshirish
// let son = [12, 24, 55, 56, 54, 33]
// let natija = son.every(i => i >= 10 && i <=99 )
// console.log(natija)


//2-misol-hamma sonlar 2 ga qoldiqsiz bo'linishini tekshirish kerak
// let son = [12, 24, 55, 56, 54, 33]
// let natija = son.every(i => i % 2 === 0)
// console.log(natija)

//3-misol-hamma sonlar 3 xonali va toq bo'lishini tekshirish
// let son = [125, 245, 555, 565, 545, 335]
// let natija = son.every(i => i >=100 && i <= 999  && i % 2 != 0 )
// console.log(natija)