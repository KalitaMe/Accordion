import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentModule } from './ui-component/ui-component.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
