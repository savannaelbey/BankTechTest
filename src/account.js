'use strict';

class Account {

  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}
