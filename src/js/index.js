const themeSwithcer = document.querySelector('.theme-switcher');
const buttons = document.querySelectorAll('.btn');

//  Theme
function changeTheme() {
    document.body.dataset.colorSchema = document.body.dataset.colorSchema === 'black' ? 'white' : 'black';
};

themeSwithcer.onclick = changeTheme;
//  Buttons click effect
function rippleEffect(ev) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');

    ripple.style.left = `${ev.offsetX}px`;
    ripple.style.top = `${ev.offsetY}px`;

    ripple.addEventListener('mousedown', () => {
        ripple.hidden = true;
    });

    ev.target.append(ripple);

    setTimeout(() => ripple.remove(), 1000);
}

buttons.forEach((button) => {
    button.addEventListener('click', rippleEffect);
});