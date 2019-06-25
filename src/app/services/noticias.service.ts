import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interface';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
let headers = new HttpHeaders({
  'X-Api-key': apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  llamarAPI<T>(query) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }
  getNoticias() {
    /*return this.http.get<RespuestaNoticias>(`
    https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-19&sortBy=publishedAt&apiKey=526eaee3668b49c39cd7e51a4f5244c3
    `);*/
    return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us`);
  }

  getNoticiasPorCategoria(category: string) {
    return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us&category=${category}`);
  }
}
