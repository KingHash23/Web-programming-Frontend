let number =5;
if(number>0){
    console.log("The number is positive");
}


let isRaining = true;
if(isRaining){
    console.log("It's raining outside don't forget your umbrella");
}


let age = 18;
if(age>=18){
    console.log("You are eligible to vote");
}


let num = 7;
if(num%2==0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

let score = 75;
if(score>=80){
    console.log(" You got an A");
}else if(score>=60){
        console.log("You got a B");}
else{
    console.log("You need to improve ");
}
// Exercise 1: Checking Temperature
let temp = 25;
if(temp>30){
    console.log("it's too Hot");
}
else if (temp<=30 || temp>=20){
    console.log("it's moderate");
}
else{
    console.log("it's cold");
}

// Exercise2 Admission Eligibility
let scores = 55;
if(scores>=70){
    console.log("Eligible for Admission");
}else if(scores>=50){
    console.log("Admission on Probation");
}else{
    console.log("Not Eligible for Admission");
}

// Exercise 3 Access to Clean Water
let waterAvailable =300;
if(waterAvailable>500){
    console.log("Enough water");
}
else if(waterAvailable>=200 || waterAvailable<=500){
    console.log("Limited water available");
}
else if(waterAvailable<200){
    console.log("Water Storage")
}
else{
    console.log("no water available");
}


// Nested loops
let num1 = -3;
if (num1>=0){
    if(num1===0){
        console.log("The number is Zero");
    }else{
        console.log("The number is positive");
    }
}else{
    console.log("The numer is negative");
}    


//Exercise 4
let expired = false;
let quality= 7;
if(!expired){
    if(quality>8){
        console.log("Good quality");
    }else if(quality>5 || quality<8){
        console.log("Average quality");
    }else if(quality<=5 ){
        console.log("Poor quality");
    }
else{
    console.log("Don't use. ");
}
}