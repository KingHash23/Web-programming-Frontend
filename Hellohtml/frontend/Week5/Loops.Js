//for loop
//printing numbers from 1 to 5:
for(let i = 1; i<=5; i++){
    console.log(i);
}
// printing even numbers between 1 and 10:
for(let i = 1 ; i<=10; i++){
    if(i%2==0){
        console.log(i);}
}
 

//Execise 1 
 for( let i =1; i<=10; i++){
    console.log(i);
 }


  //Exercise 2  
for (let i = 1; i <= 12; i++) {
    console.log(`${i} x 5 = ${5 * i}`);
}

// while loops
// printing numbers from 1 to 5:
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
 
// let Answer;
// while (Answer !== "yes") {
// Answer = prompt("Do you want to continue? (yes/no)");
// }

// Exercise 3 
//Write a JavaScript program that uses a while loop to find the sum of numbers from 1 to 100.let sum = 0;
let num = 1;
let sum = 0;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);

