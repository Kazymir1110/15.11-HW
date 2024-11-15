// const gap1 = "6";
// const gap2 = "2";
// if (gap1 && gap2){
// console.log("Обидва поля заповнені");
// } else{
//     console.log("Не всі поля заповнені");
// }

// let sum;
// const num1 = 5;
// const num2 = 1;
// sum = num1 + num2;
// if (sum > 10) {
//     console.log(`Sum ${sum} more then 10`);
// } else if (sum <= 10){
//      console.log(`Sum ${sum} less or is 10`);
// }


// const text1 = "JavaScript";
// if(text1.includes("JavaScript")){
//     console.log("Текст містить слово JavaScript")
// } else{
//     console.log("Текст не містить слово JavaScript")
// }


// const number1 = 12;
// if(number1 > 10 && number1 < 20){
//     console.log("Число входить в діапазон від 10 до 20");
// } else{
//     console.log("Число не входить в діапазон від 10 до 20");
// }

const userRequest = "Please enter the text";
const email = "example@email.com";
const password = "Please enter the text";
if(userRequest.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6){
    console.log("All right!")
} else{
    console.log("Something is wrong, try again and read laws")
}


