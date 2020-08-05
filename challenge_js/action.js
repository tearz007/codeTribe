
const squre=function(x){
    return x*x;
}

//console.log(squre(2));

const hummus = function (factor) {
    
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};


const mini = function (num1,num2) {

    console.log( "minimul velue is "+Math.min(num1,num2));
}

mini(4,6);

const countBs = function (word) {
    
    var count=0;
    var arrayS=word.length-1;
    for (let index = 0; index < arrayS; index++) 
    {
     
        if (word[index]=="B"){
         count++;
        }  
    }
        
    return count;
}
//alert("we have " + countBs("BruBBusBb") +" capital B");

    const countChar = function (word,char) {

    var count = 0;
    var arrayS = word.length - 1;
    for (let index = 0; index < arrayS; index++) {

        if (word[index] == char) {
            count++;
        }
    }

    return count;
}
    //alert("we have " + countChar("BruBBusBb",'u') + " letters");
        //Objects ....
    let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
  
];
    //console.log(journal[0]);
    journal.forEach((day)=> { 
        console.log(day);
    });
    journal.forEach((day) => {
        console.log(day.events);
    });
    journal.forEach((day) => {
        console.log(day.events[2]);
    });


const range = function(start,end){
    let sumarry = [];
    let sum = 0;
    for (let i = start; i<= end;i++) {
         //sum = sum + sumarry.push(i);
        sumarry.push(i);
    }
    return sumarry;
}

arry = range(1, 10);

const sum = function (x){
    let sum=0;
    for (let i = 0; i < x.length; i++) {
         sum = sum + x[i];      
    }
    console.log("sum is " + sum);
}
sum(arry);


    class Triangle {
        constructor(l,b) {
            this.length=l;
            this.breath=b;
        }
        getArea(){
        let area=1/2*this.length*this.breath;
        return area;
        }
        
    }
    
    let triangle1= new Triangle(5,8);
    console.log(`The area is ${triangle1.getArea()}`);

    // js Challenge 1
    const bml = function(){
 // let weight=Number(prompt("enter weight"));
  //  let height=Number(prompt("enter height"));

    let bodyMass=weight/height;
    document.getElementById('res').value="bodyMass";
    var weight=document.getElementById('weight').value;
    var height = document.getElementById('height').value;
   // alert("weight is:" + weight);
    document.getElementById('res').value = weight/height;
}

    // js Challenge 2

    let Ben=5;
    let Lizzy=12;
    let numDays=5;
    for (let i = 0; i < numDays; i++) {

        if(Ben >0 && Lizzy>0){
            console.log( `Day ${i+1}: Ben has ${Ben} sweets.Lizzy has ${Lizzy} sweets.`);
            Ben=Ben-1;
            Lizzy=Lizzy-3;
        }else{
            if (Ben > 0 && Lizzy == 0) {
                console.log(`Day ${i + 1}: Ben has ${Ben} sweets.Lizzy eats all her sweets.`);
            }
            if (Ben == 0 && Lizzy > 0) {
                console.log(`Day ${i + 1}: Ben eats all his sweets.Lizzy has ${Lizzy} sweets.`);
            }
        }
        
    }

    
    