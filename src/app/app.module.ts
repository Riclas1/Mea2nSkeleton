import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

//Componenten
import { AppComponent } from './app.component';
import { AppNavTop } from './core/navbar/app.navTop';
import { LanguageList } from './shared/shared.langData-list';
import { AppRoutingModule , routableComponents } from './app.routing.module';
import { LoginUserEventService } from './events/event.loginUser';
import { ApiService } from './services/service.apiCalls'

@NgModule({
  declarations: [
    AppComponent,
    AppNavTop,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LanguageList,
    LoginUserEventService,
    ApiService
    
  ],
  bootstrap: [AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
