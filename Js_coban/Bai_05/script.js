var button = document.querySelector("button")
button.onclick = function(){
    alert("hello world")
}
var a = [1, 2, 3, 4, 5];
a.forEach(item, () => { 
    item = item + 5;
})
console.log(a);
// what is regex