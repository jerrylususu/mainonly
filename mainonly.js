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

    // selection guide overlay
    const guideTextCn = '正在选择元素。按 <kbd>Esc</kbd> 键取消选择。向下滚动，或按下 <kbd>=</kbd>/<kbd>.</kbd> 键缩小选区。向上滚动，或按下 <kbd>-</kbd>/<kbd>,</kbd> 键扩大选区。'
    const guideTextEn = 'Selecting element. Press <kbd>Esc</kbd> to cancel selection. Scroll down, or press <kbd>=</kbd>/<kbd>.</kbd> to shrink the selection. Scroll up, or press <kbd>-</kbd>/<kbd>,</kbd>, to expand the selection.'
    const guide = document.body.appendChild(document.createElement("div"));
    guide.className = "mainonly-guide";
    guide.innerHTML = `<p>${guideTextCn}</p><p>${guideTextEn}</p>`;
    const guideStyle = document.head.appendChild(document.createElement("style"));
    guideStyle.textContent = `
        .mainonly-guide {
                position: fixed;
                top: 0;
                left: 50%; /* center the box horizontally */
                transform: translate(-50%, 0); /* center the box horizontally */
                padding: 0.5rem;
                font-size: 1rem;
                font-family: sans-serif;
                text-align: center;
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 0.5em;
                z-index: 999999999;
            kbd {
                display: inline-block;
                padding: 0.1em 0.3em;
                font-size: 0.8em;
                line-height: 1;
                color: #24292e;
                vertical-align: middle;
                background-color: #fafbfc;
                border: 1px solid #d1d5da;
                border-radius: 3px;
                box-shadow: inset 0 -1px 0 #d1d5da;
            }
        }`;

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
        }
    }

    /** @param {MouseEvent} event */
    function onMouseOver(event) {
        outlineElement(event.target);
    }

    /** @param {MouseEvent} event */
    function onClick(event) {
        event.preventDefault();
        if (lastStrategy === 'id') {
            // id
            style.textContent = `* { visibility: hidden; } #mainonly, #mainonly * { visibility: visible; }`;
        } else {
            // class
            style.textContent = `* { visibility: hidden; } .mainonly, .mainonly * { visibility: visible; }`;
        }
        cleanupEventListeners();
        hideGuideOverlay();
    }

    function hideGuideOverlay() {
        guide.remove();
        guideStyle.remove();
    }

    /** @param {KeyboardEvent} event */
    function onKeydown(event) {
        // Prevent the default action
        event.preventDefault();
        if (event.key === "Escape") {
            // Recover the hidden elements
            style.remove();
            document.removeEventListener("keydown", onKeydown);
            cleanupEventListeners();
            hideGuideOverlay();
            // Restore the selected element to its original state
            if (lastStrategy === 'id') {
                // id
                selectedElement.removeAttribute("id");
            } else {
                // class
                selectedElement.classList.remove("mainonly");
            }
        } else if (event.key === ',' || event.key === '-') {
            // up, select parent element
            outlineElement(selectedElement.parentElement);
        } else if (event.key === '.' || event.key === '=') {
            // down, select child element containing the cursor
            var childElement = selectedElement.querySelector(":hover");
            if (childElement) {
                outlineElement(childElement);
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
            // Scrolling down, select child element containing the cursor
            var childElement = selectedElement.querySelector(":hover");
            if (childElement) {
                outlineElement(childElement);
            }
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