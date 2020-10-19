import { Component } from '@angular/core';
import  urlData  from '../ui.config.json';

interface Sites {
  id: number;
  site: string;
  url: string;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  sites: Sites[] = urlData;
  currDiv: string = 'accordion'; 

  constructor(){}

  ShowDiv(val: string) {
    this.currDiv = val;
}

}

