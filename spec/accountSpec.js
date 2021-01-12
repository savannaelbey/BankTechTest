'use strict';

describe('Account class', function () {
  let myAccount;

  beforeEach(function() {
    myAccount = new Account()
  });

  describe('deposit() method', function () {
    it('allows user to deposit money', function () {
      myAccount;
      myAccount.deposit(500)
      expect(myAccount.getBalance()).toEqual(500);
    });

    it('adds an instance of transaction to the transaction history', function () {
      myAccount;
      expect(myAccount.getTransactionHistory().length).toEqual(0);
      myAccount.deposit(500);
      expect(myAccount.getTransactionHistory().length).toEqual(1);
      expect(myAccount.getTransactionHistory()[0]).toBeInstanceOf(Transaction)
    });

  });


});
