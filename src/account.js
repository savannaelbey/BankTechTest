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
    this.#createNewTrans('credit', amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.#createNewTrans('debit', amount);
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

  #createNewTrans(type, amount) {
    let newTrans = new Transaction();
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.postTransBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }
}
