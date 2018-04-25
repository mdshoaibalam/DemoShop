import { Injectable } from '@angular/core';
import {IProduct} from './todo';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ICartItem} from './cartItem';


@Injectable()
export class ProductService {
  myCart:ICartItem[] = [];
  ItemCount ={};
  netAmount:number=0;
  product :IProduct[] = [{productId:'FT1',productName:'FastTrack',productPrice:50,productImage:'../../assets/images/11.jpg', status:true},
  {productId:'TT1',productName:'Tittan',productPrice:50,productImage:'../../assets/images/12.jpg', status:true},
  {productId:'FS1',productName:'Fossil',productPrice:49,productImage:'../../assets/images/13.jpg', status:true},
  {productId:'FS5',productName:'Fossil 500',productPrice:55,productImage:'../../assets/images/FS12.jpg',status:true},
  {productId:'PM1',productName:'Puma',productPrice:45, productImage:'../../assets/images/TT12.jpg', status:true} 
  ];
  constructor(private _http:Http) { }

  getProduct():IProduct[]{
    return this.product;
   // return this._http.get('http://localhost:7770/api/').map((response:Response)=> <IProduct[]>response.json())
  }
  addToCart(_product:IProduct):void{
    let Product={     
     id:_product.productId,
     name:_product.productName,
     price:_product.productPrice
    }
  let cart = new ICartItem(_product.productId,_product.productPrice,_product.productName,1);

  let isFound=false;
  if(this.myCart.length){
  
  this.myCart.map((item)=>{

  if(item.id==cart.id){
    item.qty+=1;
    isFound=true;
  }
  
  });
  if(!isFound){
    this.myCart.push(cart);
  }
  }else{
    this.myCart.push(cart);
  }

  } 

  getCart():ICartItem[]{
     
    console.log(this.myCart);
    return this.myCart;
  }

  decreaseQuantity(product){
    for(let i=0;i<this.myCart.length;i++){
      if(this.myCart[i].id==product.id){
       
        if(this.myCart[i].qty==1){
          this.myCart.splice(i,1);
         
        } 
        else{
          this.myCart[i].qty-=1;
        }
     
      }      
    }
    this.myCart=this.myCart;
  }
  increaseQuantity(product){
    for(let i=0;i<this.myCart.length;i++){
      if(this.myCart[i].id==product.id){
        this.myCart[i].qty+=1;
      }      
    }
  }

  deleteItem(product):void{
    for(let i=0;i<this.myCart.length;i++){
      if(this.myCart[i].id==product.id){
        this.myCart.splice(i,1);       
      }
      
      }
  }

  getNetAmount():number{
    this.netAmount=0;
    this.myCart.map((item)=>{
    this.netAmount +=  item.qty*item.price;
    });
    return this.netAmount;
  }

}
