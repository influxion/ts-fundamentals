function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; //* should take any function where the 2 parameters are numbers and return a number

combineValues = add;
// combineValues = printResult //! incorrect result because we want to return a number and also doesnt container 2 parameters that are numbers
// combineValues = 5 //! throw ts error because type is not function

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
