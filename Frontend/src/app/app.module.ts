import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { EditorService } from "./editor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    HttpClientModule
  ],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
