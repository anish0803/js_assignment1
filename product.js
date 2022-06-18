// 5. Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even 



let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])
// write your code here
let product = 1;
for(let i = a;i<=b ;i ++){
  let check = Math.floor(i/10);
    if(i%2==0 && check%10==4){
    product = product * i;
    }
}
if(product ==1 ){
 console.log(0);
}else{
 console.log(product);
}