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
    let creditAmount = 0;
    let debitAmount = 0;
    for (let trans of this.getTransactionHistory()) {
      if (trans.getType() === 'credit') {
        creditAmount = trans.getAmount();
        debitAmount = ' ';
      } else if (trans.getType() === 'debit') {
        creditAmount = ' ';
        debitAmount = trans.getAmount();
      }
    return trans.getDate() + ' ||' + creditAmount + '|| ' + debitAmount + ' || '
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
