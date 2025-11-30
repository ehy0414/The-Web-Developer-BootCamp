// console.log("Hello From Js File");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!");
//     console.l// } else {
//     console.log("YOUR NUMBER IS MORE THAN 0.5!!");
// }
// console.log("AFTER CONDITIONAL");

// const dayOfWeek = 'Monday';

const password = prompt("please enter a password");
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!");
} else {
    console.log("PASSWORD TOO SHORT!");
}

if (password.indexOf(' ') === -1) {
    console.log("Good job! No SPACE");
} else {
    console.log("Password have SPACE!");
}