let passwordLength = prompt("How long do you want your password to be?")
let capsInput = confirm("Do you want to include captail letters?")
let charInput = confirm("Do you want to include small letters? ")
let numInput = confirm("Do you want to include numbers? ")
let symInput =confirm("Do you want to include symbols ?")

  
let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = "!@#$%^&*()_+";

let password = "";

for (let i = 0; i < passwordLength; i++) {
    if (capsInput) {  
        index = Math.floor(Math.random() * caps.length)
        password += caps[index];
    }

    if (charInput) {
        index = Math.floor(Math.random() * char.length)
        password += char[index];
    }
    if (numInput) {
        index = Math.floor(Math.random() * num.length)
        password += num[index];
    }
    if (symInput) {
        index = Math.floor(Math.random() * sym.length)
        password += sym[index];
    }
}

console.log(password.slice(0, passwordLength))
