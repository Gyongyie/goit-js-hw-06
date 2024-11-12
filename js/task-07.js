const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = fontSizeControl.value + "px";
document.addEventListener("input", () => {
    text.style.fontSize = fontSizeControl.value + "px";
})  
console.log(fontSizeControl);