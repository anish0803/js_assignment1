

//  7. Check whether the given number is equal to its reverse number or not


let num = parseInt(process.argv[2]);
let rev = 0;
let temp = num;
while (temp > 0) {
  last = temp % 10;
  rev = rev * 10 + last;
  temp = parseInt(temp / 10);
}
if (rev == num) {
  console.log("This number is equal to its reverse number");
} else {
  console.log("This number is not equal to its reverse number");
}