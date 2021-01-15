'use strict';

class Transaction {

  constructor() {
    this.date = new Date(Date.now());
    this.type = ''
    this.amount = 0
    this.postTransBalance = 0
  }

  getDate() {
    return this.#formatDate();
  }

  getType() {
    return this.type;
  }

  getAmount() {
    return this.amount;
  }
  getPostTransBalance() {
    return this.postTransBalance;
  }

  #formatDate() {
    let day = this.date.getUTCDate();
    let month = this.date.getUTCMonth() + 1;
    let year = this.date.getUTCFullYear();
    return day + '/' + month + '/' + year;
  }
}

module.exports = Transaction;
