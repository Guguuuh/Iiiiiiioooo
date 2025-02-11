// Script do Logo Dinâmico
const logoElement = document.getElementById('dynamic-number');
let currentNumber = 1702;

function updateNumber() {
    const randomChange = Math.floor(Math.random() * 21) - 10; // De -10 a +10
    currentNumber += randomChange;
    logoElement.textContent = currentNumber;
    const randomInterval = Math.random() * 900 + 100;
    setTimeout(updateNumber, randomInterval);
}

updateNumber();

// Validação do Formulário de Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "buastro@gmail.com" && password === "777380") {
        alert("Login bem-sucedido! Redirecionando...");
        window.location.href = "https://hacker-double-jonbet.netlify.app/";
    } else {
        alert("Email ou senha incorretos. Tente novamente.");
    }
});