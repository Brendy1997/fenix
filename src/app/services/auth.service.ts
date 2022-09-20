import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Presale } from '../class/presale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  members(): any {

    return this.http.get<any>(environment.endpoints.base);
  }

  public getPresales(): Observable<Presale> {
    return this.http.get<Presale>("assets/preventas.json");
  }

}
