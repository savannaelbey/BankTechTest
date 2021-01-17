'use strict';

const TransactionDouble = require('./transactionMock');

class AccountDouble {
  constructor() {
    this.STARTING_BALANCE = 0;
    this.balance = this.STARTING_BALANCE;
    this.transactionHistory = [];
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  deposit(amount, transaction = new TransactionDouble()) {
    this.balance += amount;
    this.#saveTransactionDetails('credit', amount, transaction);
  }

  withdraw(amount, transaction = new TransactionDouble()) {
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

module.exports = AccountDouble;
