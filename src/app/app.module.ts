import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { Router } from '@angular/router';
import './rxjs-extensions';

//Componenten
import { AppComponent } from './app.component';
import { AppNavTop } from './core/navbar/app.navTop';
import { LanguageList } from './shared/shared.langData-list';
import { AppRoutingModule, routableComponents } from './app.routing.module';
import { LoginUserEventService } from './events/event.loginUser';
import { ApiService } from './services/service.apiCalls';
import { AuthService } from './services/service.loginUser';
import { CurrentUserData } from './models/model.currentUser';
import { SessionStorageService } from 'ng2-webstorage';

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
    AppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'MeanApps', separator: '.', caseSensitive: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LanguageList,
    LoginUserEventService,
    ApiService,
    AuthService

  ],
  bootstrap: [AppComponent
  ],
  schemas: []

})
export class AppModule {
  
  sessiondata: CurrentUserData;
  
  constructor(private authservice: AuthService,
    private router: Router,
    private localst: SessionStorageService
  ){
    // Sessiondata clear
    this.sessiondata = new CurrentUserData('***', '', false);
    this.localst.store('currentuser', this.sessiondata);
        
    // check if serverside an failed session exits
    this.authservice.isAuth().subscribe((data) => {
      if (data.value) {
        this.router.navigate(['main']);
        return;
      }
      this.router.navigate(['login'])
      return;
    })
  };
  
}

