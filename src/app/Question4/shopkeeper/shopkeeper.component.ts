import { Component, OnChanges, Input } from '@angular/core';
import { ImageserviceService } from './imageservice.service';

@Component({
  selector: 'app-shopkeeper',
  templateUrl: './shopkeeper.component.html',
  styleUrls: ['./shopkeeper.component.css']
})
export class ShopkeeperComponent implements OnChanges {
  title: string = "Shopkeeper Image Galary";
  
  visibleImages : any[] = [];
  @Input() filterBy?:string = 'all';  
  constructor(private imageService : ImageserviceService) {
    this.visibleImages = this.imageService.getImages();
   }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
    }  

}
