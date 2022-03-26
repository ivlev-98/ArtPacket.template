class Menu {
    menuTrigger = '';
    items = [];
    links = [];
    activeClass = '';
    constructor(options) {
        this.menuTrigger = document.getElementById(options.trigger);
        options.items.forEach(item => this.items.push(document.querySelector(item)));
        this.links = document.querySelectorAll(options.links);
        this.activeClass = options.activeClass;
    }
    watch() {
        this.menuTrigger.addEventListener("click", () => {
            this.items.forEach(item => item.classList.toggle(this.activeClass));
        });
        this.closeOnClick();
    }
    closeOnClick() {
        for(let link of this.links) {
            link.addEventListener('click', () => {
                this.items.forEach(item => item.classList.remove(this.activeClass));
            });
        }
    }
}