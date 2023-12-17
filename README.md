# mainonly

A JavaScript bookmarklet designed to isolate and highlight a specific element on a webpage, effectively hiding all other elements.

(Created with GPT-4-turbo-1106 and refined through manual adjustments.)

![demo](mainonly.gif)

## How to Use

1. Copy the following code:

    ```JavaScript
    javascript:(function()%7Bvar%20e%3Dnull%2Cn%3Ddocument.createElement(%22style%22)%3Bfunction%20t(n)%7Be%26%26e.classList.remove(%22mainonly-outline%22)%2C(e%3Dn).classList.add(%22mainonly-outline%22)%7Dfunction%20i(e)%7Bt(e.target)%7Dfunction%20o(n)%7Bn.preventDefault()%2Cfunction%20e(n)%7Bfor(var%20t%3Ddocument.body.getElementsByTagName(%22*%22)%2Ci%3D0%3Bi%3Ct.length%3Bi%2B%2B)!(n.contains(t%5Bi%5D)%7C%7Ct%5Bi%5D.contains(n))%26%26t%5Bi%5D.classList.add(%22mainonly-hidden%22)%7D(e)%2Cdocument.removeEventListener(%22mouseover%22%2Ci%2C!1)%2Cdocument.removeEventListener(%22click%22%2Co%2C!1)%2Cdocument.removeEventListener(%22wheel%22%2Ca%2C%7Bpassive%3A!1%7D)%2Cfunction%20e(n)%7Bn.classList.remove(%22mainonly-outline%22)%7D(e)%7Dfunction%20l(e)%7B%22Escape%22%3D%3D%3De.key%26%26document.querySelectorAll(%22.mainonly-hidden%22).forEach(function(e)%7Be.classList.remove(%22mainonly-hidden%22)%7D)%2Cdocument.removeEventListener(%22keydown%22%2Cl%2C!1)%7Dfunction%20a(n)%7Bn.preventDefault()%2Cn.deltaY%3C0%3Fe.parentElement%26%26t(e.parentElement)%3Ae.children.length%3E0%26%26t(e.children%5B0%5D)%7Dn.textContent%3D%22.mainonly-outline%20%7B%20outline%3A%202px%20solid%20red%3B%20%7D%20%20.mainonly-hidden%20%7B%20display%3A%20none%3B%20%7D%22%2Cdocument.head.appendChild(n)%2Cdocument.addEventListener(%22mouseover%22%2Ci%2C!1)%2Cdocument.addEventListener(%22click%22%2Co%2C!1)%2Cdocument.addEventListener(%22wheel%22%2Ca%2C%7Bpassive%3A!1%7D)%2Cdocument.addEventListener(%22keydown%22%2Cl%2C!1)%7D)()%3B
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
    javascript:(function()%7Bvar%20e%3Dnull%2Cn%3Ddocument.createElement(%22style%22)%3Bfunction%20t(n)%7Be%26%26e.classList.remove(%22mainonly-outline%22)%2C(e%3Dn).classList.add(%22mainonly-outline%22)%7Dfunction%20i(e)%7Bt(e.target)%7Dfunction%20o(n)%7Bn.preventDefault()%2Cfunction%20e(n)%7Bfor(var%20t%3Ddocument.body.getElementsByTagName(%22*%22)%2Ci%3D0%3Bi%3Ct.length%3Bi%2B%2B)!(n.contains(t%5Bi%5D)%7C%7Ct%5Bi%5D.contains(n))%26%26t%5Bi%5D.classList.add(%22mainonly-hidden%22)%7D(e)%2Cdocument.removeEventListener(%22mouseover%22%2Ci%2C!1)%2Cdocument.removeEventListener(%22click%22%2Co%2C!1)%2Cdocument.removeEventListener(%22wheel%22%2Ca%2C%7Bpassive%3A!1%7D)%2Cfunction%20e(n)%7Bn.classList.remove(%22mainonly-outline%22)%7D(e)%7Dfunction%20l(e)%7B%22Escape%22%3D%3D%3De.key%26%26document.querySelectorAll(%22.mainonly-hidden%22).forEach(function(e)%7Be.classList.remove(%22mainonly-hidden%22)%7D)%2Cdocument.removeEventListener(%22keydown%22%2Cl%2C!1)%7Dfunction%20a(n)%7Bn.preventDefault()%2Cn.deltaY%3C0%3Fe.parentElement%26%26t(e.parentElement)%3Ae.children.length%3E0%26%26t(e.children%5B0%5D)%7Dn.textContent%3D%22.mainonly-outline%20%7B%20outline%3A%202px%20solid%20red%3B%20%7D%20%20.mainonly-hidden%20%7B%20display%3A%20none%3B%20%7D%22%2Cdocument.head.appendChild(n)%2Cdocument.addEventListener(%22mouseover%22%2Ci%2C!1)%2Cdocument.addEventListener(%22click%22%2Co%2C!1)%2Cdocument.addEventListener(%22wheel%22%2Ca%2C%7Bpassive%3A!1%7D)%2Cdocument.addEventListener(%22keydown%22%2Cl%2C!1)%7D)()%3B
    ```

2. 右键点击您的浏览器书签栏，选择“添加书签”。
3. 在弹出的窗口中，为书签命名（例如：“mainonly”），并将复制的代码粘贴到 URL 或位置栏中。
4. 保存书签。
5. 在网页上，激活书签后，点击您想要关注的元素。该元素将被红色轮廓圈出。使用滚轮调整选择范围。
6. 选定元素后，点击鼠标左键，其他所有元素将被隐藏，只显示所选元素。
7. 按 `ESC` 键可显示隐藏的元素，并恢复网页至原始状态。
