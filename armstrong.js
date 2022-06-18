// 4. Check whether the given number is an armstrong number or not. 


let n=parseInt(process.argv[2])
let r, a;
let sum=0;
a=n;
while(n>0)    
{    
r=Math.floor(n%10);    
sum=sum+(r**3);    
n=n/10;    
}    
if(a==sum)    
console.log("it is  armstrong  number ");    
else    
console.log("it is not  armstrong number");    

// sir it only work two or three digit number pls check it .so this is wrong....