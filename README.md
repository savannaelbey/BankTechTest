# The Bank App Tech Test

The aim of this project is to produce a command line application that is easily readable, maintainable, and extendable using TDD and the SOLID principles of OOD. 

## Requirments

* Allows Deposits
* Allows Withdrawals
* Prints statements

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012<br />
**And** a deposit of 2000 on 13-01-2012<br />
**And** a withdrawal of 500 on 14-01-2012<br />
**When** she prints her bank statement<br />
**Then** she would see:


## User Stories

```
As a customer,
I want to be able to deposit money into my bank account,
So that I can sava money.

As a customer,
I want to be able to withdraw money from my bank account,
so that I can spend money.

As a customer,
I want to be able to able to print my statement,
so that I can track my spending.

As a customer,
I want the date and amount of my transactions as well as the balance to show on my statement,
So that I can trace back my spending.
```
## Class Diagram
![Screenshot 2021-01-13 at 02 24 42](https://user-images.githubusercontent.com/71889577/104398378-81484180-5546-11eb-8052-d73f14fee8be.png)


## Installing and running the app
Clone the current repository:
```
$ git clone https://github.com/savannaelbey/BankTechTest.git 
```

Go into your locally cloned repository:
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
Require the file containing the Account class:
```
$ const Account = require('./lib/Account')
```
Create an instance of the Account class:
```
$ let myAccount = new Account();
```
To deposit money(i.e £1000) into the account:
```
$ myAccount.deposit(1000);
```
To withdraw money(i.e £500) from the account:
```
$ myAccount.withdraw(500);
```
To check the current balance:
```
$ myAccount.getBalance();
```
To print the account statement:
```
$ myAccount.printStatement();
```

## Running the tests
To run the tests from the command line:
```
$ jasmine
```

## Dependencies

## App screenshots
<img width="371" alt="Screenshot 2021-01-13 at 02 31 05" src="https://user-images.githubusercontent.com/71889577/104398830-662a0180-5547-11eb-97a9-83603ed56f8f.png">


## Possible extentions
