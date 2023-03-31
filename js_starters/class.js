//classes are blueprints of objects \

findUs = {
    name: "our name",
    number: 50,
    arrays: ['we', 'are', 'them'],
    objectt: {
        nesting:"nested"
    }
}

// Declaration 
class FindThem {
    constructor(Us, Them){
        this.Them = Them;
        this.Us = Us
    }
}


// class function {
//     constructor(){

//     function name(params) {
        
//     }
    
//     function name(params) {
        
//     }
//     function name(params) {
        
//     }
//     }
// }

function Person(name){
    this.name = name
}


Person.prototype.getName = function () {
    return this.name
}

let sammy = new Person("name gotten")

let esther = new Person("its overwhelming")

console.log(sammy.getName())
console.log(esther.getName())


// class Person2 {
//     constructor(name) {
//         this.name = name; 
//     }
//     get names {
//         this.getName()
//     }
//     getName() {
//         return this.name
//     }
// }


// folarin = new Person2('its easier')
// folarin2 = folarin.getName()
// console.log(folarin2)




class Them {
    constructor(we, us, her) {
        this.we = we;
        this.us = us;
        this.her = her;
    }
    weAreAllPresent() {
        console.log(`this is all ${this.we}, ${this.us}, ${this.her}`)
    }
}

class Their extends Them {
        All() {
            super.weAreAllPresent()
            console.log(`${this.her} and ${this.we} and ${this.us} are all here`)
        }
}


let ttt = new Their('bobby', 'samuel', 'esther')

ttt.All()