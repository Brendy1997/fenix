import { Component, OnInit } from '@angular/core';
import { Web3testService } from 'src/app/services/web3test.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  network = "BNB Smart Chain";
  wallet = "Connect Wallet";
  currentWallet = false;
  direction: string[] | undefined;


  networks = ["Etherium", "BNB Smart Chain", "Matic(Polygon)", "Avalanche", "Fantom Opera", "Cronos"];

  wallets = ["Metamask", "TrustWallet", "WalletConnect", "Coinbase Wallet", "SafePal Wallet", "TokenPocket"];

  constructor(private test: Web3testService) { }

  ngOnInit(): void {
  }

  SelectNetwork(n: string) {
    this.network = n;
    this.closeModal();
  }

  SelectWallet(n: string) {

    this.currentWallet = true;
    //this.Connect();
    this.test.openMetamask().then(res => this.wallet = res);

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

  // Connect() {
  //   this.web3.connectAccount().then(response => {
  //     console.log(response);
  //     this.direction = response;
  //   }).catch((error: any) => {
  //     console.error(error);
  //   });
  // }


}
