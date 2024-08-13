let arr = [24, 47, 55, 32 , 14, 24]
arr[2]
let large = 0;
let seclarge = arr[0];  //
for(let i = 0;i<=arr.length;i++){
    if(arr[i]>large){
        large = arr[i]
    }
    else if(arr[i] > seclarge && seclarge != large){
        seclarge = arr[i]
    }
}
document.writeln(large)
document.writeln(seclarge)

for(let i = 0;i<arr.length;i++){    //outer loop
   for(let j =1;j<arr.length;j++){  //inner loop
    if(arr[i] == arr[j]){
       document.writeln("duplicate element of index at = " + i + "of element"  + arr[i])
    }
    else{
        document.writeln("duplicate not found!!!")
    }
   }
}
// dry run
// i = 0 - j=1 
// i = 0 - j=2 
// i = 0 - j=3 
// i = 0 - j=4 
// i = 0 - j=5 
// i = 1 - j=1 
// i = 1 - j=2 
// i = 1 - j=3 
// i = 1 - j=4 
// i = 1 - j=5 

// Sum() , multiply(), sub(), division()
// let oper = '+';
// switch(oper) {
//     case '+' : sum()
// }

// 1. even number = 2 se divisible hote hai   