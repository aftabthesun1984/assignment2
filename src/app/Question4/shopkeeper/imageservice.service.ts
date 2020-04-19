import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  constructor() { }  
  visibleImages= [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  
}
const IMAGES= [
  {"id":1, "category":"birthdaycard", "caption":"View from a birthday", "url":"assets/images/Birthday1.jpg"},
  {"id":2, "category":"birthdaycard", "caption":"View from a birthday", "url":"assets/images/Birthday2.jpg"},
  {"id":3, "category":"freindshipcard", "caption":"View from a birthday", "url":"assets/images/Friendshipcard1.jpg"},
  {"id":4, "category":"freindshipcard", "caption":"View from a birthday", "url":"assets/images/Freindshipcard2.jpg"},
];
