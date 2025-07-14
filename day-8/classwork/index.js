// let arr= [1,2,3,4,5,6,7,8];
// //simple method
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]*2)
// }
// //by using map
// let out = arr.map((index , ele ) => {
// return ele*2;
// });
// console.log(out);


// let arr= [1,2,3,4,5,6,7,8];
// let out = arr.map((index , ele ) => {   //map returns array and forEach returns undefined
// return ele*2;
// });
// let forEachout = arr.forEach((ele,index) =>{
//     return ele;
// } );
// console.log(forEachout);

// to get output....

// let arr= [1,2,3,4,5,6,7,8];
// let out = arr.map(( ele, index ) => {   
// return ele*2;
// });
// arr.forEach((ele,index) =>{
//    console.log(ele,index)
// } );


// = assignment
//==comparison but only value
//===comparison of value+datatype

//.............Filters..........//

// let arr= [1,2,3,4,5,6,7,8];
// let filterOut = arr.filter((ele,index) => {
//     return ele%2==0;
// });
// console.log(filterOut);

//...another type.....//
// let arr= [1,2,3,4,5,6,7,8, "simran" , true, undefined];
// let filterOut = arr.filter((ele,index) => {
//     return typeof(ele)==="string";
// });
// console.log(filterOut);

// let arr= [1,2,3,4,5,6,7,8, "simran" , true, undefined];
// let filterOut = arr.filter((ele,index) => {
//     return index%2==1;
// });
// console.log(filterOut);

//...............reduce..................//

// let arr= [1,2,3,4,5,6,7,8, "simran" , true, undefined];
// let reduceout = arr.reduce((acc , current)=>{
//     return acc+current;
// });
// console.log(reduceout);


//................accumulator.............//

// let arr= [1,2,3,4,5,6,7,8];
// let reduceout = arr.reduce((acc , current)=>{
//     return acc+current;
// },10);
// console.log(reduceout);

//  let arr= [1,2,3,4,5,6,7,8];
// let out = arr.map(( ele, index ) => {   
// return ele**2;
// }).filter((ele , index) =>{
//     return ele%2==0;
// }).map((ele , index) =>{
//     return ele/2;
// });

//    console.log(out)


 let arr= [8,7,6,5,4,3,2,1];
let out = arr.map(( ele, index ) => {   
return ele**2;
}).filter((ele , index) =>{
    return ele%2==0;
}).map((ele , index) =>{
    return ele/2;
});

   console.log(out)




