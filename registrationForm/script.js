let inputType = document.querySelector("#inputType");
let button = document.querySelector("#button");

button.addEventListener("mousedown", () => {
    inputType.type = "text";
    button.textContent = "Hide Password";
});

button.addEventListener("mouseup", () => {
    inputType.type = "password";
    button.textContent = "Show Password";
});

button.addEventListener("mouseleave", () => {
    inputType.type = "password";
    button.textContent = "Show Password";
})

let captcha = document.querySelector("#captcha")
let refreshCaptcha = document.querySelector("#refreshCaptcha")
let submitBtn = document.querySelector("#submitBtn")
let captchaInput = document.querySelector("#captchaInput")
function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let captchaText = ""
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    captcha.textContent = captchaText
}
refreshCaptcha.addEventListener("click", generateCaptcha)
submitBtn.addEventListener("click", (e) => {
    if (captchaInput.value !== captcha.textContent) {
        e.preventDefault()
        alert("Captcha incorrect, please try again")
    }
})
generateCaptcha()