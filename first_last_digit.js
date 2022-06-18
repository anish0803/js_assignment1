
// 3. Write a program to read the first and last digit of a number


function firstAndLast(num){
    let a = Math.floor(num/100000);
      let b = num%10;
      return(a+" "+b);
    }
    console.log(firstAndLast(123789));
    exports.firstAndLast = firstAndLast;