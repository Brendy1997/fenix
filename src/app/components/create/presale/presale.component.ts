import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.css']
})
export class PresaleComponent implements OnInit {

  addPresale = new FormGroup({
    tokenAddress: new FormControl('', [Validators.required]),
    feeOpt: new FormControl('bnbOnly', [Validators.required]),
    currency: new FormControl('bnb', Validators.required),
    listingOpt: new FormControl('auto', Validators.required),
    producto_exc: new FormControl('', [Validators.required]),
    cantidad_usuario: new FormControl('', [Validators.required]),
    cantidad_cupon: new FormControl('', [Validators.required]),
    fecha_expiracion: new FormControl(formatDate(new Date().getTime(), 'yyyy-MM-dd', 'en'), [Validators.required]),
    estado: new FormControl('', [Validators.required])

  });

  constructor() { }

  ngOnInit(): void {
  }

  NextStep(id: string) {
    let step_cards = document.getElementsByClassName("card");

    for (let i = 0; i < step_cards.length; i++) {
      step_cards[i].classList.remove("active");
    }

    let icon = document.getElementsByClassName('step-item');

    for (let i = 0; i < icon.length; i++) {
      icon[i].classList.remove("active");
    }

    let icon_it = document.getElementsByClassName(id);

    for (let i = 0; i < icon_it.length; i++) {
      icon_it[i].classList.add("active");
    }

    let next = document.getElementById(id);

    if (next) {
      next.classList.add("active");
    }


  }



}
