
// 3. Write a program to read the first and last digit of a number


// function firstAndLast(num){
//     let a = Math.floor(num/100000);
//       let b = num%10;
//       return(a+" "+b);
//     }
//     console.log(firstAndLast(123789));
//     exports.firstAndLast = firstAndLast;




    // --------------While loop----------
    
    let Number = parseInt(process.argv[2]); 
    let firstdigit, lastdigit;
    lastdigit= Number % 10;
    while(Number>=10){
      firstdigit=Math.floor(Number/10);
      Number=Number/10;
    }
    console.log(firstdigit,lastdigit);