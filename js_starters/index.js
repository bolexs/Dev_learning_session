/* 
string, objects, numbers, undefined, boolean, null, symbol, bignt


*/

const name = 'emmanuel'













// DOM(document object model)- it describes the data rep of the html code
// it translate html code to javascript object

//how to select or enter dom elements

//1)drilling into element


//ii)query element: i)getElementById, ii)querySelector






// various things we can do with the DOM
//i) adding new elements
//  const newNew = document.createElement('p');

//  newNew.textContent = 'this is for confirmation'

//  let headerOne = document.getElementById('second-header')

//  headerOne.append(newNew)

//document.body.insertBefore(newNew, headerOne)

// console.log(headerTwo);


//ii) deleting elements 
//console.log(headerOne.remove());


//iii)moving existing elements to another location
//movingHeaderOne = headerOne.parentElement.append(headerOne);

//console.log(movingHeaderOne);
//arrays
let food = ['rice', 'spag', 'bean'];

//objects

let newObjects = {number:20, randomString:'empty', food};


 let shoppingList = ['milk', 'water', 'spag', 'red wine', 'butter', 'egg', 'soap', 'toothpaste']


 
for(i=0; i<shoppingList.length; i++) {
    let a = shoppingList[i]
    result = `${a}`
    if(result === 'milk' || result ==='water' || result === 'soap') {
        continue
    } else {
        console.log(result)
    }
}