import * as angular from 'angular';

export class termcontroller {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for About
      this.message = 'It looks like youre asking about "ecommerce." Ecommerce (short for electronic commerce) refers to the buying and selling of goods and services over the internet. This business model allows companies and individuals to conduct transactions online, bypassing traditional brick-and-mortar stores'
    }
  }
  