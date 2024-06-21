// 2.1
// console.log(window);

// 2.2
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// 2.3 
// const openTab = () =>{
//     window.open("https://www.w3schools.com/sql/default.asp");
// }

// 2.4
// var tab;
// const openTab = () => {
//     tab = window.open("https://www.w3schools.com/sql/default.asp");
// }
// const closeTab = () => {
//     tab.close();
// }


// 3.
// console.log(screen.width + " " + screen.height);

// 4.
// const reloadPage = () => {
//     location.reload();
// }
// vd: load lai trang sau 2s
// setInterval(reloadPage, 2000);

// 5.1
// const goBack = () => {
//     history.back();
// }

// 6.
// console.log(navigator);

// 8.
// function countDown() {
//   if (seconds >= 0) {
//     console.log(seconds);
//     seconds--;
//     setTimeout(countDown, 1000); // Hiển thị đếm ngược mỗi giây
//   } else {
//     console.log("Happy New Year!");
//   }
// }
// countDown();

// 9.
document.cookie = "fullName=Nguyen minh hai";
window.print();