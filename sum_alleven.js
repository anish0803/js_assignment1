
// 2. Print the sum of all even numbers in a range from a to b. (Including a,b)



let sum = 0; 
for (let i = 2; i <= 20; i++) { 
	if (i % 2 === 0) { 
		sum =sum + i; 
	} 
} 
 
console.log(sum); 