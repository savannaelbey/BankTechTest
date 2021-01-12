'use strict';

describe('Account', function () {
  it('allows user to deposit money', function () {
    let myAccount = new Account();
    myAccount.deposit(500)
    expect(myAccount.getBalance()).toEqual(500);
  });
});
