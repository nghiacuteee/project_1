
// While Loop
let j = 1;

while (j <= 100) {
  if (j % 15 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }

  j++;
}
