import { Component, Input } from '@angular/core';
import { Message } from './../../../models/model.message';
import { MessageEventService } from './../../../events/event.message';
import { MessageStatus } from './../../../enum/enum.messageStatus';
import { MomentModule } from 'angular2-moment';

@Component({
    selector: 'navbar-message',
    templateUrl: './app.navbarmessage.html',
})
export class NavbarMessage {
    counter: any = 0;
    messagelist: Message[] = new Array();

    /**
     *
     */
    constructor(
        private messageeventservice: MessageEventService
    ) {
        this.messageeventservice.changeEmitted$.subscribe(
            data => {
                if (data.message) {
                    switch (data.status) {
                        case MessageStatus.Info:
                            data.img = './../../assets/images/Info.jpg';
                            console.log(this.counter);
                            this.counter = this.counter + 1;
                            this.messagelist.push(data);
                            break;
                        case MessageStatus.Warn:
                            data.img = './../../assets/images/Warning.jpg';
                            this.counter = this.counter + 1;
                            this.messagelist.push(data);
                            break;
                        case MessageStatus.Error:
                            data.img = './../../assets/images/Error.jpg';
                            this.counter = this.counter + 1;
                            this.messagelist.push(data);
                            break;
                        default:
                            break;
                    }
                }
            }
        );
   }
}
