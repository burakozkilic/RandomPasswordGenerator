const input = document.querySelector('input'),
    button = document.querySelector('button'),
    copyBtn = document.querySelector('span.far'),
    copy = document.querySelector('span.far'),
    copyActive = document.querySelector('span.fas');

let chars = '~!@#$%^&*()_+{}":?><;.,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYW0123456789';

button.onclick = () => {
    let i,
        randomPassword = '';
    copyBtn.style.display = 'block';
    copyActive.style.display = 'none';
    for (i = 0; i < 16; i++) {
        randomPassword =
            randomPassword + chars.charAt(Math.floor(Math.random() * chars.length));

    }
    input.value = randomPassword;
};

copy.onclick = ()=>{
    copyBtn.style.display = 'none';
    copyBtn.style.display = 'block';
    input.select();
    navigator.clipboard.writeText(input.value);
}
