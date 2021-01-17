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

  deposit(amount, transaction = new Transaction()) {
    this.balance += amount;
    this.#saveTransactionDetails('credit', amount, transaction);
  }

  withdraw(amount, transaction = new Transaction()) {
    this.balance -= amount;
    this.#saveTransactionDetails('debit', amount, transaction);
  }

  printStatement() {
    let columnHeader = 'date || credit || debit || balance\n';
    return columnHeader + this.#formatStatement();
  }

  #saveTransactionDetails(type, amount, newTrans) {
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.postTransBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }

  #formatStatement() {
    let transOrder = this.transactionHistory.reverse();
    let output = []
    transOrder.forEach(trans => {
      output.push(`${trans.getDate()} || ${(trans.type === 'credit') ? trans.getAmount().toFixed(2) : ''} || ${(trans.type === 'debit') ? trans.getAmount().toFixed(2) : ''} || ${trans.getPostTransBalance().toFixed(2)}`);
    });
    return output.join('\n');
  }
}

module.exports = Account;
