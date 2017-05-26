import { Component, Input, OnInit } from '@angular/core';
import { LanguageList } from './../../shared/shared.langData-list'
import { AuthService } from './../../services/service.loginUser';
import { SessionStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';
import { CurrentUserData } from './../../models/model.currentUser';
import { MessageEventService } from './../../events/event.message';
import { Message } from './../../models/model.message';
import { MessageStatus } from './../../enum/enum.messageStatus';

class MenuItems {
    public Name: string;
    public Link: any[];
    constructor(name, link) {
        this.Name = name;
        this.Link = link;
    }
}

@Component({
    selector: 'app-navbartop',
    styleUrls: ['./app.navTop.css'],
    templateUrl: './app.navTop.html',
})

export class AppNavTop implements OnInit {
    menuItems: Array<MenuItems>;
    picCompany: any;
    hrefCompany: any;
    currentUser = '***';
    langservice = this.langservicelist.getLanguagelist();
    authenticated: boolean;

    constructor(private langservicelist: LanguageList,
        private authservice: AuthService,
        private localst: SessionStorageService,
        private router: Router,
        private messageeventservice: MessageEventService
    ) {
        
    };

    ngOnInit() {
        this.menuItems = [
            new MenuItems('Main', '/main'),
            new MenuItems('Setup', '/setup'),
            new MenuItems('Statistic', '/statistic')
        ]
        this.picCompany = '../../assets/images/AtlasLogo.png';
        this.hrefCompany = 'www.atlascopco.de/de-de';

        this.localst.observe('currentuser').subscribe((data) => { this.currentUser = data.username, this.authenticated = data.auth });
    };

    logout() {
        this.authservice.Logout().subscribe((data) => {
            this.router.navigate(['login']);
        }, (err) => {
            this.router.navigate(['login']);
        });
    };

    login() {
        //Event Service Beispiel
        let m = new Message('jetzt', Date.now(), MessageStatus.Info)
        this.messageeventservice.emitChange(m);
 
        
        //this.router.navigate(['login']);
    }

}