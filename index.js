console.log("hello world")


// // var names;
// // names = prompt('please enter your name: ')
// // document.write(`Hello ${names} , would you like to learn some Python today?`);

 // var names;
// // names = prompt('please enter your name: ')

// // console.log(names.toLowerCase() + " lowercase")
// // console.log(names.toUpperCase() + " uppercase")

// // let anothername = names.split(' ')
// //     .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
// //     .join(' ');
// // console.log(anothername);



// let names = "Ayesha khan"
// let Quote = "Failure is not fatal until we surrender trying again is the key of glorious victory."
// Quote = Quote.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase())

// console.log(`${names} once said," ${ Quote}."`);


// // // answer of question 5


// var newName = prompt('enter the name of author : ')
// const newName = newName.split(' ')
//     .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//     .join(' ');
// var quote = prompt(`enter the quote of ${newName} :`)
// quote = quote.replace(/^(\w)(.+)/, (match, p1, p2) => p1.toUpperCase() + p2.toLowerCase())

// console.log(`${newName} once said," ${ quote}."`);

// // answer of question 6
// let str = '\t\n\r this  \n \t   \r  is \r a   \n ball \t  \r \n';
// str = str.replace(/\s+/g, ' ').trim();
// console.log(str);
 // anwer of question no 7 & 8

// console.log(2 * 4);
// console.log(3 + 5);
// console.log(10 - 2);
// console.log(16 / 2);

// // anwer of question no 9
// var favNum = prompt('please enter your favourite number :  ')
// const output = (`your favourite number is : ${favNum}`)
// console.log(output)

// // //answer of question 11

// var myname = ["Ariba", "Abdul", "Qadir"]

// myname.forEach(element => {
//     console.log(element)
// });

// // answer of question no 12

// var myname = ["ariba", "abdul", "qadir"]
// myname.forEach(element => {
//     console.log(`hello ${element}`)
// });

// // answer of question no 13

// var bikes = ["honda", "suzuki", "yamaha", "harley"]

// bikes.forEach(element => {
//     console.log(`I would like to own a ${element} motorcycle`)

// });

// var guestList = [{
//         name: "muntaha",
//         canMakeIt: true,
//         living: true,
//         deceased: false
//     },
//     {
//         name: "sidra",
//         living: false,
//         canMakeIt: true,
//         deceased: true
//     },
//     {
//         name: "khan",
//         living: true,
//         canMakeIt: false,
//         deceased: false
//     },
// ]


// guestList.forEach(element => {
//     if (element.living === true && element.deceased === false && element.canMakeIt === true)
//         console.log(`${element.name} you are invited for the dinner`)
// });

// // // answer no 15

// var comingGuest = [...guestList, {
//     name: "Ayesha",
//     living: true,
//     canMakeIt: true,
//     deceased: false
// }]



// comingGuest.forEach(element => {
//     if (element.living === true && element.deceased === false && element.canMakeIt === true)
//         console.log(`${element.name} you are invited for the dinner`)
// });

// //     // answer no 16

// var newGuestBeg = {
//     name: "Maryam",
//     living: true,
//     canMakeIt: true,
//     deceased: false
// }

// var newGuestEnd = {
//     name: "Musk",
//     living: true,
//     canMakeIt: true,
//     deceased: false
// }

// comingGuest.unshift(newGuestBeg);
// comingGuest.push(newGuestEnd);

// var guestForNewTable = comingGuest
// console.log(guestForNewTable);


// guestForNewTable.forEach(element => {
//     if (element.living === true && element.deceased === false && element.canMakeIt === true)
//         console.log(`${element.name} we found new dinner table, we will be having 2 more guest with us!`)
// });


// // // answer no 17

// guestForNewTable.forEach(element => {
//     if (element.living === true && element.deceased === false && element.canMakeIt === true)
//         console.log(`${element.name} SORRY TABLE WILL NOT ARRIVE ON TIME SO WE HAVE SPACE OF TWO PEOPLE ONLY!`)
// });


// var twoComingGuest = guestForNewTable.filter(function(obj) {
//     return (obj.living !== false && obj.name !== "ariba" && obj.name !== "qadir" && obj.canMakeIt !== false);
// });

// twoComingGuest.forEach(element => {
//     console.log(`${element.name} you are invited for the dinner`)
// });



// let guestNotComing = guestForNewTable;
// for (let i = 0; i < guestForNewTable.length; i++) {
//     for (let j = 0; j < twoComingGuest.length; j++) {
//         if (guestForNewTable[i].name === twoComingGuest[j].name) {
//             guestNotComing.splice(i, 1)
//         }
//     }
// }
// guestNotComing.forEach(element => {
//     console.log(`${element.name}due to change of plan , your dinner is reschudled`)
// });


// // ANSWER NO 18

// var locations = ["Karachi", "Multan", "Islamabad", "Balochistan", "Rawalpindi"]

// console.log("console.log();ed in original order", locations);

// var alphabeticalOrder = [...locations].sort()
// var reverseAlphabeticalOrder = [...alphabeticalOrder].reverse()
// console.log("alphabeticalOrder", alphabeticalOrder)
// console.log("reverseAlphabeticalOrder", reverseAlphabeticalOrder)
// console.log("original locations", locations);


// // Answer No 19

// var nopeoplecoming = twoComingGuest.length
// console.log(nopeoplecoming + " people are coming to dinner");


// // // answer no 20 

// var arry = [];
// var objective = prompt('what do you want add in your array? ')


// do {
//     var element = prompt('enter the element of your object: ')
//     arry.push(element)
//     var query = prompt('do want add more elements ? if yes enter "y" if no enter "n"')
// } while (query === "y" || query === "yes")

// console.log(`your array of ${objective} is : `, arry)

// // answer no 21

// var fName = prompt('enter your first name: ')
// var lastName = prompt('enter your last name: ')
// var age = prompt('enter your age: ')

// var obj = {
//     firstName: fName,
//     lastName: lastName,
//     age: age

// }



// console.log("your obj is ", obj)
// // // answer no 22
// var list = ["19", "cat", 'dog']
// console.log(list[0.2])
// console.log(list[2])

// // answer no 23
// // 1.
// var name = "Yasmeen"
// if (name == "khan")
//     console.log("ok its done")
// else {
//     console.log("sorry")
// }

// // 2.
// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
// }

// console.log(getFee(true));
// // expected output: "$2.00"

// console.log(getFee(false));
// // expected output: "$10.00"
// // // 3.
// function gfg() {


//     let PMarks = 40
//     let result = (PMarks > 39) ?
//         "Pass" : "Fail";

//     console.log(result);
// }
// gfg();

// // //    4.
// function gfg() {

//     let age = 60
//     let result = (age > 59) ? "Senior Citizen" : "Not a Senior Citizen";

//     console.log(result);
// }
// gfg();
// //  //.5
// var AQI = 340;
// if (AQI > 300) {
//     result = "Air Quality is BAD";
// } else if (AQI > 200) {
//     result = "Air Quality is NORMAL";
// } else if (AQI > 100) {
//     result = "Air Quality is GOOD";
// } else {
//     result = "Air Quality is EXCELLENT"
// }
// // //.6

// function getName(name) {
//     return name ? name : "No argument was passed";
// }

// console.log(getName("Mark")); //value of name is "Mark" in this case
// console.log(getName()); //value of name is "undefined" in this case
// // //.7
// let xcv = 93.76;
// let a = (xcv <= 40) ? "The result is not satisfactory..." :
//     (xcv <= 60) ? "The result is in an average..." :
//     (xcv <= 80) ? "The result is Good..." : "The result is Excellent...";
// console.log(a);

// //    //.8
// let xyz = "Steben Joseph";
// xyz ? console.log("Hey " + xyz) : console.log("Hey " + "Guest");

// // // .9
// let age = 15;
// let result2;

// if (age >= 18) {
//     result2 = "You are eligible to vote.";
// } else {
//     result2 = "You are not eligible to vote yet.";
// }

// console.log(result2);
// //10.
// let v = 3;
// let result3 = (v >= 0) ? (v == 0 ? "zero" : "positive") : "negative";
// console.log(`The number is ${result3}.`);


// // // ANSWER NO 24
// // // 1.
// var me = new String("me");
// var you = new String("Me");
// var isEquel = JSON.stringify(me) === JSON.stringify(you);
// console.log(isEquel);

// var me = new String("me");
// var you = new String("me");
// var isEquel = JSON.stringify(me) === JSON.stringify(you);
// console.log(isEquel);

// // // 2.

// function checkCase(ch) {
//     if (!isNaN(ch * 1)) {
//         return 'ch is numeric';
//     } else {
//         if (ch == ch.toUpperCase()) {
//             return 'upper case';
//         }
//         if (ch == ch.toLowerCase()) {
//             return 'lower case';
//         }
//     }
// }
// console.log(checkCase('a'))
// console.log(checkCase('A'))
// console.log(checkCase('1'))

// // //  3.

// if (-1 || 0) console.log('first');

// if (-1 && 0) console.log('second');

// if (null || 1 && 1) console.log('third');


// // // 4. & 5.
// function checkObject(arr) {
//     const result = Array.isArray(arr);
//     if (result) {
//         console.log(`[${arr}] is an array.`);
//     } else {
//         console.log(`${arr} is not an array.`);
//     }
// }
// const array = [1, 2, 3];
// checkObject(array);

// // // 25.

// var alien_color = ['green', 'yellow', 'red']

// if (alien_color.includes('green')) {
//     console.log('the player eraned 5 points')
// }
// if (alien_color.includes('blue')) {
//     console.log('the player eraned 5 points')
// }

// // // 26.

// var alien_color = ['blue', 'yellow', 'red']

// if (alien_color.includes('green')) {
//     console.log('the player eraned 5 points')
// } else {
//     console.log("the player earned 10 points ");
// }

// alien_color = ['green', 'yellow', 'red']

// if (alien_color.includes('green')) {
//     console.log('the player eraned 5 points')
// } else {
//     console.log("the player earned 10 points ");
// }

// // // 27.


// alien_color = ['green', 'yellow', 'red'];

// if (alien_color.includes('green')) {
//     console.log('the player eraned 5 points')
// }
// if (alien_color.includes('yellow')) {
//     console.log("the player earned 10 points ");
// }
// if (alien_color.includes('red')) {
//     console.log("the player earned 15 points ");
// }

// // // 28.

// age = 7

// if (age < 2) {
//     console.log("You're just a wee baby!")
// } else if (age >= 2 && age < 4) {
//     console.log("You're a toddler!")
// } else if (age >= 4 && age < 13) {
//     console.log("You're a kid!");
// } else if (age = 13 && age < 20) {
//     console.log("You're a teenager!")
// } else if (age >= 20 && age < 65) { console.log("You're an adult.") } else if (age >= 65) {
//     console.log("You're an elder. Respect")
// }

// // //  29

// favorite_fruits = ['blueberries', 'salmonberries', 'peaches']

// if (favorite_fruits.includes('bananas')) {
//     console.log("You really like bananas!")
// } else if (favorite_fruits.includes('apples')) { console.log("You really like apples!") } else if (favorite_fruits.includes('blueberries')) { console.log("You really like blueberries!") } else if (favorite_fruits.includes('kiwis')) { console.log("You really like kiwis!") } else if (favorite_fruits.includes('peaches')) { console.log("You really like peaches!") }

// //    //  30.

// usernames = ['eric', 'willie', 'admin', 'erin', 'ever']

// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] == 'admin') {
//         console.log("Hello admin, would you like to see a status report?")
//     } else {
//         console.log("Hello " + usernames[i] + ", thank you for logging in again!")
//     }
// }

// //   //  31.

// usernames = []

// if (usernames.length > 0) {
//     for (let i = 0; i < usernames.length; i++) {
//         if (username[i] == 'admin') {
//             console.log("Hello admin, would you like to see a status report?")
//         } else {
//             console.log("Hello " + username[i] + ", thank you for logging in again!")
//         }
//     }
// } else {
//     console.log("We need to find some users!")
// }

// //    //  32.

// current_users = ['eric', 'willie', 'admin', 'erin', 'Ever']
// new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona']

// const lowercased_newUser = new_users.map(name => name.toLowerCase());

// for (let i = 0; i < current_users.length; i++) {
//     if (current_users[i] === lowercased_newUser[i]) {
//         console.log(lowercased_newUser[i] + ' already exist')
//     } else {
//         console.log("Great," + lowercased_newUser[i] + 'is still available.')
//     }
// }

// // // 33.

// var arry = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// for (let i = 0; i < arry.length; i++) {
//     if (arry[i] === "1") {
//         console.log('1st');
//     } else if (arry[i] === "2") {
//         console.log('2nd');
//     } else if (arry[i] === "3") {
//         console.log('3rd');
//     } else if (arry[i] === "4") {
//         console.log('4th');
//     } else if (arry[i] === "5") {
//         console.log('5th');
//     } else if (arry[i] === "6") {
//         console.log('6th');
//     } else if (arry[i] === "7") {
//         console.log('7th');
//     } else if (arry[i] === "8") {
//         console.log('8th');
//     } else if (arry[i] === "9") {
//         console.log('9th');
//     }
// }


// // // 34.

// favorite_pizzas = ['pepperoni', 'hawaiian', 'veggie']

// for (let i = 0; i < favorite_pizzas.length; i++) {
//     console.log(favorite_pizzas[i])
// }
// for (let i = 0; i < favorite_pizzas.length; i++) {
//     console.log('I really love' + favorite_pizzas[i] + 'pizza!')
// }

// console.log('i really love pizza!')

// // // 35.
// arry = ['dog', 'cat', 'monkey']
// for (let i = 0; i < arry.length; i++) {
//     console.log('A ' + arry[i] + ' would make a great pet')
// }
// console.log('Any of these animals would make a great pet!')

// // // 36.
// function make_shirt(size, message) {
//     console.log("I'm going to make a " + size + " t-shirt.")
//     console.log('It will say, "' + message + '.')
// }
// make_shirt('large', 'I love react!')

// // //37.

// function make_shirt(size = 'large', message = 'I love javascript!') {

//     console.log("I'm going to make a " + size + " t-shirt.")
//     console.log('It will say, "' + message + '"')
// }

// make_shirt()
// make_shirt(size = 'medium')
// make_shirt('small', 'Programmers are loopy.')

// // // 38.
// function describe_city(city, country = 'pakistan') {

//     let newCity = city[0].toUpperCase() + city.slice(1, ).toLowerCase()

//     let newCountry = country[0].toUpperCase() + country.slice(1, ).toLowerCase()
//     msg = newCity + " is in " + newCountry + "."
//     console.log(msg)
// }
// describe_city('karachi')
// describe_city('indor', 'pakistan')
// describe_city('larkana, sindh')

// // // 39.

// function city_country(city, country) {
//     let newCity = city[0].toUpperCase() + city.slice(1, ).toLowerCase()
//     let newCountry = country[0].toUpperCase() + country.slice(1, ).toLowerCase()

//     return (newCity + ", " + newCountry)
// }

// city = city_country('karachi', 'pakistan')
// console.log(city)

// city = city_country('lahore', 'pakistan')
// console.log(city)
// city = city_country('london', 'america')
// console.log(city)

// // // 40.

// function make_album(artist, title) {
//     album_dict = {
//         'artist': artist[0].toUpperCase() + artist.slice(1, ).toLowerCase(),
//         'title': title[0].toUpperCase() + title.slice(1, ).toLowerCase(),
//     }
//     return album_dict
// }

// album = make_album('metallica', 'ride the lightning')
// console.log(album)

// album = make_album('beethoven', 'ninth symphony')
// console.log(album)

// album = make_album('willie nelson', 'red-headed stranger')
// console.log(album)

// // // 41.

// function show_magicians(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         let magician = magicians[i].split(' ')
//             .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//             .join(' ')
//         console.log(magician)
//     }
// }

// magicians = ['harry houdini', 'david blaine', 'teller']
// show_magicians(magicians)

// // // 42.

// function show_magicians(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         let magician = magicians[i].split(' ')
//             .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//             .join(' ')
//         console.log(magician)
//     }
// }


// function make_great(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i]
//     }
// }
// magicians = ['harry ', 'david ', 'teller']
// make_great(magicians)

// show_magicians(magicians)

// // // 43.
// function show_magicians(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         let magician = magicians[i].split(' ')
//             .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//             .join(' ')
//         console.log(magician)
//     }
// }


// function make_great(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i]
//     }
// }
// magicians = ['harry houdini', 'david blaine', 'teller']
// let new_magicians = [...magicians]
// make_great(new_magicians)

// show_magicians(magicians)
// show_magicians(new_magicians)


// // // 44.

// function make_sandwichnew(items) {
//     console.log("I'll make you a great sandwich:")
//     for (let i = 0; i < items.length; i++) {
//         console.log("  ...adding " + items[i] + " to your sandwich.")
//     }
//     console.log("Your sandwich is ready!")
// }

// make_sandwichnew(['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'])
// make_sandwichnew(['turkey', 'apple slices', 'honey mustard'])
// make_sandwichnew(['peanut butter', 'strawberry jam'])

// // 45.

// function make_car(manufacturer, model, options) {

//     car_dict = {
//         'manufacturer': manufacturer[0].toUpperCase() + manufacturer.slice(1, ).toLowerCase(),
//         'model': model[0].toUpperCase() + model.slice(1, ).toLowerCase(),
//     }
//     fina_car_dic = {...car_dict, ...options }

//     return fina_car_dic
// }

// my_outback = make_car('subaru', 'outback', { color: 'blue', tow_packag: true })
// console.log(my_outback)

// my_accord = make_car('honda', 'accord', {
//     year: 2004,
//     color: 'blaclk',
//     headlights: 'popup'
// })
// console.log(my_accord)


