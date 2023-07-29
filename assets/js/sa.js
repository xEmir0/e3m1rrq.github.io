function handleEnter(event) {
    if (event.keyCode === 13) {
        checkPassword();
    }
}

function checkPassword() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    if (password === "122333") {
        alert("Giriş başarılı! Devam etmek için 'Tamam' butonuna tıklayın.");
        window.location.href = "welcome.html";
    } else {
        alert("Hatalı şifre, sayfayı biraz dikkatli incelemelisin. (Fazla zor değil)");
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}
