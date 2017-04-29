import { enableProdMode, destroyPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import { UpgradeAdapter } from '@angular/upgrade';
import { Ng2testComponent } from 'app/ng2test/ng2test.component';

//var destroyPlatform = require("@angular/core").destroyPlatform;

declare var angular:any;

if (environment.production) {
  enableProdMode();
}


// Prevents:
// Tried to find bootstrap code, but could not. Specify either statically analyzable bootstrap code or pass in an entryModule to the plugins options.
//platform.destroy();

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {});
//
var adapter = new UpgradeAdapter(AppModule);

var app = angular.module('ng1app');

app.directive('ng2Directive',
  adapter.downgradeNg2Component(Ng2testComponent));

// this seems to have be be AFTER the downgrade stuff...

/**
 * In production mode (ng serve --prod), we get this message:
 * 
 *  A platform with a different configuration has been created. Please destroy it first
 * 
 * Using destroyPlatform() prevents that message, but then we get this exception:
 * Unexpected value 't' imported by the module 'class0'. Please add a @NgModule annotation
 */

//destroyPlatform();

adapter.bootstrap(document.body, ['ng1app']);
