import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
  // template: `
  //   <app-server></app-server>
  //   <!--<div>you can add inline html this way</div>-->
  //   <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
