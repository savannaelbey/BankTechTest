'use strict';


const Account = require("../lib/account")
const Transaction = require("../lib/transactions")

describe('Account class', function () {
  let newAccount;

  beforeEach(function () {
    newAccount = new Account();

  });

  describe('deposit(amount) method', function () {
    it('increases the account balance by the amount passed in as an argument', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.getBalance()).toEqual(500);
    });

    it('adds an instance of transaction to the transaction history', function () {
      newAccount;
      expect(newAccount.getTransactionHistory().length).toEqual(0);
      newAccount.deposit(500);
      expect(newAccount.getTransactionHistory().length).toEqual(1);
      expect(newAccount.getTransactionHistory()[0]).toBeInstanceOf(Transaction);
    });

    it("changes the type of the transaction instance to 'credit'", function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.getTransactionHistory()[0].getType()).toEqual('credit');
    });
  });

  describe('withdraw(amount) method', function () {
    it('decreases the account balance by the amount passed in as an argument', function () {
      newAccount;
      newAccount.deposit(500);
      newAccount.withdraw(250);
      expect(newAccount.getBalance()).toEqual(250);
    });

    it('adds an instance of transaction to the transaction history', function () {
      newAccount;
      newAccount.deposit(500);
      newAccount.withdraw(250);
      expect(newAccount.getTransactionHistory().length).toEqual(2);
      expect(newAccount.getTransactionHistory()[1]).toBeInstanceOf(Transaction);
    });

    it("changes the type of the transaction instance to 'debit'", function () {
      newAccount;
      newAccount.deposit(500);
      newAccount.withdraw(250);
      expect(newAccount.getTransactionHistory()[1].getType()).toEqual('debit');
    });


  });

  describe('printStatement method', function () {
    it('shows the transaction date', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toContain('13/1/2021');
    });

    it('shows deposited amount', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toContain('500');
    });

    it('shows withdrawn amount', function () {
      newAccount;
      newAccount.withdraw(250);
      expect(newAccount.printStatement()).toContain('250');
    });

    it('shows remaining balance after amount is deposited', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toContain(newAccount.getBalance());
    });

    it('shows remaining balance after amount is withdrawn', function () {
      newAccount;
      newAccount.withdraw(250);
      expect(newAccount.printStatement()).toContain(newAccount.getBalance());
    });

    it('outputs all the data of a deposit transaction in the correct format', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toContain('13/1/2021 || 500 || || 500' );
    });

    it('outputs all the data of a withdrawal transaction in the correct format', function () {
      newAccount;
      newAccount.withdraw(250);
      expect(newAccount.printStatement()).toContain('13/1/2021 || || 250 || -250');
    });

    it('shows a column header', function () {
      newAccount;
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toContain('date || credit || debit || balance')
    });

    it('shows the details of each of the transactions in the account transaction history', function() {
      newAccount;
      newAccount.deposit(500);
      newAccount.withdraw(250);
      expect(newAccount.printStatement()).toContain('13/1/2021 || 500 || || 500' + '\n' + '13/1/2021 || || 250 || 250');
    });

    it('shows the statement in the required format', function () {
      newAccount;
      newAccount.deposit(500);
      newAccount.withdraw(250);
      newAccount.deposit(500);
      expect(newAccount.printStatement()).toEqual('date || credit || debit || balance' + '\n' + '13/1/2021 || 500 || || 500' + '\n' + '13/1/2021 || || 250 || 250' + '\n' + '13/1/2021 || 500 || || 750')
    })
  });
});
