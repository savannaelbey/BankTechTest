'use strict';

describe('Account class', function () {
  let myAccount;

  beforeEach(function() {
    myAccount = new Account()
  });

  describe('deposit(amount) method', function () {
    it('Allows customer to deposit money', function () {
      myAccount;
      myAccount.deposit(500)
      expect(myAccount.getBalance()).toEqual(500);
    });

    it('adds an instance of transaction to the transaction history', function () {
      myAccount;
      expect(myAccount.getTransactionHistory().length).toEqual(0);
      myAccount.deposit(500);
      expect(myAccount.getTransactionHistory().length).toEqual(1);
      expect(myAccount.getTransactionHistory()[0]).toBeInstanceOf(Transaction);
    });
  });

  describe('withdraw(amount) method', function () {
    it('Allows customer to withdraw money', function () {
      myAccount;
      myAccount.deposit(500);
      myAccount.withdraw(250);
      expect(myAccount.getBalance()).toEqual(250);

    });
  });


});
