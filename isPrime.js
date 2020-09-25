// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  if (num <= 1) {
    return false;
  };
  let count = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
          count++;
      }
  };
  return count === 2 ? true : false;
};

console.log(isPrime(100));
console.log(isPrime(101));
console.log(isPrime(102));
console.log(isPrime(997));