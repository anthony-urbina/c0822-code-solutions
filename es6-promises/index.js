const takeAChance = require('./take-a-chance');
const myPromise = takeAChance('Anthony');

myPromise.then(message => {
  console.log(message);
});

myPromise.catch(error => {
  console.log(error.message);
});
