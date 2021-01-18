'use strict';

const AccountDouble = require('./mocks/accountMock')
const Bank = require('../lib/bank');
const TransactionDouble = require('./mocks/transactionMock')


describe('Bank', function () {
  let bank;
  let accountDouble;
  let date;

  beforeEach(function () {
    accountDouble = new AccountDouble();
    bank = new Bank(accountDouble)
    //mock date
    jasmine.clock().install();
    date = new Date(2021, 0, 13);
    jasmine.clock().mockDate(date);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  describe('printStatement method', function () {
    it('shows the transaction date', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble);
      expect(bank.printStatement()).toContain('13/1/2021');
    });

    it('shows deposited amount', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble);
      expect(bank.printStatement()).toContain('500');
    });

    it('shows withdrawn amount', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.withdraw(250, transactionDouble);
      expect(bank.printStatement()).toContain('250');
    });

    it('shows balance after amount is deposited', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble);
      let transactionDouble2 = new TransactionDouble(date);
      accountDouble.deposit(250, transactionDouble2);
      expect(bank.printStatement()).toContain(750);
    });

    it('shows remaining balance after amount is withdrawn', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(1000, transactionDouble);
      let transactionDouble2 = new TransactionDouble(date);
      accountDouble.withdraw(250, transactionDouble2);
      expect(bank.printStatement()).toContain(750);
    });

    it('outputs all the data of a deposit transaction in the correct format', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble);
      expect(bank.printStatement()).toContain('13/1/2021 || 500.00 ||  || 500.00' );
    });

    it('outputs all the data of a withdrawal transaction in the correct format', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.withdraw(250, transactionDouble);
      expect(bank.printStatement()).toContain('13/1/2021 ||  || 250.00 || -250.00');
    });

    it('shows a column header', function () {
      accountDouble;
      expect(bank.printStatement()).toContain('date || credit || debit || balance\n')
    });

    it('shows the details of each of the transactions in the account transaction history in the correct order', function() {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(400, transactionDouble);
      let transactionDouble2 = new TransactionDouble(date);
      accountDouble.withdraw(100, transactionDouble2);
      expect(bank.printStatement()).toContain('13/1/2021 ||  || 100.00 || 300.00' + '\n' + '13/1/2021 || 400.00 ||  || 400.00');
    });

    it('shows the statement in the required format', function () {
      accountDouble;
      let transactionDouble = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble);
      let transactionDouble2 = new TransactionDouble(date);
      accountDouble.withdraw(250, transactionDouble2);
      let transactionDouble3 = new TransactionDouble(date);
      accountDouble.deposit(500, transactionDouble3);
      expect(bank.printStatement()).toEqual('date || credit || debit || balance' + '\n' + '13/1/2021 || 500.00 ||  || 750.00' + '\n' + '13/1/2021 ||  || 250.00 || 250.00' + '\n' + '13/1/2021 || 500.00 ||  || 500.00')
    });
  });
});
