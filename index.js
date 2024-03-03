let option = {
  alphabets : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols : ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
}
let characters = [];
characters = characters.concat(option.alphabets);

let generateBtn = document.querySelector("#generate-btn");
let Passwords = document.querySelectorAll(".generated-passwords");
let numbersSwitch = document.querySelector("#numbers-switch");
let symbolsSwitch = document.querySelector("#symbols-switch");

toggleJudge(numbersSwitch);
toggleJudge(symbolsSwitch);

generateBtn.addEventListener("click", function() {
  Passwords.forEach((item) => item.textContent = generatePassword());
})


function toggleJudge(switchToggle) {
  switchToggle.addEventListener("change", function() {
  characters = [];
  characters = characters.concat(option.alphabets);
  if (numbersSwitch.checked === true) {
    characters = characters.concat(option[numbersSwitch.name]);
  }
  if (symbolsSwitch.checked === true) {
    characters = characters.concat(option[symbolsSwitch.name]);
  }
})
}

function generatePassword() {
  let password = "";
  for (let i = 0; i < 15; i ++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}
