let option = {
  alphabets : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols : ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
}
let characters;
let generateBtn = document.querySelector("#generate-btn");
let passwords = document.querySelectorAll(".password-text");
let numbersSwitch = document.querySelector("#numbers-switch");
let symbolsSwitch = document.querySelector("#symbols-switch");

initialPassword();
toggleJudge(numbersSwitch);
toggleJudge(symbolsSwitch);

generateBtn.addEventListener("click", function() {
  passwords.forEach((item) => item.textContent = generatePassword());
})

// click to copy
passwords.forEach(function(password) {
  password.addEventListener("click", function() {
    const textToCopy = password.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        alert("Copied: " + textToCopy);
      }).catch(function(error) {
        alert("Sorry, failed to copy.");
        console.error("Failed to copy:", error);
      });
  });
});

function initialPassword() {
  characters = [];
  characters = characters.concat(option.alphabets);
}

//whether to include numbers and symbols
function toggleJudge(switchToggle) {
  switchToggle.addEventListener("change", function() {
  initialPassword();
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
  let passwordLength = getPasswordLength();
  for (let i = 0; i < passwordLength; i ++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

function getPasswordLength() {
  let passwordLength = document.getElementById("password-length").value;
  return passwordLength;
}