# The Bank App Tech Test

The aim of this project is to produce a command line application that is easily readable, maintainable, and extensible using TDD and the SOLID principles of OOD. 

## Requirements

* Allows Deposits
* Allows Withdrawals
* Prints statements

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012<br />
**And** a deposit of 2000 on 13-01-2012<br />
**And** a withdrawal of 500 on 14-01-2012<br />
**When** she prints her bank statement<br />
**Then** she would see:

```
date || credit || debit || balance
14/1/2012 ||  || 500.00 || 2500.00
13/1/2012 || 2000.00 ||  || 3000.00
10/1/2012 || 1000.00 ||  || 1000.00
```


## User Stories

```
As an account holder,
I want to be able to deposit a specified amount,
So that I can put money into my account for safe keeping.

As an account holder,
I want to be able to withdraw a specified amount,
So that I can take money from my account when I need it.

As an account holder,
I want to be able to see my balance,
So that I know how much money I have in my account.

As an account holder,
I want to print a statement of all transactions in my account,
So that I can view the history of my deposits and withdrawals.

As an account holder,
I want my statement to print the transactions in reverse chronological order,
So that I can easily follow the transactions when reading.

As an account holder,
I want my statement to show a running balanceo with each transaction,
So that I can see what my account balance was at that time.

As an account holder,
I want my statement to show the date of each transaction,
So that I know when that transaction was made.

As an account holder,
I want my statement to show the amount of each transaction, 
So that I know how much has been deposited and/or withdrawn.

As an account holder,
I want all statements to have columns for date, credit, debit and balance,
So that the format is standard regardless of the transactions.

```
## Class Diagram
![Screenshot 2021-01-18 at 00 06 46](https://user-images.githubusercontent.com/71889577/104860034-3309b880-5921-11eb-953a-22ed6e17202e.png)

## Installing and running the app
Clone the current repository:
```
$ git clone https://github.com/savannaelbey/BankTechTest.git 
```

Navigate to the directory:

```
$ cd BankTechTest
```
Install all the required packages:
```
$ npm install
``` 
Run Node from the command line:
```
$ node
```
Require the file containing the Bank class:
```
$ const Bank = require('./lib/bank')
```
Create an instance of the Bank class:
```
$ let myBank = new Bank();
```
To deposit money(i.e £1000) into the account:
```
$ myBank.getAccount().deposit(1000);
```
To withdraw money(i.e £500) from the account:
```
$ myBank.getAccount().withdraw(500);
```
To check the current balance:
```
$ myBank.getAccount().getBalance();
```
To print the account statement:
```
$ console.log(myBank.printStatement());
```

## Running the tests
To run the tests from the command line:
```
$ jasmine
```

## Dependencies
Node.js<br />
jasmine

## App screenshots
![Screenshot 2021-01-18 at 00 13 31](https://user-images.githubusercontent.com/71889577/104860171-01ddb800-5922-11eb-9b21-ca381fa7f3e6.png)

![Screenshot 2021-01-18 at 00 14 25](https://user-images.githubusercontent.com/71889577/104860204-23d73a80-5922-11eb-9946-5828aa6492ae.png)

## Improvements
* Add test coverage
* Add feature tests

## Possible extentions
* Add edge cases( i.e throw error if input is not an integer and if user attempts to withdraw money when there are insufficient funds)
* Add confirmation messages when user deposits/withdraws money
