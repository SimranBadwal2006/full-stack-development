//promise => states => pending,reject and successful

// const mypromise = () =>{
//     const response = fetch(" https://fakestoreapi.com/products")
//     async
//     console.log(response)
// }
// mypromise()

// async function mypromise (){

// }
// const mypromise = async() =>{
//     const response = fetch(" https://fakestoreapi.com/products")
//     async
//     console.log(response)
// }
// mypromise()

// let a = "simran";
// console.log(a);
// setTimeout(() =>{

//     console.log("delay of 2ms")
// }, 2000)
// console.log("delay of 1ms amd 2ms")
// setTimeout(() => {

//     console.log("delay of 1ms")
// }, 1000)  
// setTimeout(() =>{
//     for(var i=1; i<=5; i++){
//         console.log(i)
//     }
// },0)

// const myPromise = async() =>{
//     const response = fetch(" https://fakestoreapi.com/products");
//     console.log(response);
// }
// myPromise()

// const myPromise = async()=>{
//     const response = await fetch("https://fakestoreapi.in/api/products")
//     const res = await response.json()

//     console.log(res.products)
// }
// myPromise()



const myPromise =async()=>{
    const response =  await fetch("https://fakestoreapi.in/api/products")
   const res =  await response.json()
   const data = res.products;
   showdata(data)
//    console.log(res.products)
}
myPromise()
async function showdata(data){
//  console.log(data)

data.forEach((ele, index)=>{
    // console.log(ele)
  const parent = document.getElementById("parent");
  const h2 = document.createElement("h2");
  h2.innerText =ele.brand;
  const img = document.createElement("img")
  img.src = ele.image
  img.style.width="200px";
  img.style.heigth="200px";
  const  p1 = document.createElement("p");
  p1.innerText= ele.title;
  const  p2 = document.createElement("p");
  p2.innerText= ele.price;
   const  p3 = document.createElement("p");
  p3.innerText= ele.category;
  
   const  p4 = document.createElement("p");
  p4.innerText= ele.discount;
  const btn = document.createElement("btn")
  btn.innerText = "Add to cart";
  btn.addEventListener("click",() => {
    addtocart(el);
  });
  
//    const  p5 = document.createElement("p");
//   p5.innerText= ele.;
   
  const productdiv = document.createElement("div");
  
productdiv.append(h2,img,p1,p2,p3,p4);
productdiv.style.border="1px solid black";
parent.append(productdiv)

})
}
function getDataFromstorage(){
  let data=JSON.parse(localStorage.getitem("cartData"))
console.log(data);
}