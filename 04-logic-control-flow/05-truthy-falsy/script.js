

const x = function () {};

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

const children = 3;

if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}


const posts = ['Post One'];


if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}


if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}


const user = {
  name: 'Brad',
};

if (user) {
  console.log('List User');
} else {
  console.log('No User');
}


if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}


console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true


console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
