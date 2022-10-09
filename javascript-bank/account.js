/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }

};

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {

        deposits += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        withdrawals += this.transactions[i].amount;
      }
      var balance = deposits - withdrawals;
    }
  }
  return balance;
};

// Account.prototype.withdraw =
// a prototype method of the account constructor
// that causes the account object to create a new transsaction object of type deposit
// the new tx is pushed into tx array
