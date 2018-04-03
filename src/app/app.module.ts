import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { RoverFormComponent } from './rover-form/rover-form.component';


@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
