import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import { UpgradeAdapter } from '@angular/upgrade';

import {Ng2testComponent} from 'app/ng2test/ng2test.component';
declare var angular:any;

if (environment.production) {
  enableProdMode();
}


// Prevents:
// Tried to find bootstrap code, but could not. Specify either statically analyzable bootstrap code or pass in an entryModule to the plugins options.
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {});

var adapter = new UpgradeAdapter(AppModule);


var app = angular.module('ng1app');

app.directive('ng2Directive',
  adapter.downgradeNg2Component(Ng2testComponent));

// this seems to have be be AFTER the downgrade stuff...
adapter.bootstrap(document.body, ['ng1app']);
