// Keep links available when JavaScript is disabled; enhance the mobile menu.
const navigation = document.querySelector('nav[aria-label="Main navigation"]');
const menuButton = navigation?.querySelector('.menu-toggle');
if (navigation && menuButton) {
    navigation.classList.add('menu-ready');
    const closeMenu = () => menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', String(menuButton.getAttribute('aria-expanded') !== 'true'));
    });
    navigation.querySelectorAll('.links a').forEach(link => link.addEventListener('click', closeMenu));
    navigation.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuButton.focus();
        }
    });
}
