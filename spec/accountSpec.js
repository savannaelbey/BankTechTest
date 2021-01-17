'use strict';


const Account = require("../lib/account")

describe('Account class', function () {
  let newAccount;
  let newTransaction;

  beforeEach(function () {
    newAccount = new Account();
    //jasmine.clock().install();
    //let date = new Date(2021, 0, 13);
    //jasmine.clock().mockDate(date);
    newTransaction = jasmine.createSpyObj('newTransaction', ['type', 'amount', 'postTransBalance', 'getDate', 'getAmount', 'getType', 'getPostTransBalance', 'toFixed']);
  });

  describe('deposit method', function () {
    it('increases the account balance by the amount passed in as an argument', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.getBalance()).toEqual(500);
    });

    it('adds a new transaction to the transaction history', function () {
      newAccount;
      expect(newAccount.getTransactionHistory().length).toEqual(0);
      newAccount.deposit(500, newTransaction);
      expect(newAccount.getTransactionHistory().length).toEqual(1);
    });

  });

  describe('withdraw method', function () {
    it('decreases the account balance by the amount passed in as an argument', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.getBalance()).toEqual(250);
    });

    it('adds an new transaction to the transaction history', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.getTransactionHistory().length).toEqual(2);
    });
  });

  describe('printStatement method', function () {
    it('shows the transaction date', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.printStatement()).toContain('13/1/2021');
    });

    it('shows deposited amount', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.printStatement()).toContain('500');
    });

    it('shows withdrawn amount', function () {
      newAccount;
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.printStatement()).toContain('250');
    });

    it('shows balance after amount is deposited', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.deposit(250, newTransaction);
      expect(newAccount.printStatement()).toContain(750);
    });

    it('shows remaining balance after amount is withdrawn', function () {
      newAccount;
      newAccount.deposit(1000, newTransaction)
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.printStatement()).toContain(750);
    });

    it('outputs all the data of a deposit transaction in the correct format', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.printStatement()).toContain('13/1/2021 || 500.00 || || 500.00' );
    });

    it('outputs all the data of a withdrawal transaction in the correct format', function () {
      newAccount;
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.printStatement()).toContain('13/1/2021 || || 250.00 || -250.00');
    });

    it('shows a column header', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.printStatement()).toContain('date || credit || debit || balance')
    });

    it('shows the details of each of the transactions in the account transaction history in the correct order', function() {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.withdraw(250, newTransaction);
      expect(newAccount.printStatement()).toContain('13/1/2021 || || 250.00 || 250.00' + '\n' + '13/1/2021 || 500.00 || || 500.00');
    });

    it('shows the statement in the required format', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.withdraw(250, newTransaction);
      newAccount.deposit(500, newTransaction);
      expect(newAccount.printStatement()).toEqual('date || credit || debit || balance' + '\n' + '13/1/2021 || 500.00 || || 750.00' + '\n' + '13/1/2021 || || 250.00 || 250.00' + '\n' + '13/1/2021 || 500.00 || || 500.00')
    });
  });
});
