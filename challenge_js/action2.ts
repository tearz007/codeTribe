export {};
console.log("welcome to type script ");

function welcomePerson(person):void{
    console.log(`first name ${person.firstname} lastname ${person.lastname}`);
}

const person= {
    firstname:"Tshepho",
    lastname:"moshabane"
}

welcomePerson(person);