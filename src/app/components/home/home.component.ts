import { Component, OnInit } from '@angular/core';
import { Presale } from 'src/app/class/presale';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  presales: any = [];

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {


    this.authSvc.getPresales().subscribe((res: any) => {
      this.presales = res;

    })
  }

}
