import { Component, OnInit } from '@angular/core';
import { CardlayoutService } from './cardlayout.service';

@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.css']
})
export class CardlayoutComponent implements OnInit {
  productName: string = "";
  discription: string = "";
  companyName: string = "";

  public title :string = "Product List"
  productList : any[] = []; 
  productDetail :any;   
  
  constructor(private cardlayoutService : CardlayoutService) {
    this.productList = this.cardlayoutService.getProductList();        
    this.productName = this.productList[0].name;
    this.discription = this.productList[0].discription;
    this.companyName = this.productList[0].company;
   }
   ngOnInit() {
  }
   onClick(id) {
    this.productDetail = this.productList.slice(0).find(n=>n.id===id);
    if(this.productDetail)
    {
        this.productName = this.productDetail.name;
        this.discription = this.productDetail.discription;
        this.companyName = this.productDetail.company;
    }
  }
}
