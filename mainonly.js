// a js bookmarklet to remove all elements from a page except the one you want to focus on

javascript:(function() {
    var selectedElement = null;

    var style = document.createElement('style');
    style.textContent = '.mainonly-outline { outline: 2px solid red; }  .mainonly-hidden { display: none; }';
    document.head.appendChild(style);

    function outlineElement(element) {
        if (selectedElement) {
            selectedElement.classList.remove('mainonly-outline');
        }
        selectedElement = element;
        selectedElement.classList.add('mainonly-outline');
    }

    function removeOutline(element) {
        element.classList.remove('mainonly-outline');
    }

    function onMouseOver(event) {
        outlineElement(event.target);
    }

    function removeOtherElements(element) {
        var allElements = document.body.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            if (element.contains(allElements[i]) || allElements[i].contains(element)) {
                continue;
            }
            allElements[i].classList.add('mainonly-hidden');
        }
    }

    function onClick(event) {
        event.preventDefault();
        removeOtherElements(selectedElement);
        cleanupEventListeners();
        removeOutline(selectedElement);
    }

    function showHiddenElements(event) {
        if (event.key === 'Escape') {
            var hiddenElements = document.querySelectorAll('.mainonly-hidden');
            hiddenElements.forEach(function(element) {
                element.classList.remove('mainonly-hidden');
            });
        }
        document.removeEventListener('keydown', showHiddenElements, false);
    }

    function onWheel(event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            // Scrolling up, select parent element
            if (selectedElement.parentElement) {
                outlineElement(selectedElement.parentElement);
            }
        } else {
            // Scrolling down, select first child element
            if (selectedElement.children.length > 0) {
                outlineElement(selectedElement.children[0]);
            }
        }
    }


    function cleanupEventListeners() {
        document.removeEventListener('mouseover', onMouseOver, false);
        document.removeEventListener('click', onClick, false);
        document.removeEventListener('wheel', onWheel, { passive: false });
    }

    document.addEventListener('mouseover', onMouseOver, false);
    document.addEventListener('click', onClick, false);
    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('keydown', showHiddenElements, false);
})();
