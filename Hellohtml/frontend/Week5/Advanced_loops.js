let i = 1;
do {
console.log(i);
i++;
} while (i <= 5);

// Exercise 4: User Input Validation

// if (typeof window !== "undefined") {
//     let input;
//     do {
//         input = prompt("Enter a number between 1 and 10:");
//     } while (isNaN(input) || input < 1 || input > 10);
//     console.log("Valid number entered:", input);
// } else {
//     console.log("prompt is not defined in Node.js. Use readline module instead.");
// }


// let number;

// do {
//     number = parseInt(prompt("Enter a number between 1 and 10: "), 10);
// } while (isNaN(number) || number < 1 || number > 10);

// console.log("Valid number entered:", number);

//  Breaking and Continuing in Loops (ADVANCE)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
    break; // Stops the loop when i equals 5
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
    break; // Stops the loop when i equals 5
    }
    console.log(i);
}

// Skipping an iteration using continue:
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
    continue; // Skips the iteration when i equals 5
    }
    console.log(i);
}

// Exercise 5 Breaking out of a Loop
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

//Exercise 6 Skip Even Numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips the iteration when i is even
    }
    console.log(i);
}



// nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
    console.log(`Row ${i}, Column ${j}`);
    }
}
 // Exercise 7 right-Angled Triangle
 for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
    line += "* ";
    }
    console.log(line);
}