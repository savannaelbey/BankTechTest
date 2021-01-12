'use strict';

describe('Transaction', function () {
  let myTrans;

  beforeEach(function () {
    myTrans = new Transaction();
  });

  describe('getDate method', function () {
    it('shows the date the transaction was made', function () {
      myTrans;
      expect(myTrans.getDate()).toEqual('12/1/2021');
    });
  });
});
