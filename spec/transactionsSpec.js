'use strict';

const Transaction = require("../lib/transactions")

describe('Transaction', function () {
  let myTrans;

  beforeEach(function () {
    myTrans = new Transaction();
  });

  describe('getDate method', function () {
    it('shows the date the transaction was made', function () {
      myTrans;
      expect(myTrans.getDate()).toEqual('13/1/2021');

    });
  });

  describe('getType method', function () {
    it('shows the transaction type', function () {
      myTrans;
      expect(myTrans.getType()).toEqual('')
    });
  });

  describe('getAmount method', function () {
    it('shows the transaction amount', function () {
      myTrans;
      expect(myTrans.getAmount()).toEqual(0);
    });
  });
});
