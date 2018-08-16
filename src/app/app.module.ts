import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GenericFormModule } from './generic-form/generic-form.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    GenericFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
