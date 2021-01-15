'use strict';

const Transaction = require("./transactions")
class Account {

  constructor() {
    this.STARTING_BALANCE = 0;
    this.balance = this.STARTING_BALANCE;
    this.transactionHistory = [];
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  deposit(amount) {
    this.balance += amount;
    this.#createNewTrans('credit', amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.#createNewTrans('debit', amount);
  }

  printStatement() {
    let columnHeader = 'date || credit || debit || balance';
    let output = [columnHeader];
    for (let i = 0; i < this.transactionHistory.length; i++) {
      let transDate = this.getTransactionHistory()[i].getDate();
      let transAmount = this.getTransactionHistory()[i].getAmount();
      let transBalance = this.getTransactionHistory()[i].getPostTransBalance();
      if (this.#isCreditTrans(i)) {
        output.push(transDate + ' || ' + transAmount + ' ||' + ' ' + '|| ' + transBalance);
      } else if (this.#isDebitTrans(i)) {
        output.push(transDate + ' ||' + ' ' + '|| ' + transAmount + ' || ' + transBalance);
      }
    }
    return output.join('\n');
  }

  #createNewTrans(type, amount) {
    let newTrans = new Transaction();
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.postTransBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }

  #isCreditTrans(index) {
    return this.getTransactionHistory()[index].getType() === 'credit';
  }

  #isDebitTrans(index) {
    return this.getTransactionHistory()[index].getType() === 'debit';
  }

}

module.exports = Account;
