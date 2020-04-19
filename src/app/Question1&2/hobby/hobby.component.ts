import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input() hobby:string;
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: any){
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
    }
  }

}
