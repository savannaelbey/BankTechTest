'use strict';

const Bank = require('../lib/bank')

describe('Bank', function () {
  let bank;
  let account;
  let transaction;

  beforeEach(function () {
    account = jasmine.createSpyObj('account', ['getTransactionHistory'])
    transaction = jasmine.createSpyObj('transaction', ['formatDate', 'type', 'formatAmount', 'formatCurrentBalance'])
    bank = new Bank(account)
  });

});





/*describe('printStatement method', function () {
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
*/
