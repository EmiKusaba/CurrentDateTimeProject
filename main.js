// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumberToString = () => {
  const num = 64
  const str = num.toString()
  console.log(str)
}
convertNumberToString()

// Write a JavaScript program to convert a string to the number.

const convertStringToNumber = () => {
  const str = "64"
  const num = parseInt(str)
  console.log(num)
}
convertStringToNumber()

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  64 == '64' // true
  64 == 'sixty-four' //false
  // * Null

  // * Undefined
  // * Number
  // * NaN
  // * String

  const showType = (x) => {
    console.log(typeof(x))
  }

  showType(true)
  showType(null)
  showType(undefined)
  showType(NaN)
  showType("gb")
  

  
// Write a JavaScript program that adds 2 numbers together.

const add = (a,b) => {
  let x = a+b
  console.log(x)
}
add(10,10)

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (a,b) => {
if (a && b){
  console.log("Both are true")
}
}
bothTrue("645",false)

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (a,b) => {
  if (a || b){
    console.log("One is true")
  }
  }
oneTrue("645",false)

// Write a JavaScript program that runs when both things are not true.  

const bothFalse = (a,b) => {
  if (!a && !b){
    console.log("Both are false")
  }
  }
  bothFalse(false,false)
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
