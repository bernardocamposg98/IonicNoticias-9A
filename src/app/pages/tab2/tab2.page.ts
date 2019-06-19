import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment) segments;
  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor() {}

  ngOnInit() {
    this.segments.value = this.categorias[0];
  }

}
