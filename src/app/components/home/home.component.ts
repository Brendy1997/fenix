import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mem: any;
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.members().subscribe((res: any) => { this.mem = res.body; });
  }

}