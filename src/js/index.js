const themeSwithcer = document.querySelector('.theme-switcher');

function changeTheme() {
    document.body.dataset.colorSchema = document.body.dataset.colorSchema === 'black' ? 'white' : 'black';
};

themeSwithcer.onclick = changeTheme;

