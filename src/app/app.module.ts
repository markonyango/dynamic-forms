import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GenericFormModule } from './generic-form/generic-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    GenericFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
