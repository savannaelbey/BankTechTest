'use strict';

class Account {

  constructor(balance = 0, transactionHistory = []) {
    this.balance = balance;
    this.transactionHistory = transactionHistory;
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  deposit(amount) {
    this.balance += amount;
    let depositTransaction = new Transaction();
    this.transactionHistory.push(depositTransaction);
  }
}
