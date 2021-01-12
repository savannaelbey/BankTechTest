'use strict';

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
    this.#addTransactionToHistory();
  }

  #addTransactionToHistory() {
    let depositTransaction = new Transaction();
    return this.transactionHistory.push(depositTransaction);
  }


}
