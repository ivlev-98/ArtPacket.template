document.addEventListener("DOMContentLoaded", () => {
    let menu = new Menu({
        'trigger': 'menu-trigger',
        'items': ['.site-header', '.container'],
        'links': '.site-header__links > a',
        'activeClass': 'active'
    });
    menu.watch();
});