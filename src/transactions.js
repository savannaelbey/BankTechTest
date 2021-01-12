'use strict';

class Transaction {

  constructor() {
    this.date = new Date();

  }

  getDate() {
    return this.#outputDate();
  }

  #outputDate() {
    let day = this.date.getUTCDate();
    let month = this.date.getUTCMonth() + 1;
    let year = this.date.getUTCFullYear();
    return day + '/' + month + '/' + year;

  }

}
