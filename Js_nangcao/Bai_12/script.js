// 1.callback
// const congViec1 = () => {
//     console.log("cong viec 1");
// }
// const congViec2 = (callback) => {
//     console.log("cong viec 2");
//     callback();
// }

// congViec2(congViec1);


// 2. promise
// var a = 10;
// const promise = new Promise((resolve, reject) => {
//     if(a === undefined){
//         reject();
//     }
//     else{
//         resolve(a);
//     }
// })

// promise
//     .then((a) => {
//         console.log(a);
//         return a;
//     })
//     .then((a) =>{
//         console.log(a + 10);
//         return a + 10;
//     })
//     .then((b) =>{
//         console.log(b + 20);
//         return b + 20;
//     })
//     .catch(() => {
//         console.log("that bai");
//     })
// 3 trang thai cua promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3000)
// })

// setTimeout(() => {
//     console.log("sau 1s : ", promise);
// }, 1000)

// setTimeout(() => {
//     console.log("sau 2s : ", promise);
// }, 2000)

// setTimeout(() => {
//     console.log("sau 3s : ", promise);
// }, 3000)

// 3. fetch API
// fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//         const arr = data.products.map((item) => {
//             return `<li>` + item.title + `</li>`;
//         })
//         //console.log(arr);
//         const htmls = arr.join("");
//         console.log(htmls);
//         const productList = document.querySelector("#product-list");
//         productList.innerHTML = htmls;
//     })