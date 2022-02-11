// 2.	Starting with an array containing the numbers 1 through 10, use filter, map and reduce to produce the following.
// Use console.log to display the results.
// a.	An array of odd numbers
// b.	An array of numbers divisible by 2 or 5
// c.	An array of numbers divisible by 3 squared (square the numbers that are divisible by 3)
// d.	The sum of the following: square the numbers divisible by 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a = numbers.filter((nbr) => nbr % 2 === 1);
console.log(a)

const b = numbers.filter((nbr) => nbr % 2 === 0 || nbr % 5 === 0);
console.log(b)

const c = numbers
  .filter((nbr) => Math.pow(nbr, 3) % 3 === 0)
  .map((nbr) => Math.pow(nbr, 3));
console.log(c)

const d = numbers
  .reduce((acc, nbr) => {
    if (nbr % 5 === 0) {
      acc += Math.pow(nbr, 2);
    }
    return acc;
  }, 0);
console.log(d)
