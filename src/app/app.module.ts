import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

//Componenten
import { AppComponent } from './app.component';
import { AppNavTop } from './core/navbar/app.navTop';
import { LanguageListService } from './core/navbar/app.navLaglist.service';
import { AppRoutingModule , routableComponents } from './app.routing.module';
import { LoginUserEventService } from './events/event.loginUser.service';
import { ApiService } from './services/api.service'

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
    LanguageListService,
    LoginUserEventService,
    ApiService
    
  ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
