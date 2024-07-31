// Strings 
// 
let str = "abhcd";
// str.length 5
str.charAt(2)  //
// console.log(str.at(-2))   //
// property Access []
str[2];
// slice(startPosition , end position)
let str1 = "honesty is the best policy"
// let s = str1.slice(4);
// let s = str1.toUpperCase()
// console.log(s) 
 let str2 = ""
for(let i = 0;i<str1.length - 1 ;i++){
    if(str1[i] == " "){
       str2 = str2 +  str1[i+1].toUpperCase();       
    } 
    else{
        str2 += str1[i + 1]
    }
}
console.log(str2)
// toUpperCase()
// toLowerCase()
// concat()    concatenation
let s1 = "hello world";

let s2 = "world";
let s3 =s1.concat(" ", s2) // 1. hello world 

// vowel  -- a,e,i,o,u
// trim() -
let str4 = "     hello world     ";  //hello
let str5 = str4.trim();   // hello
console.log(str4.length)  //21        
console.log(str5.length)  //11   10




