//Array, object
//IIFE

// let arr = [1, 2, 3, 4, 5, "simran",true,false,null,undefined]

// console.log(arr.length);

// console.log(arr[arr.length-1]);


//-----------------------------//


// //string is immutable and array is mutable 
// //Inseting element

// arr.push("badwal");
// console.log(arr);

// arr.pop(arr);
// console.log(arr);

// arr[6]="badwal";
// console.log(arr);


// ---------------------------//


//Data Structure
//Object

// let obj = {
//     name : "simran",
//     batch : 2023,
//     Rollno : 603,
//     subjects :{
//         1:["chemistry","physics","maths"],
//         2:["ED","Maths","DSA"],
//         specialization:{
//             1:"PPS",
//             2:"FS",
//             3:["SE","flat"],
//         },
//     },
//     college : "RB",
//     myfunction:function(){
//         let a = 10;
//         let b = 20;
//         // console.log(a+b) //or
//         return (a+b)
//     },

// };

// console.log(obj.subjects);//To access elements.
// console.log(obj.subjects.specialization[3][0]);
// // console.log(obj.myfunction());
// //or
// let out = obj.myfunction();
// console.log(out);



//...........................//


//to access something from object by using "access" keyword

// let obj = {
//     name : "simran",
//      batch : 2023,
//      Rollno : 603,
//      subjects :{
//          1:["chemistry","physics","maths"],
//          2:["ED","Maths","DSA"],
//          specialization:{
//              1:"PPS",
//              2:"FS",
//             3:["SE","flat"],
//          },
//      },
//      college : "RB",
//      myfunction:function(){
//          console.log(this.name)
//      },

//  };
//  obj.myfunction();


//............................//

 //conditions


//  let a=21;
//  let b=21;

//  if(a<b){
//     console.log("a is less thnan b")
//  }
//  else if(a==b){
// console.log("a is equal to b")
//  }

//  else{
//     console.log("a is not less than b")
//  }


//............................//


//Loops

//for loop,while loop, forof loop,forin loop
//for loop,while loop=> for string
//for loop,while loop, forof loop=>array
//forin loop=>objects

// for(initial point ,condition,inc/dec)


// let str ="simran kaur"
// for(let i=0; i<str.length; i=i+1){
// console.log(str[i])
// }

//while loop........//

// let i=1;

// while(i<10){
//     console.log(i);

//     i=i+1;
// }

//forof loop......

// let str = "simran";

// for(let num of str){         //let num of arr=> forof loop
//     console.log(num)
// }

//forin loop............

// let obj = {
//     name : "simran",
//     lastname : "badwal",
//      batch : 2023,
//      Rollno : 603,
//      college : "RB",
//     };

// for(let key in obj){        //let key in obj => forin loop
// if(typeof(obj)[key]=="string"){
//     console.log(obj[key]);
// }
// }
 


// let arr=[1,2,3,4,5,6,7,8]

// for(let i=0; i<arr.length; i++){


// if(arr[i]%2==0){
//     console.log("Element is even:"  +arr[i])
// }
// else{
//      console.log("Element is odd:" +arr[i] )
// }
// }

//........OR.........//

// let arr=[1,2,3,4,5,6,7,8]

// for(let i=0; i<arr.length; i++){


// if(arr[i]%2==0){
//     console.log(`element ${arr[i]} is even`  )
// }
// }