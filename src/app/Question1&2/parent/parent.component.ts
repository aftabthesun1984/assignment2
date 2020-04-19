import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public counter:number =0;
  
  public userText:string;

  onCounter(){
    //debugger;
    this.counter++;
  }
  onReset(){
    this.counter=0;
  }

}
