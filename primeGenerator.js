// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {
  if (n <= 1) {
    return 'Please put more than +1 integer';
  };
  const primeArr = [];
  for (let i = 2; i <= n; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
          if (i % j === 0) {
              count++;
          };
          if (count === 2 && i === j) {
              primeArr.push(i);
          };
      };
  };
  return primeArr;
};

console.log(primeGenerator(3));
console.log(primeGenerator(100));
console.log(primeGenerator(97));
