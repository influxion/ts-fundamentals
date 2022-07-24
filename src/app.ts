// const names: Array<string> = []; // string[]
// names[0].split('')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' '); //! causes error as split isnt available on a number
// });

function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'Jordon', hobbies: ['Sports'] },
  { age: 18 }
);
const mergedObj2 = merge({ name: 'Jordon' }, { age: 18 });
console.log(mergedObj);
