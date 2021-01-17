'use strict';


const Account = require('../lib/account')

describe('Account class', function () {
  let newAccount;
  let newTransaction;

  beforeEach(function () {
    newAccount = new Account();
    newTransaction = jasmine.createSpyObj('newTransaction', ['type', 'amount', 'currentBalance']);
  });

  it('has a default starting balance of £0', function () {
    newAccount;
    expect(newAccount.getBalance()).toEqual(0);
  });

  describe('deposit method', function () {
    it('increases the account balance by the deposited amount', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      expect(newAccount.getBalance()).toEqual(500);
    });

    it('adds a new transaction to the account transaction history everytime a deposit is made', function () {
      newAccount;
      newAccount.deposit(100, newTransaction);
      expect(newAccount.getTransactionHistory().length).toEqual(1);
      newAccount.deposit(100, newTransaction);
      expect(newAccount.getTransactionHistory().length).toEqual(2);
    });
  });

  describe('withdraw method', function () {
    it('decreases the account balance by the withdrawal amount', function () {
      newAccount;
      newAccount.deposit(500, newTransaction);
      newAccount.withdraw(100, newTransaction);
      expect(newAccount.getBalance()).toEqual(400);
    });

    it('adds a new transaction to the account transaction history everytime a withdrawal is made', function () {
      newAccount;
      newAccount.withdraw(100, newTransaction);
      newAccount.withdraw(100, newTransaction);
      expect(newAccount.getTransactionHistory().length).toEqual(2);
    });
  });
});
