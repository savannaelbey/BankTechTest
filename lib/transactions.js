'use strict';

class Transaction {

  constructor(date = new Date()) {
    this.date = date;
    this.type = '';
    this.amount = 0;
    this.currentBalance = 0;
  }

  getDate() {
    return this.date;
  }

  getType() {
    return this.type;
  }

  getAmount() {
    return this.amount;
  }

  getCurrentBalance() {
    return this.currentBalance;
  }

  formatDate() {
    let day = this.date.getUTCDate();
    let month = this.date.getUTCMonth() + 1;
    let year = this.date.getUTCFullYear();
    return day + '/' + month + '/' + year;
  }

  formatAmount() {
    return this.getAmount().toFixed(2);
  }

  formatCurrentBalance() {
    return this.getCurrentBalance().toFixed(2);
  }

}

module.exports = Transaction;
