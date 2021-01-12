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
    let output = ['date || credit || debit || balance']
    for (let i = 0; i < this.transactionHistory.length; i++) {
      if (this.getTransactionHistory()[i].getType() === 'credit') {
        output.push(this.getTransactionHistory()[i].getDate() + ' || ' + this.getTransactionHistory()[i].getAmount() + ' ||' + ' ' + '|| ' + this.getTransactionHistory()[i].getPostTransBalance());
      } else if (this.getTransactionHistory()[i].getType() === 'debit') {
        output.push(this.getTransactionHistory()[i].getDate() + ' ||' + ' ' + '|| ' + this.getTransactionHistory()[i].getAmount() + ' || ' + this.getTransactionHistory()[i].getPostTransBalance());
      }
    }
    return output.join('\n');
  }

  #addCreditTransToHistory (amount) {
    let depositTransaction = new Transaction();
    depositTransaction.type = 'credit';
    depositTransaction.amount = amount;
    depositTransaction.postTransBalance = this.balance;
    return this.transactionHistory.push(depositTransaction);
  }

  #addwithdrawalTransToHistory(amount) {
    let withdrawTransaction = new Transaction();
    withdrawTransaction.type = 'debit';
    withdrawTransaction.amount = amount;
    withdrawTransaction.postTransBalance = this.balance;
    return this.transactionHistory.push(withdrawTransaction);
  }



}
