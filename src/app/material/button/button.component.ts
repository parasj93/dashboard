import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  notification:any=0;
  opened:boolean = false;
  ngOnInit() {
    
  }
  myContext = {$implicit: 'World', localSk: 'Svet'};

}
