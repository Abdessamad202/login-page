const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
const loginButton = document.querySelectorAll('.container button');

// Add mouseover event
loginButton.forEach((el) => {
    el.addEventListener('mouseover', () => {
      // Add the "change" class to both <i> and <span> elements
      el.querySelector("i").classList.add("change");
      el.querySelector("span").classList.add("change");
    });
    el.addEventListener('mouseout', () => {
      // Remove the "change" class from both <i> and <span> elements
      el.querySelector("i").classList.remove("change");
      el.querySelector("span").classList.remove("change");
    });
})
let icons = document.querySelectorAll(".password-container i");

icons.forEach((el) => {
    const passwordField = el.parentElement.querySelector("input");

    // Check if input has value and toggle the 'show' class
    passwordField.addEventListener("input", () => {
        if (passwordField.value.trim().length > 0) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });

    el.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            el.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordField.type = "password";
            el.classList.replace("fa-eye-slash", "fa-eye");
        }
        passwordField.focus();
    });
});
let hiddenBtn = document.querySelectorAll(".hidden")
hiddenBtn.forEach((el) => {
    el.addEventListener("click",() => {
        document.querySelectorAll("input").forEach((el) => {
            el.value = ""
        })
        document.querySelectorAll(".fa-eye").forEach(el=>el.classList.remove("show"))
    })
})