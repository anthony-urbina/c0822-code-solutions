/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i <= this.accounts.length; i++) {
    if (i === this.accounts.length) {
      return null;
    } else if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i <= this.accounts.length; i++) {
    if (i === this.accounts.length) {
      return 0;
    } else {
      var balance = this.accounts[i].getBalance();
      totalAssets += balance;
      if (i === this.accounts.length - 1) {
        return totalAssets;
      }
    }
  }

};
