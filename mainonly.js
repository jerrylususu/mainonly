// A JavaScript bookmarklet designed to isolate and highlight a specific element on a webpage, effectively hiding all other elements.

(function () {
    // if re-run on the same page, remove the previous instance
    if (document.getElementById("mainonly")) {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    }

    var selectedElement = document.body;
    var lastStrategy = null; // which strategy is used to select the element

    // strategy overview
    // 1. if the selected element doesn't has `id`, then use `id`
    // (since it fixed the issue of pure text nodes can not be styled with CSS)
    // 2. otherwise fallback to use `class`
    if (!selectedElement.id) {
        // id
        lastStrategy = 'id';
        selectedElement.id = "mainonly";
    } else {
        // class
        lastStrategy = 'class';
        selectedElement.classList.add("mainonly");
    }

    const style = document.head.appendChild(document.createElement("style"));
    style.textContent = "#mainonly { outline: 2px solid red; }  .mainonly { outline: 2px solid red; }";

    /** @param {*} element */
    function outlineElement(element) {
        if (element instanceof HTMLElement) { // Ignores non-HTMLElements
            // deselect previous element
            if (lastStrategy === 'id') {
                // id
                selectedElement.removeAttribute("id");
            } else {
                // class
                selectedElement.classList.remove("mainonly");
            }

            // select the new selected element
            selectedElement = element;

            if (!selectedElement.id) {
                // id
                lastStrategy = 'id';
                selectedElement.id = "mainonly";
            } else {
                // class
                lastStrategy = 'class';
                selectedElement.classList.add("mainonly");
            }

            console.log("strategy=", lastStrategy,"selected", selectedElement);
        }
    }

    /** @param {MouseEvent} event */
    function onMouseOver(event) {
        outlineElement(event.target);
    }

    /** @param {MouseEvent} event */
    function onClick(event) {
        console.log("clicked & applied!");
        event.preventDefault();
        if (lastStrategy === 'id') {
            // id
            style.textContent = `* { visibility: hidden; } #mainonly, #mainonly * { visibility: visible; }`;
        } else {
            // class
            style.textContent = `* { visibility: hidden; } .mainonly, .mainonly * { visibility: visible; }`;
        }
        cleanupEventListeners();
    }

    /** @param {KeyboardEvent} event */
    function onKeydown(event) {
        if (event.key === "Escape") {
            // Prevent the default action of the escape key
            event.preventDefault();
            // Recover the hidden elements
            style.remove();
            document.removeEventListener("keydown", onKeydown);
            cleanupEventListeners();
            // Restore the selected element to its original state
            if (lastStrategy === 'id') {
                // id
                selectedElement.removeAttribute("id");
            } else {
                // class
                selectedElement.classList.remove("mainonly");
            }
        }
    }

    /** @param {WheelEvent} event */
    function onWheel(event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            // Scrolling up, select parent element
            outlineElement(selectedElement.parentElement);
        } else {
            // Scrolling down, select first child element
            outlineElement(selectedElement.firstElementChild);
        }
    }

    function cleanupEventListeners() {
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("click", onClick);
        document.removeEventListener("wheel", onWheel);
    }

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("click", onClick);
    document.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("keydown", onKeydown);
})();