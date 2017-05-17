import {Component, Input, OnInit } from '@angular/core';
import {LanguageList } from './../../shared/shared.langData-list'
import { LoginUserEventService } from './../../events/event.loginUser';



class MenuItems{
    public Name : string;
    public Link : any[];
    constructor(name , link){
        this.Name = name;
        this.Link = link;
    }
}

@Component({
    selector:'app-navbartop',
    styleUrls:['./app.navTop.css'],
    templateUrl:'./app.navTop.html',
   
})

export class AppNavTop implements OnInit{
    _menuItems : Array<MenuItems>;
    _picCompany : any;
    _hrefCompany : any;
    _currentUser: string;
    _langservice = this.langservice.getLanguagelist();
    
    constructor(private langservice : LanguageList,
            private loginUsershared : LoginUserEventService
        ){
          loginUsershared.changeEmitted$.subscribe(
        data => {
            this._currentUser = data.username;
        });
    };
    
    ngOnInit(){
        this._menuItems = [
            new MenuItems('Main','/main'),
            new MenuItems('Setup','/setup'),
            new MenuItems('Statistic', '/statistic')
        ]

        
        this._picCompany = '../../assets/images/AtlasLogo.png';
        this._hrefCompany = 'www.atlascopco.de/de-de';

        
    };

   
}