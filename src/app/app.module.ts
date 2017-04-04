import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { Ng2testComponent } from './ng2test/ng2test.component';

@NgModule({
  declarations: [
    AppComponent,
    Ng2testComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
 }
