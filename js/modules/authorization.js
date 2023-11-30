export const auth = () => {
    // const htmlURL = location.href;
    // if (htmlURL == 'http://127.0.0.1:5500/index.html') {
        
    // }
    const loginInput = document.querySelector('.login');
    const passwordInput = document.querySelector('.password');
    const loginBtn = document.querySelector('.auth__sub-btn');
    const errorText = document.querySelector('.submit-block__log-reg-error-text');
    const loginPattern = /^\w+$/;
    // const passwordPattern = /^[^\s]*$/;
    const users = JSON.parse(localStorage.users);
    let isLoginExist = false;
    localStorage.currentUser = 'none';
    loginInput.addEventListener('input', () => {
        if(loginInput.value[loginInput.value.length-1] == ' '){
            loginInput.value = loginInput.value.slice(0, -1);
        }
    })
    passwordInput.addEventListener('input', () => {
        if(passwordInput.value[passwordInput.value.length-1] == ' '){
            passwordInput.value = passwordInput.value.slice(0, -1);
        }
    })
    loginBtn.addEventListener('click', (e) => {
        if(passwordInput.value == '' || loginInput.value == ''){
            errorText.textContent = 'Заполните все поля';
            errorText.style.display = 'block';
        } else if (loginInput.value.includes(' ') || passwordInput.value.includes(' ')){
            errorText.textContent = 'Недопустимы пробелы';
            errorText.style.display = 'block';
        } else if(!loginPattern.test(loginInput.value)){
            errorText.textContent = 'Введены недопустимые символы';
            errorText.style.display = 'block';
        } else{
            users.forEach(user => {
                console.log(user.login);
                if (user.login == loginInput.value.trim()){
                    isLoginExist = true;
                    if (user.password == passwordInput.value.trim()){
                        localStorage.currentUser = user.id;
                        const currentUrl = location.href;
                        if (currentUrl == 'http://127.0.0.1:5500/index.html') {
                            localStorage.currentUser = user.id;
                            window.location.href = 'pages/interesting.html';
                        } else {
                            localStorage.currentUser = user.id;
                            window.location.href = '/pages/interesting.html';
                        }                        
                    } else{
                        errorText.textContent = 'Неверный пароль';
                        errorText.style.display = 'block';
                    }
                }
            });
            if (isLoginExist == false){
                errorText.textContent = 'Такого логина нет';
                errorText.style.display = 'block';
            }
        };
        e.preventDefault();
    })
}
