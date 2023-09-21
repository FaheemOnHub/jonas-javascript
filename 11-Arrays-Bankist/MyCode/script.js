'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  balance: 0,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  balance: 0,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  balance: 0,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  balance: 0,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Statement Tab
const displayMovement = function (acc, sort = false) {
  const moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  containerMovements.innerHTML = '';
  moves.forEach(function (movElem, index) {
    const type = movElem > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                <div class="movements__type movements__type--${type}">
                  ${index + 1} ${type};</div>
                <div class="movements__value">${movElem}</div>
                 </div>`;
    //afterbegin is the order of element new after older
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES-->

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//sets
const currenciesUnique = new Set([
  'USD',
  'Rupee',
  'USD',
  'GBP',
  'EUR',
  'GBP',
  'EUR',
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value) {
  console.log(`${value}  `);
});
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}💶`;
};

// calcPrintBalance(account1.movements);
// for (const move of movements) {
//   if (move > 0) {
//     console.log(`You deposited ${move}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(move)}`);
//   }
// };
//forEach-Higher Order Function,requires a call back function
//Continue and Break does not works in forEach
// console.log('------------------FOR EACH-----------');

// movements.forEach(function (move) {
//   //forEach method will call back the function after each iteration
//   if (move > 0) {
//     console.log(`You deposited ${move}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(move)}`);
//   }
// });

// console.log('------------------FOR EACH-----------');

// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`Movement ${i + 1} You deposited ${move}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(move)}`);
//   }
//   // console.log(arr);
// });
// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// SPLICE---mutates the original array and extracts the other part
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// mdn documentation for other information

// REVERSE---mutates the original array

// arr2 = ['a', 'b', 'c'];
// arr2.reverse();
// console.log(arr2);

// concat
// const letters = arr.concat(arr2);
// console.log(letters);

// JOIN

// console.log(letters.join('-'));

// AT METHOD.... gives element at exact position (at the position)
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));
// console.log(arr3.slice(-2));

// AT ALSO WORKS ON STRINGS

// forEach Method -- LOOPS

///CHALLENGE///////// --->__>__>--->
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const checkDogs = (dogsJulia, dogsKate) => {
//   const juliaCopy = dogsJulia.slice(1, -2);
//   console.log(juliaCopy);
//   const CorrectedData = juliaCopy.concat(dogsKate);
//   console.log(CorrectedData);
//   CorrectedData.forEach(function (elem, index) {
//     let testAge = elem > 2 ? 'is an adult' : 'is a puppy';
//     console.log(`Dog number ${index + 1} ${testAge}`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

const user = 'Steven William Thomas';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join(' ');

// console.log(username);

const createUsernames = acc => {
  acc.forEach(function (arrElem) {
    //arrElem=account1
    //account1.owner is accessed-->Jonas Schmedtmann
    arrElem.username = arrElem.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //preventDefault is used to prevent form from submitting
  //e is the event parameter
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username == inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin == inputLoginPin.value) {
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    calcPrintBalance(currentAccount);
    displayMovement(currentAccount);
    incomeReceived(currentAccount);
    incomeGiven(currentAccount);
    intrest(currentAccount);

    //Clear Cred...
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
  }
});

//TRANSFER BUTTON -->
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username == inputTransferTo.value
  );
  console.log(receiverAcc);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  calcPrintBalance(currentAccount);
  displayMovement(currentAccount);
  incomeReceived(currentAccount);
  incomeGiven(currentAccount);
  intrest(currentAccount);
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

//LOAN BUTTON
let btnTimes = 0;
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    btnTimes < 2 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    btnTimes++;
  }
  calcPrintBalance(currentAccount);
  displayMovement(currentAccount);
  incomeReceived(currentAccount);
  incomeGiven(currentAccount);
  intrest(currentAccount);

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const pinConfirm = Number(inputClosePin.value);

  if (
    pinConfirm == currentAccount.pin &&
    inputCloseUsername.value == currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username == currentAccount.username
    );
    accounts.splice(index, 1);
    inputCloseUsername.value = '';
    inputClosePin.value = '';
    containerApp.style.opacity = 0;
    alert('Account Closed!');
  }
});
let sorted = false; //state-variable
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount, !sorted);
  sorted = !sorted;
});
//filter method

const withdr = account1.movements.filter(mov => mov < 0);
console.log(withdr);
//
//
//
//
//
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const data12 = data1.concat(data2);

const calcAverageHumanAge = data => {
  const humanAges = data.map(currElem =>
    currElem < 2 ? currElem * 2 : currElem * 4 + 16
  );
  const newHumanAge = humanAges.filter(currElem => currElem > 18);

  const reduceAvg =
    newHumanAge.reduce((acc, ages) => {
      return acc + ages;
    }, 0) / Math.trunc(newHumanAge.length);

  return reduceAvg;
};

const humanAges = calcAverageHumanAge(data12);
console.log(humanAges);

//chaining all Methods...
//PipeLine
const totalUSDdepo = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalUSDdepo);

const incomeReceived = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}EUR`;
};

const incomeGiven = acc => {
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}EUR`;
};

const intrest = acc => {
  const int = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${int}EUR`;
};

//flatenned the array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat());

//flattened the array to level 2
const arrDeep = [[[1, 2], 3], [4, 5, 6, 7, [8, 9]], 10];
console.log(arrDeep.flat(2));

//Method Chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((arr, mov) => arr + mov, 0);
console.log(overallBalance);

//using flatMap
//flatMap only goes 1 level deeep
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((arr, mov) => arr + mov, 0);

console.log(overallBalance2);

//Sorting Arrays
//sort method does the sorting on strings not on the numbers
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

console.log(owners);

//Ascending Order Sort
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1; // out of order
//   } else {
//     return -1; // correct order
//   }
// });

// console.log(movements);

// //Descending Order Sort

// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.log(movements);

//Array.from is used to convert iterables to Arrays.

// labelBalance.addEventListener('click', function () {
//   const movementsUT = Array.from(
//     document.querySelectorAll('.movements__value')
//   );
//   console.log(movementsUT);
//   console.log(movementsUT.map(el => Number(el.textContent)));
// });

//Array-Methods-Practice...

// const bankDepositSum = accounts.map(acc => acc.movements).flat();
//1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(bankDepositSum);

// //2.
// const bankDepositAbove1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(bankDepositAbove1000);

//3.
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
//       return sums;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     }
//   );

// console.log(sums);

//4.
//this is a nice titile -> This Is a Nice Title
// const converTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');

//   return titleCase;
// };

// console.log(converTitleCase('this is a nice title'));
// console.log(converTitleCase('this is a LONG title but not too long'));
// console.log(converTitleCase('and here is another title with an EXAMPLE'));

//Challenge-4 - - - - - - - - - - - - - - -- -  - - - - - - - - -- - - -

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dogObj => {
  dogObj.recommendedFood = Math.floor(dogObj.weight ** 0.75 * 28);
});

console.log(dogs);

dogs.forEach(dogObj => {
  if (dogObj.owners.includes('Sarah')) {
    console.log(dogObj.recommendedFood);
  }
});

const ownersEatTooMuch = dogs
  .filter(dogObj => dogObj.curFood > dogObj.recommendedFood)
  .flatMap(elem => elem.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dogObj => dogObj.curFood < dogObj.recommendedFood)
  .flatMap(elem => elem.owners);
console.log(ownersEatTooLittle);

//"Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )}'s dogs eat too much! and ${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too little`
);

dogs.forEach(dogObj => {
  dogObj.curFood == dogObj.recommendedFood
    ? console.log(dogObj.owners)
    : console.log('No One!');
});

console.log(dogs.some(dogs => dogs.curFood <= 250));

console.log(dogs.filter(dogs => dogs.curFood < 250));

const dogsCopy = dogs.slice().sort((a, b) => {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogsCopy);
