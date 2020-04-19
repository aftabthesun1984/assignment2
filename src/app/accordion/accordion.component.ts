import { Component, OnInit, Input } from '@angular/core';
import { CardlayoutService } from '../cardlayout/cardlayout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {  
  @Input() title:string;
  @Input() isHidden=false;

  constructor(private cardlayoutService : CardlayoutService, private route:ActivatedRoute) {
   }
  ngOnInit(){
    
  }
}


  
