/* 1) numbers - 1,2,3
   2) strings - '', ""
   3) booleans - true/false
   4) objects
   5) bignt
   6) symbols
   7) null
   8) undefined NaN(Not a Number)
   */


   // var, let, const and so on
  let name = 'my name'

   const Mary = 'you'

var us = 'name'
//can you guys hear me and see my screen?
   
   //console.log(Abbey);
   
      //arrays
      const Names = ['Abbey', 'Onyinye', 'Samuel', 'Esther', 'Folarin']
   
   
    //property and methods!!
   
      //object
      const job = {
         title: 'developer',
         location: 234,
         applicationList: Names,
         age: 25,
         myJob: {
            you: 'abbey made me try this',
            
         }
      };

   
      //let age = 200
   
      let adultYears = job.age - 182
   
      //camelCase 
   
      //function 
   
      function calculateMyAge (myAge = 0) {
        sumIt = myAge * 2
   
        return sumIt
    }

      const toFindArray = {
         getListItem (array, arrayIndex) {
            let arrayElement = array[arrayIndex];
            return arrayElement
         }
      }
   

   

      //DOM( Document object model)
   
   /*different ways to manipulate dom
   1) Drilling into it
   2) Query element: i) getElementById, getByQuerySelector 
   */
   
   
   //Drilling into element using the dot notation(.)
   
   // console.dir(document);
   
   // let firstElement = document.body.children[1]
   
   // console.log(firstElement);
   
   
   // //getElementById
   
    //let gettingById = document.getElementById('first-header');
   
   
   // console.log(gettingById.textContent);
    //adding new element(createElement)
    // getting element with textContent, it can also be used to change text content of the html file
   //console.log(gettingById.textContent = 'hello my friend');
   storageId = document.getElementById('storage')
   let insertTo = document.createElement('p')
   let insertTwo = document.createElement('p')

   //let firstParagraph = document.getElementById('storage')
  insertTo.innerHTML = '<strong>creation</strong>'
   storageId.appendChild(insertTo)
   //firstParagraph.appendChild(insertTo)
insertTwo.innerHTML = 'it will be moved '
storageId.appendChild(insertTwo)


   
   //console.log(New)
   // //innerHTML
   //console.log(gettingById.innerHTML = '<strong> whats up <strong>');
   
   // //parentElement
   // console.log(gettingById.parentElement);
   
   // //QuerySelector
    //gettingByQuery = document.querySelector('p');
   
   //console.log(gettingByQuery.textContent);
   
   //Deleting element
   
   //insertTo.remove()
   //console.log(gettingById.remove(gettingById))
   
   
   // moving existing elements around
   
   let secondJavaScript = document.getElementById('second-header');
   
   secondJavaScript.append(insertTwo);
   //console.dir(Event)
   
   // let firstParagraph = document.getElementById('text');
   // console.log(gettingById.append(firstParagraph));
   
   
   // control structure
   
   //booleans and comparison and logical operators
   
   
   /*types of operators: logical and comparison operators 
   for comparison: it compares the type and value and return a boolean
   types of comparison operators: equality(==, ===) use can for equality operator: 5 ==5(yields true), 5 === '5'(yields false),
   greater than(>), lesser than(<), greater or equal to (>=), less or equal to (<=) use cases: 5>2(true), 20<3(false, 3<20(true)),
   inequality or inverse(!,!=,!==): return the NOT true operator when an operation might be consider true use cases: !(3=='3'(false))
   20 !== '30'(true), 40 != 41(true).
   logical operators combine different boolean or comparison operations together: there are two types of logical operators
   &&(AND): the return TRUE when the result from the two or more operations done is true and the OR(||): the returns TRUE when one of the operation returns true
   use case: 3===3 && 40 !== 41(true), 3===3 || 40 !== 40(true)
   
   */
   
   let arrFilter = [-2,-3,0,-5,-10,20,30,40,50,1,2,3]
   
   function filtering (arr) {
      for(i=0;i<arr.length; i++) {
         sumUp = arr[i] 
         if(sumUp <=0) {
            continue
         }  else {
            console.log(sumUp)
   
         }
      }
   }
   
   filtering(arrFilter)