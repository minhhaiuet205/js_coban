// 1.1. declaration function
// function tong(){
//     let sum = 0;
//     for(const x of arguments){
//         sum += x;
//     }
//     return sum;
// }



// 1.2. expression function
// var tong = function(){
//     let sum = 0;
//     for(const x of arguments){
//         sum += x;
//     }
//     return sum;
// }



// 1.3. arrow funtion
// 1.
// const tong = (...arguments) => {
//     let sum = 0;
//     for(x of arguments) sum += x;
//     return sum;
// }
// console.log(tong(1,2,3,4))


// 2.
// const tong = (arguments) => {
//     let sum = 0;
//     for(x of arguments) sum += x;
//     return sum;
// }
// var list = [1,2,3,4,5];
// console.log(tong(list));





// 2. Try-catch
// try {
//     console.log(a);
// } catch (error) {
//     console.log("dang chay vao catch");
// }finally{
//     console.log("luon chay vao finally");
// }





// 4.1. forEach()
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// list.forEach((val, index) => {
//     list[index] = 9;
// });

// list.forEach((_, index) => {
//     console.log(index);
// });
// console.log(list);




// 4.2.. Every()
// const check = list.every((val) => {
//     return val >= 5;
// });
// console.log(check);





// 4.3. some()
// const check = list.some((val) => {
//     return val <= 3;
// });
// console.log(check);

//  // tuong duong voi
// var check = () => {
//     for(let x of list){
//         if(x <= 3) return true;
//     }
//     return false;
// };
// if(check() == true) console.log("co so nho hon 3");
// else console.log("khong co !"); 




// 4.4. find()
const monHoc = [
    {
        ten : "toan",
        diem : 8
    },
    {
        ten : "tin",
        diem : 7.8
    }
];
// console.log(monHoc.find((item) => {
//     return item.ten == "tin";
// }));



// 4.6. map()
// const mangMoi = monHoc.map((item) => {
//     return item.diem;
// });
// console.log(mangMoi);



// 4.7. reduce()
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((total, val) => {
//     console.log(total);
//     console.log(val);
//     console.log("-----------");
//     return total + val;
// });

// const sum = numbers.reduce((total, val) => {
//     console.log(total);
//     console.log(val);
//     console.log("-----------");
//     return total + val;
// }, 5);
// console.log(sum);


//vd : tinh diem trung binh cua mon hoc
// cach 1:
// let tinhDiemTrungBinh = () => {
//     let sum = 0;
//     for(x of monHoc) sum += x.diem / monHoc.length;
//     return sum;
// };
// console.log(tinhDiemTrungBinh());

//cach 2:
// let diemTB = monHoc.reduce((total, val) =>{
//     return total + val.diem / monHoc.length;
// }, 0);
// console.log(diemTB);

// vd2.
// var arrayString = "Chang co gi het";
//  arrayString = arrayString.split(" ").map((data) =>{
//     let str = data[0].toUpperCase();
//     return str + data.slice(1);
// });
// console.log(arrayString);


