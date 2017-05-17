export class currentUserdata {
  username : String;
  level :String;
  auth : boolean;
  constructor(name, level , auth){
    this.username = name;
    this.level = level;
    this.auth = auth;
  }};