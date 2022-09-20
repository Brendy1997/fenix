import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  mem: any;
  presales: any = [];

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.members().subscribe((res: any) => {
      this.mem = res;
      console.log(res);
    });

    this.authSvc.getPresales().subscribe((res: any) => {
      this.presales = res;
      let today = new Date().getTime();
      for (let pre of this.presales) {
        let ed = new Date(pre.endDate).getTime();
        let sd = new Date(pre.startDate).getTime();
        if (today < sd) {
          pre.status = "Upcoming";
        }
        else if (today > ed) {
          pre.status = "Ended";
        }
        else {
          pre.status = "Started";
        }
      }
    })
  }

}
