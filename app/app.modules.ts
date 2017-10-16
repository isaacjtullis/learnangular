import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component.app';

// decorators modify javascript classes
@NgModule({
  // imports modules we will need, features for your app
  imports: [
    BrowserModule
  ],
  // declarations will allow us to import all the modules we need into our app
  declarations: [
    AppComponent
  ],
  // this is the main container for the entire app (THE ROOT)
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
