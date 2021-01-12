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
    this.#addCreditTransToHistory(amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.#addwithdrawalTransToHistory(amount);
  }

  printStatement() {

    if (this.getTransactionHistory()[0].getType() === 'credit') {
      return this.getTransactionHistory()[0].getDate() + ' ||' + this.getTransactionHistory()[0].getAmount() + '|| ' + ' ' + ' || '
    } else if (this.getTransactionHistory()[0].getType() === 'debit') {
      return this.getTransactionHistory()[0].getDate() + ' ||' + ' ' + '|| ' + this.getTransactionHistory()[0].getAmount() + ' || '
    }

  }

  #addCreditTransToHistory (amount) {
    let depositTransaction = new Transaction();
    depositTransaction.type = 'credit';
    depositTransaction.amount = amount;
    return this.transactionHistory.push(depositTransaction);
  }

  #addwithdrawalTransToHistory(amount) {
    let withdrawTransaction = new Transaction();
    withdrawTransaction.type = 'debit';
    withdrawTransaction.amount = amount;
    return this.transactionHistory.push(withdrawTransaction);
  }

}
