'use strict';

class TransactionDouble {
  constructor(date) {
    this.date = date;
    this.type = '';
    this.amount = 0;
    this.currentBalance = 0;
  }

  formatDate() {
    return '13/1/2021'
  }

  formatAmount() {
    return this.amount.toFixed(2);
  }

  formatCurrentBalance() {
    return this.currentBalance.toFixed(2);
  }
}

module.exports = TransactionDouble;
