'use strict';

const Transaction = require('../lib/transactions')

describe('Transaction', function () {
  let myTrans;
  let date;

  beforeEach(function () {
    jasmine.clock().install();
    date = new Date(2021, 0, 13);
    jasmine.clock().mockDate(date);
    myTrans = new Transaction(date);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  describe('getDate method', function () {
    it('shows the date the transaction was made', function () {
      myTrans;
      expect(myTrans.formatDate()).toEqual('13/1/2021');
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
