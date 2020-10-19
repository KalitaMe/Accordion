import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.scss'],
})
export class UiComponentComponent implements OnInit {

  title = "Accordion";

  constructor() { }

  ngOnInit(): void {
  }

}
