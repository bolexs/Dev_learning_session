// object are collections of key/value pairs or properties.

let person = {
    firstName: 'sam',
    lastName: 'folarin'
};

person.greet = function () {
    console.log('where is esther');
}

person.greet();

function People (peopleOne, peopleTwo) {
    this.peopleOne = peopleOne;
    this.peopleTwo = peopleTwo;


    this.FullList = function () {
        return this.peopleOne + " " + this.peopleTwo;
    }
}

Apersonq = new People('bolu', 'samuel');
//console.log(Apersonq.FullList());

Object.defineProperty(person, 'lastName', {
    value: 'bolu'
} );

console.log(person.lastName)

