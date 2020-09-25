// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {

  let dividedNum = a;
  let divNum = b;

  if (dividedNum < divNum) {
      let temp = dividedNum;
      dividedNum = divNum;
      divNum = temp;
  }

  let remainder = dividedNum % divNum;

  while (!divNum % remainder === 0) {
      dividedNum = divNum;
      divNum = remainder;
      remainder = dividedNum % divNum;
  }

  return divNum;
};

console.log(gcd(135,15));
console.log(gcd(2,6));
console.log(gcd(14,28));
