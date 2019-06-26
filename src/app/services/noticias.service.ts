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

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPagina = 0;

  constructor(private http: HttpClient) { }

  llamarAPI<T>(query) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }
  getNoticias() {
    this.headlinesPage++;
    return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us&page=${ this.headlinesPage }`);
  }

  getNoticiasPorCategoria(category: string) {
    if( this.categoriaActual === category) {
      this.categoriaPagina++;
    } else {
      this.categoriaPagina = 1;
      this.categoriaActual = category;
    }
    return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us&category=${category}&page=${ this.categoriaPagina}`);
  }
}
