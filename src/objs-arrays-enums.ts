// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //* tuple 2 element array
// } = {
//   name: 'Jordon',
//   age: 18,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
//* same things as above but better using enum's
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

//* enum's
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'Jordon',
  age: 18,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin'); //* able to push as the type is array
// person.role[1] = 10; //! causes ts error because cant change tuple type

// person.role = [0, 'admin']; //* follows tuple structure
// person.role = [0, 'admin', 'user']; //! causes error as this breaks tuple structure

let favouriteActivits: string[];
favouriteActivits = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); //! causes ts error as ts can tell that map isnt available on a string
}

if (person.role === 'ADMIN') {
  console.log('is admin');
}
