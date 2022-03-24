import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
