import { Component, OnInit } from '@angular/core';
import { IProduct } from '../todo';
import {ProductService} from '../todo-service.service';
import { ICartItem } from '../cartItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  netAmount:number=0;
  product :IProduct[];
  cart:ICartItem[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.refreshCall();
    
  }

  getProducts(){
    this.product= this.productService.getProduct();
    this.netAmount=this.productService.getNetAmount();
  }

  addToCart(product):void {
    this.productService.addToCart(product);
    this.refreshCall();
  }

  deleteItem(product):void{
    this.productService.deleteItem(product);
    this.refreshCall();
  }
  
  increaseQuantity(product):void{
    this.productService.increaseQuantity(product);
    this.refreshCall();
    
  }

  decreaseQuantity(product):void{
    this.productService.decreaseQuantity(product);
    this.refreshCall();
  }

  refreshCall(){
    this.cart= this.productService.getCart();
    this.netAmount=this.productService.getNetAmount();
  }
 
}
