// Problem 1
//Declare a JS object called carThree with properties( keys and values)

let carThree ={
    wheels : 6,
    owner : "Chase",
    isBroken : false,
    color : "orange"
}
// Use dot notation to add a new property called price with a number value
carThree.price = 56000

// Use bracket notation to add a new property called year with a number value
carThree["year"] = 2023
// Use dot notation to change the value of the isBroken property
carThree.isBroken = true
// Use dot notation to read the value of owner
carThree.owner = 'Bader'
// Create a new variable (not part of the object) called clientIsInterested that has no value.
let clientIsInterested = ''
// Check if car color is blue. If true, set clientIsInterested to true, else false.
clientIsInterested = carThree.color === 'Blue' ? true : false;

// Delete the owner property of carThree.
delete carThree.owner
console.log(carThree)

console.log(clientIsInterested)






// Problem 2

// Declare a JS object called store with 4 properties

let store = {
    profit : 3774,
    manager : 'Will', 
    isOpenNow : true,
    isVeryExpensive : true
}

// Use dot notation to add a new property called location with a string value
store.location = 'Bellevue'
// Use bracket notation to add a new property called storeType with a string value
store['storeType'] = 'Jewelry store'
// Use dot notation to change the value of the isOpenNow property
store.isOpenNow = false
// Use dot notation to read the value of isVeryExpensive 
store.isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
let canShopHere = ''
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
canShopHere = store.isOpenNow = true && store.isVeryExpensive != true ? true : false;
// Delete the profit property of store.
delete store.profit
console.log(store)
console.log(canShopHere)





// Problem 3

// Declare a JS object called home with 4 properties

    let home = {
        rooms : 5,
        bathrooms : 4,
        isForSale : false,
        isInGoodLocation : true
    }
// Use dot notation to add a new property called price with a number value
home.price = 1560400
// Use bracket notation to add a new property called year with a number value
home['year']= 2018
// Use dot notation to change the value of the isForSale property
home.isForSale = true
// Use dot notation to read the value of bathrooms
home.bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
let buyHouse = ''
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
buyHouse = home.isForSale == true && home.isInGoodLocation == true ? true : false;
// Delete the isForSale property of home.
delete home.isForSale
 console.log(home)
 console.log(buyHouse)
 



//  Problem 4, 5

//  Declare a JS object with 4 properties (4 keys and 4 values).
let maritalStatus ={
    name : 'Bader',
    age : 30,
    isSingle : true,
}
//  Use dot notation to add a new property.
maritalStatus.lookingToGetMarried = true
//  Use bracket notation to add a new property.
maritalStatus['working'] = false
//  Use dot notation to change the value of one of the properties.
maritalStatus.name = 'Chase'
//  Use dot notation to read the value of one of the properties.
maritalStatus.age // 30
//  Create a new variable (not part of the object) that has no value.
let newMaritalStatus = ''
//  Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
newMaritalStatus = maritalStatus.isSingle = false && maritalStatus.lookingToGetMarried == true ? true : false;
//  Delete one of the object properties.
delete maritalStatus.age
console.log(maritalStatus)
console.log(newMaritalStatus)




//  Declare a JS object with 4 properties (4 keys and 4 values).
let country = {
    age : 2000,
    capital : 'Rabat',
    isMorocco : true,
    modernCountry : false
}
//  Use dot notation to add a new property.
country.population = 40000000
//  Use bracket notation to add a new property.
country['continent']= 'Africa'
//  Use dot notation to change the value of one of the properties.
country.age = 1920
//  Use dot notation to read the value of one of the properties.
country.capital // Rabat
//  Create a new variable (not part of the object) that has no value.
let notMorocco = ''
//  Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
notMorocco = country.capital != 'Rabat' ? true : false;
//  Delete one of the object properties.
delete country.age
console.log(country)
console.log(notMorocco)





 