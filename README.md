# mainonly

A JavaScript bookmarklet designed to isolate and highlight a specific element on a webpage, effectively hiding all other elements.

(Created with GPT-4-turbo-1106 and refined through manual adjustments.)

![demo](mainonly.gif)

## How to Use

1. Copy the following code:

    ```JavaScript
    javascript:(function(){document.getElementById("mainonly")&&document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}));var e=document.body,n=e.id;e.id="mainonly";let t=document.head.appendChild(document.createElement("style"));function i(t){t instanceof HTMLElement&&(n?e.id=n:e.removeAttribute("id"),n=(e=t).id,e.id="mainonly")}function o(e){i(e.target)}function d(e){e.preventDefault(),t.textContent="* { visibility: hidden; } #mainonly, #mainonly * { visibility: visible; }",v()}function r(i){"Escape"===i.key&&(i.preventDefault(),t.remove(),document.removeEventListener("keydown",r),v(),n?e.id=n:e.removeAttribute("id"))}function l(n){n.preventDefault(),n.deltaY<0?i(e.parentElement):i(e.firstElementChild)}function v(){document.removeEventListener("mouseover",o),document.removeEventListener("click",d),document.removeEventListener("wheel",l)}t.textContent="#mainonly { outline: 2px solid red; }",document.addEventListener("mouseover",o),document.addEventListener("click",d),document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("keydown",r)}())
    ```

2. Right-click on your browser's bookmark bar and select "Add Bookmark".
3. In the pop-up window, name your bookmark (for example, "mainonly") and paste the copied code into the URL or location field.
4. Save the bookmark.
5. On a webpage, activate the bookmarklet, then click on the element you want to focus on. This element will be encircled with a red outline. Use the scroll wheel to adjust the selection size.
6. Once you've made a selection, click the left mouse button. All other elements will be hidden, leaving only the selected element visible.
7. Press the `ESC` key to reveal the hidden elements and revert the page to its original state.

## Tools

- [minifier](https://www.toptal.com/developers/javascript-minifier)
- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)

---

一个 JavaScript 书签工具，专门用于隐藏网页上的非目标元素，仅显示您想要聚焦的元素。

（基于 GPT-4-turbo-1106 创制，并经过手动优化调整。）

## 使用方法

1. 复制以下代码：

    ```JavaScript
    javascript:(function(){document.getElementById("mainonly")&&document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}));var e=document.body,n=e.id;e.id="mainonly";let t=document.head.appendChild(document.createElement("style"));function i(t){t instanceof HTMLElement&&(n?e.id=n:e.removeAttribute("id"),n=(e=t).id,e.id="mainonly")}function o(e){i(e.target)}function d(e){e.preventDefault(),t.textContent="* { visibility: hidden; } #mainonly, #mainonly * { visibility: visible; }",v()}function r(i){"Escape"===i.key&&(i.preventDefault(),t.remove(),document.removeEventListener("keydown",r),v(),n?e.id=n:e.removeAttribute("id"))}function l(n){n.preventDefault(),n.deltaY<0?i(e.parentElement):i(e.firstElementChild)}function v(){document.removeEventListener("mouseover",o),document.removeEventListener("click",d),document.removeEventListener("wheel",l)}t.textContent="#mainonly { outline: 2px solid red; }",document.addEventListener("mouseover",o),document.addEventListener("click",d),document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("keydown",r)}())
    ```

2. 右键点击您的浏览器书签栏，选择“添加书签”。
3. 在弹出的窗口中，为书签命名（例如：“mainonly”），并将复制的代码粘贴到 URL 或位置栏中。
4. 保存书签。
5. 在网页上，激活书签后，点击您想要关注的元素。该元素将被红色轮廓圈出。使用滚轮调整选择范围。
6. 选定元素后，点击鼠标左键，其他所有元素将被隐藏，只显示所选元素。
7. 按 `ESC` 键可显示隐藏的元素，并恢复网页至原始状态。
