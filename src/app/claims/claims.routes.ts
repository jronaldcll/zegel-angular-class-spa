import { Route } from '@angular/router';
import { ClaimRegisterComponent } from './claim/claim-register/claim-register.component';
import { ClaimQueryComponent } from './claim/claim-query/claim-query.component';
import { MainComponent } from './claim/main/main.component';
export const CLAIMS_ROUTE: Route[] = [
  {
    path: 'claim',
    children:[
      {
        path: 'registrar-reclamo',
        title: 'Registrar reclamo',
        component: ClaimRegisterComponent,
      },
      {
        path: 'main',
        title: 'Gestión de reclamos',
        component: MainComponent,
      },
      {
        path: 'consultar-reclamo',
        title: 'Consultar Reclamo',
        component: ClaimQueryComponent,
      }
    ]
  }
];
