import { Route } from '@angular/router';
import { RegisterProductComponent } from './product/register-product/register-product.component';
export const PRODUCT_ROUTE: Route[] = [
  {
    path: 'product',
    children:[
      {
        path: 'registrar-producto',
        title: 'Registrar producto',
        component: RegisterProductComponent,
      }
    ]
  }
];
