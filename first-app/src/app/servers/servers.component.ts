import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus: string = "no server was created !";
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
  // userName: string = '';
  // userValid: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    
    // this.userValid = false;
  }
  
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "server was Created ! name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // onUserNameUpdate(event: Event) {
  //   if ((<HTMLInputElement>event.target).value.length > 0) {
  //     this.userValid = true;
  //   } else {
  //     this.userValid = false;
  //   }
  // }

  // resetUserName() {
  //   this.userName = '';
  // }

}
