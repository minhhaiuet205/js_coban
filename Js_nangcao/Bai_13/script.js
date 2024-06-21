// 1.local storage
localStorage.setItem("fullName", "Nguyen Minh Hai");
// localStorage.setItem("mode", "");
const test = document.querySelector("#test");
test.innerHTML = localStorage.getItem("fullName");


const currentMode = localStorage.getItem("mode");
if(currentMode){
    const body = document.querySelector("body");
    body.classList.add("dark");
}

const buttonChangeMode = document.querySelector("#change-mode");
buttonChangeMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    //body.classList.toggle("dark");

    const currentMode = localStorage.getItem("mode");
    if(currentMode){
        body.classList.remove("dark");
        localStorage.setItem("mode", "");
    }
    else{
        body.classList.add("dark");
        localStorage.setItem("mode", "dark");
    }
})

const buttonResetMode = document.querySelector("#reset-mode");
buttonResetMode.addEventListener("click", () => {
    localStorage.removeItem("mode");

})

// 5.spread syntax
// var a = [1, 2, 3, 4];
// var b = [5, 6, 7];
// a = [...a, ...b];
// console.log(a);

var a = {
    ten : "hai",
    phone : "032322"
}
var b = {
    diachi : "hung yen"
}
a = {
    ...a,
    ...b
}
console.log(a);

