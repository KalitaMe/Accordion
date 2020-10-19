import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentComponent } from './ui-component.component';
import { AccordionItemComponent } from './accordion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [UiComponentComponent, AccordionItemComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [UiComponentComponent, AccordionItemComponent]
})
export class UiComponentModule {
 }
