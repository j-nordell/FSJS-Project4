class View {
    constructor(html) {
    "use strict";
    this.html = html;
    this.displayState = "none";
    this.viewElement = document.getElementById("board");
    }

    toggleDisplay() {
        if (this.displayState === "none") {
            this.viewElement.style.display = "block";
        } else {
            this.viewElement.style.display = "none";
        }
    }

    renderInElement() {
        this.viewElement.innerHTML = this.html;
    }

    bindUIActions(element, event, actions) {
        "use strict";
        element.addEventListener(event, actions);
    }
}