let x;

const arr = [28, 38, 44, 29, 109];

arr.push(100);


arr.pop();

arr.unshift(99);


arr.shift();


arr.reverse();


x = arr.includes(445);


x = arr.indexOf(28);


x = arr.toString();
x = arr.join();


x = arr.slice(1, 4);


x = arr.splice(1, 4);


x = arr.splice(4, 1);


x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
