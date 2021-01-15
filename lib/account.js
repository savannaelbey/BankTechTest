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
    this.#saveNewTrans('credit', amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.#saveNewTrans('debit', amount);
  }

  printStatement() {
    let columnHeader = 'date || credit || debit || balance\n';
    return columnHeader + this.#formatStatement();
  }

  #saveNewTrans(type, amount) {
    let newTrans = new Transaction();
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.postTransBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }

  #formatStatement() {
    let transOrder = this.transactionHistory.reverse();
    let output = []
    transOrder.forEach(trans => {
      output.push(
        `${trans.getDate()} || ${(trans.type === 'credit') ? trans.getAmount().toFixed(2) : ''} || ${(trans.type === 'debit') ? trans.getAmount().toFixed(2) : ''} || ${trans.getPostTransBalance().toFixed(2)}`
      );
    });
    return output.join('\n');
  }

}

module.exports = Account;
