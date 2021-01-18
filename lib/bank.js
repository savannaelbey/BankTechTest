'use strict';

const Account = require('./account');
const Transaction = require('./transactions');

class Bank {

  constructor(account = new Account()) {
    this.account = account;
  }

  getAccount() {
    return this.account;
  }

  printStatement() {
    let columnHeader = 'date || credit || debit || balance\n';
    return columnHeader + this.#formatStatement();
  }

  #formatStatement() {
    let correctOrderOfTransactions = this.getAccount().getTransactionHistory().reverse();
    let output = []
    correctOrderOfTransactions.forEach(transaction => {
      output.push(`${transaction.formatDate()} || ${(transaction.type === 'credit') ? transaction.formatAmount() : ''} || ${(transaction.type === 'debit') ? transaction.formatAmount() : ''} || ${transaction.formatCurrentBalance()}`);
    });
    return output.join('\n');
  }
}

module.exports = Bank;
