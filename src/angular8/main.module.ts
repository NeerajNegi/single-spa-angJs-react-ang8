import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import AppComponent from './app.component';
import { enableProdMode } from '@angular/core'
import { APP_BASE_HREF } from "@angular/common"

enableProdMode()

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular8/' }],
  declarations: [
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export default class MainModule {
}
