!function(){var t=document.querySelector("body"),e=document.querySelectorAll("button"),n=null;function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e[0].addEventListener("click",(function(){e[0].setAttribute("disabled",!0),e[1].removeAttribute("disabled"),n=setInterval((function(){t.style.backgroundColor=r()}),1e3)})),e[1].addEventListener("click",(function(){e[0].removeAttribute("disabled"),e[1].setAttribute("disabled",!0),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.dee307df.js.map
