import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardlayoutService {
  visibleProduct= [];
  constructor() { }
  
  getProductList(){    
    return this.visibleProduct = Products.slice(0);
  }
   
}

const Products= [
    { id:"1", name: 'Samsung s8', discription: 'Samsung s8 price:  40000', company: 'Samsung' },
    { id:"2", name: 'Samsung s9', discription: 'Samsung s9 price:  62000', company: 'Samsung' },
    { id:"3", name: 'iPhone 8', discription: 'iPhone 8 price: 60000', company: 'Apple' },
    { id:"4", name: 'Pixel 2', discription: 'Pixel2 price :53000', company: 'Google' },
];


