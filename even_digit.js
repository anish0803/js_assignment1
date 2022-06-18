
// 6. Take a number and return all the even digits of the number.

function even_digits(num) {
    var ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
  console.log(even_digits(123789));
  exports.even_digits = even_digits;
