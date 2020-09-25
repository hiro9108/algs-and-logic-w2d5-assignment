// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
        if (a * i === b * j) {
            return a * i;
        };
    };
  };
};

console.log(lcm(11,15));
console.log(lcm(2,3));
console.log(lcm(12,24));