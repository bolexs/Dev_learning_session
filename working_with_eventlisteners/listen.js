let sumUpButton = document.querySelector('#for-suming');

let outputDisplay = document.querySelector('.output')

let no = 0
function forUser () {
    let userInput = document.getElementById('user-number');
    let userInputValue = userInput.value

    for (i=0; i<=userInputValue; i++) {
            no +=i;


    }
    outputDisplay.textContent = no
    outputDisplay.style.display = 'block'
}


sumUpButton.addEventListener('click', forUser)



    
 let count = 0

    

let highlighterButton = document.querySelector('.highlight')


highlighterButton.addEventListener('click', function () {
    let allHighLighted = document.querySelectorAll('a')
    highlighterButton.onclick = function() {
         count++
    }

    for(const text of allHighLighted){
        if(count%2 == 1) {
            text.classList.add('highlight')
        } else {
            text.classList.remove('highlight')
        }
        

    }

})


let displayUserButton = document.querySelector('.display-bttn');

let outputUserData = document.getElementById('output-user-data')


const displayData = {
    name: 'bolu',
    age: 90,
    isUser: true
}


displayUserButton.addEventListener('click', function () {
   outputUserData.innerHTML = ''



    for (const data in displayData) {
        let newDocument = document.createElement('li')
        let outputText =  ` ${data} : ${displayData[data]}`
        newDocument.textContent = outputText
        outputUserData.append(newDocument)
        

         

    }
})
// l
// function toSum () {
//     }
//     alert(no)
// }

// sum.addEventListener('click', toSum)


let btnToRollDice = document.querySelector('#rolling-btn');

function rollDice () {
    return Math.floor(Math.random() * 6) + 1
}

function  getNoOfDiceRolls() {
    const targetNoInputElement = document.getElementById('user-target-number');
    const diceRollsList = document.getElementById('dice-rolls');

    const enteredNo = targetNoInputElement.value;
    diceRollsList.innerHTML = '';

    let hasRolledTargetNo = false;
    let noOfRolls = 0;

    while(!hasRolledTargetNo) {
        const rolledNo = rollDice();
        noOfRolls++;
        const newRollList = document.createElement('li');
        let outputText = `roll is ${noOfRolls}:  ${rolledNo}`;
        newRollList.textContent = outputText;
        diceRollsList.append(newRollList);
        hasRolledTargetNo = rolledNo == enteredNo;
    }

    const outputTotalRolls = document.getElementById('output-total-rolls');
    const targetNo = document.getElementById('output-target-number');

    outputTotalRolls.textContent = noOfRolls;
    targetNo.textContent = enteredNo;

}

btnToRollDice.addEventListener('click', getNoOfDiceRolls)





/*types of loops
i) for - you define the number of times a code should be executed
ii) for of - it is used to loop through all the elements of an array
iii) for in - 
iv) while - you define a certain condition for which the loop will be executed if that condition is met

*/

// let i=0
// for ( i<=10; i++) {
//     console.log(i);
// }

// for of

// const Users = ['samuel', 'esther', 'folarin', 'emmanuel']

// for(const User of Users) {
//     console.log(User)
// }

//for in

// const personalInfo = {
//     name: 'samuel',
//     age: '30',
//     isLoggedIn: true
// }


// for (const bolu in personalInfo) {
//     console.log(personalInfo[bolu]);
// }

// let arr = [];

// for (let i=9; i>-2; i-=2) {
//     arr.push(i);
// }

// console.log(arr)


// let inputs = [1,2,4,5,9,6,8,10]


// function toGuess () {
//     let userInput = parseInt(prompt('please enter a number'))
//         for(i=0; i<inputs.length;i++){
//             let a = inputs[i]

//         if(userInput=== a){
//             let correct = 'you are on the right path'
//             console.log(correct)
//         } else{
//             let wrong = 'try again'
//             console.log(wrong)
//         }
//      }
// }


// console.log(toGuess()