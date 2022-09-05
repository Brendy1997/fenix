import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  network = "BNB Smart Chain";
  wallet = "Connect Wallet";
  currentWallet = false;

  networks = ["Etherium", "BNB Smart Chain", "Matic(Polygon)", "Avalanche", "Fantom Opera", "Cronos"];

  wallets = ["Metamask", "TrustWallet", "WalletConnect", "Coinbase Wallet", "SafePal Wallet", "TokenPocket"];

  constructor() { }

  ngOnInit(): void {
  }

  SelectNetwork(n: string) {
    this.network = n;
    this.closeModal();
  }

  SelectWallet(n: string) {
    this.wallet = n;
    this.currentWallet = true;
    this.closeModal();
  }

  CloseWallet() {
    this.wallet = "Connect Wallet";
    this.currentWallet = false;
  }

  OpenModal(id: string) {
    let select = document.getElementById(id);
    if (select) {
      select.classList.add("show");
    }
  }

  closeModal() {
    let modal = document.getElementsByClassName("modal2");
    for (let m = 0; m < modal.length; m++) {
      modal[m].classList.remove('show');
    }
  }

}
