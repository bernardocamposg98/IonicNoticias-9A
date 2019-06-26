import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment) segments;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];
  constructor(private NoticiasService: NoticiasService) {

  }

  ngOnInit() {
    this.segments.value = this.categorias[0];
    this.cargarCategoria( this.categorias[0] );
  }

  cambiarCategoria( event ) {
    this.noticias = [];
    this.cargarCategoria( event.detail.value );
  }

  cargarCategoria(categoria: string, event?) {
    this.NoticiasService.getNoticiasPorCategoria(categoria)
    .subscribe( resp => {
      console.log(resp);
      this.noticias.push( ...resp.articles );

      if(event){
          event.target.complete();
      }
    });
  }

  loadData( event ) {
    this.cargarCategoria( this.segments.value, event );
  }

}
