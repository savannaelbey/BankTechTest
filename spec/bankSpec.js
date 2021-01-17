'use strict';

const Bank = require('../lib/bank')

class AccountDouble {
  constructor() {
    this.STARTING_BALANCE = 0;
    this.balance = this.STARTING_BALANCE;
    this.transactionHistory = [];
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  deposit(amount, transaction = new TransactionDouble()) {
    this.balance += amount;
    this.#saveTransactionDetails('credit', amount, transaction);
  }

  withdraw(amount, transaction = new TransactionDouble()) {
    this.balance -= amount;
    this.#saveTransactionDetails('debit', amount, transaction);
  }

  #saveTransactionDetails(type, amount, newTrans) {
    newTrans.type = type;
    newTrans.amount = amount;
    newTrans.currentBalance = this.balance;
    return this.transactionHistory.push(newTrans);
  }
}

class TransactionDouble {
  constructor(date) {
    this.date = date;
    this.type = '';
    this.amount = 0;
    this.currentBalance = 0;
  }

  formatDate() {
    let day = this.date.getUTCDate();
    let month = this.date.getUTCMonth() + 1;
    let year = this.date.getUTCFullYear();
    return day + '/' + month + '/' + year;
  }

  formatAmount() {
    return this.amount.toFixed(2);
  }

  formatCurrentBalance() {
    return this.currentBalance.toFixed(2);
  }
}

describe('Bank', function () {
  let bank;
  let account;
  let transaction;
  let date;

  beforeEach(function () {
    account = new AccountDouble();
    jasmine.clock().install();
    date = new Date(2021, 0, 13);
    jasmine.clock().mockDate(date);
    transaction = new TransactionDouble(date);
    bank = new Bank(account)
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  /*it('prints the account statement in the required format', function () {

    expect(bank.printStatement(account)).toEqual
  });
  */
  describe('printStatement(account) method', function () {
    it('shows the transaction date', function () {
      account;
      account.deposit(500, transaction);
      expect(bank.printStatement(account)).toContain('13/1/2021');
    });

    it('shows deposited amount', function () {
      account;
      account.deposit(500, transaction);
      expect(bank.printStatement(account)).toContain('500');
    });

    it('shows withdrawn amount', function () {
      account;
      account.withdraw(250, transaction);
      expect(bank.printStatement(account)).toContain('250');
    });

    it('shows balance after amount is deposited', function () {
      account;
      account.deposit(500, transaction);
      account.deposit(250, transaction);
      expect(bank.printStatement(account)).toContain(750);
    });

    it('shows remaining balance after amount is withdrawn', function () {
      account;
      account.deposit(1000, transaction);
      account.withdraw(250, transaction);
      expect(bank.printStatement(account)).toContain(750);
    });

    it('outputs all the data of a deposit transaction in the correct format', function () {
      account;
      account.deposit(500, transaction);
      expect(bank.printStatement(account)).toContain('13/1/2021 || 500.00 ||  || 500.00' );
    });

    it('outputs all the data of a withdrawal transaction in the correct format', function () {
      account;
      account.withdraw(250, transaction);
      expect(bank.printStatement(account)).toContain('13/1/2021 ||  || 250.00 || -250.00');
    });

    it('shows a column header', function () {
      account;
      expect(bank.printStatement(account)).toContain('date || credit || debit || balance\n')
    });

    it('shows the details of each of the transactions in the account transaction history in the correct order', function() {
      account;
      account.deposit(400, transaction);
      account.withdraw(100, transaction);
      expect(bank.printStatement(account)).toContain('13/1/2021 ||  || 100.00 || 300.00' + '\n' + '13/1/2021 || 400.00 || || 400.00');
    });

    it('shows the statement in the required format', function () {
      account;
      account.deposit(500, transaction);
      account.withdraw(250, transaction);
      account.deposit(500, transaction);
      expect(bank.printStatement(account)).toEqual('date || credit || debit || balance' + '\n' + '13/1/2021 || 500.00 || || 750.00' + '\n' + '13/1/2021 || || 250.00 || 250.00' + '\n' + '13/1/2021 || 500.00 || || 500.00')
    });
  });
});
