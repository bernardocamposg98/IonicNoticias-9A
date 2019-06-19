import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias() {
    return this.http.get<RespuestaNoticias>(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-19&sortBy=publishedAt&apiKey=526eaee3668b49c39cd7e51a4f5244c3
    `);
  }
}
//https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-17&sortBy=publishedAt&apiKey=6d351fb73ddd44659198f9f341835474