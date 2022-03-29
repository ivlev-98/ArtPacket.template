class Modal {
    openTriggers = [];
    closeTrigger = '';
    triggable = [];
    activeClass = '';
    constructor(options) {
        options.openTriggers.forEach((item) => {
            this.openTriggers.push(document.querySelector(item));
        });
        this.closeTrigger = document.querySelector(options.closeTrigger);
        options.triggable.forEach((item) => {
            this.triggable.push(document.querySelector(item));
        });
        this.activeClass = options.active;
        console.log(this.openTriggers);
    }
    watch() {
        this.openTriggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                this.triggable.forEach(item => item.classList.add(this.activeClass));
            });
        });
        this.closeTrigger.addEventListener('click', () => {
            this.triggable.forEach(item => item.classList.remove(this.activeClass));
        });
    }
}