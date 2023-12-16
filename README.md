# mainonly
a js bookmarklet to remove all elements from a page except the one you want to focus on

(created using gpt-4-turbo-1106, with some manual tweaking.)

## How to use
1. Bookmark this: [MainOnly](javascript:!function(){var e=null,n=document.createElement("style");function t(n){e&&e.classList.remove("mainonly-outline"),(e=n).classList.add("mainonly-outline")}function i(e){t(e.target)}function o(n){n.preventDefault(),function e(n){for(var t=document.body.getElementsByTagName("*"),i=0;i<t.length;i++)!(n.contains(t[i])||t[i].contains(n))&&t[i].classList.add("mainonly-hidden")}(e),document.removeEventListener("mouseover",i,!1),document.removeEventListener("click",o,!1),document.removeEventListener("wheel",a,{passive:!1}),function e(n){n.classList.remove("mainonly-outline")}(e)}function l(e){"Escape"===e.key&&document.querySelectorAll(".mainonly-hidden").forEach(function(e){e.classList.remove("mainonly-hidden")}),document.removeEventListener("keydown",l,!1)}function a(n){n.preventDefault(),n.deltaY<0?e.parentElement&&t(e.parentElement):e.children.length>0&&t(e.children[0])}n.textContent=".mainonly-outline { outline: 2px solid red; }  .mainonly-hidden { display: none; }",document.head.appendChild(n),document.addEventListener("mouseover",i,!1),document.addEventListener("click",o,!1),document.addEventListener("wheel",a,{passive:!1}),document.addEventListener("keydown",l,!1)}();)
> Right click, choose "Add to bookmark"
2. On a webpage, first click the bookmark, then select the element you want to focus on. (a red outline will be shown around it.) Scroll to expand or shrink selection.
3. After a selection has been made, left click, and all the other elements are now hidden.
4. Press `ESC` to recover the hidden elements and restore the page as before.

## Tools
- [minifier](https://www.toptal.com/developers/javascript-minifier)
