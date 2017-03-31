import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
  ],
  providers: [] /*,
  bootstrap: [AppComponent] */
})
export class AppModule {
  ngDoBootstrap() {}
  
}
