import { Component, Input, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';


@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
 // templateUrl: './purchasetable.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  @Input() input:IPurchase = {
    purchase_id: 0,
    product: {
      product_id: 0,
      price: 0,
      description: '',
      seller: {
        user_id:0,    //unique id no need to display this
        fname:"",
        lname:"",
        email:""      //don't know if we should display this
      },
      status: 0,
      typeid: 0
    },
    address:"",
    purchase: 0,
    delivery: 0,
    status: 0
  };



}
