import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-paypal-page',
  templateUrl: './paypal-page.component.html',
  styleUrls: ['./paypal-page.component.scss']
})
export class PaypalPageComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  product = {
    price: 49.99,
 
  };

  paidFor = false;


  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]

          });
        },
        onApprove: async (data, actions) => {
          //do not need to capture payments here, can send data from callback to backend server later **
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
          onError: err => {
            console.log(err);
          }
      })
      .render(this.paypalElement.nativeElement);
  }

}


