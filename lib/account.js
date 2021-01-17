'use strict';

const Transaction = require("./transactions");

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

  deposit(amount, transaction = new Transaction()) {
    this.balance += amount;
    this.#saveTransactionDetails('credit', amount, transaction);
  }

  withdraw(amount, transaction = new Transaction()) {
    this.balance -= amount;
    this.#saveTransactionDetails('debit', amount, transaction);
  }

  #saveTransactionDetails(type, amount, newTrans) {
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.currentBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }

}

module.exports = Account;
