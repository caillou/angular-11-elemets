import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { UIButtonComponent } from './uibutton/uibutton.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    UIButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    UIButtonComponent
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector){
    const webComponent = createCustomElement(UIButtonComponent, {injector});
    customElements.define('ui-button', webComponent);
  }
  ngDoBootstrap(): void {
  }
}
