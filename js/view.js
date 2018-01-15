'use strict';

function View(html, displayState, viewElement) {
    this.html = html;
    this.displayState = displayState;
    this.viewElement = viewElement;
}

View.prototype.toggleDisplay = function() {
    if(this.displayState == "none") {
        this.viewElement.style.display = "block";
    } else {
        this.viewElement.style.display = "none";
    }
};

View.prototype.renderInElement = function() {
    this.viewElement.innerHTML = this.html;
};