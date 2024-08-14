import { Route } from '@angular/router';
import { RegisterProductComponent } from './product/register-product/register-product.component';
import { QueryProductComponent } from './product/query-product/query-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
export const PRODUCT_ROUTE: Route[] = [
  {
    path: 'product',
    children:[
      {
        path: 'registrar-producto',
        title: 'Registrar producto',
        component: RegisterProductComponent,
      },
      {
        path: 'consultar-producto',
        title: 'Consultar producto',
        component: QueryProductComponent,
      },
      {
        path: 'actualizar-producto/:idProduct',
        title: 'Actualizar producto',
        component: UpdateProductComponent,
      },
      {
        path: 'listar-productos',
        title: 'Listar productos',
        component: ListProductComponent,
      }
    ]
  }
];
