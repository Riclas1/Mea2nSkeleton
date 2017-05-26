import { MessageStatus } from './../enum/enum.messageStatus'

export class Message {
  message: String;
  date: Date;
  status : MessageStatus;
  img : String;
  number : Number;

  constructor(message, date, status) {
    this.message = message;
    this.date = date;
    this.status = status;
  }
};