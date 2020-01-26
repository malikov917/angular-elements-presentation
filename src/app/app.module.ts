import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ]
  // !!! NO BOOTSTRAP COMPONENT !!!
})
export class AppModule {
    constructor(private injector: Injector) { }
    ngDoBootstrap() {
      const ngElement = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define('my-element', ngElement);
    }
}