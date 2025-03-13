let inputType = document.querySelector("#inputType");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
    inputType.type = inputType.type === "password" ? "text" : "password";
    button.textContent = inputType.type === "password" ? "Show Password" : "Hide Password";
});

