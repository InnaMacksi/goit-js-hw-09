const t=document.querySelector("body"),e=document.querySelectorAll("button");let r=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e[0].addEventListener("click",(function(){e[0].setAttribute("disabled",!0),e[1].removeAttribute("disabled"),r=setInterval((()=>{t.style.backgroundColor=l()}),1e3)})),e[1].addEventListener("click",(()=>{e[0].removeAttribute("disabled"),e[1].setAttribute("disabled",!0),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.98b61ea9.js.map
