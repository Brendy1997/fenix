import { Injectable } from '@angular/core';
import Web3 from 'web3';
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3testService {

  web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/cd67d7b1dfe54aefb32ad7c236e31381'));


  window: any;
  constructor() { }
  private getAccounts = async () => {
    try {
      return await window.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  public openMetamask = async () => {
    window.web3 = new Web3(window.ethereum);
    let addresses = await this.getAccounts();
    console.log("service", addresses)
    if (!addresses.length) {
      try {
        addresses = await window.ethereum.enable();
      } catch (e) {
        return false;
      }
    }
    return addresses.length ? addresses[0] : null;
  };

  test() {
    console.log(this.web3)
  }

}
