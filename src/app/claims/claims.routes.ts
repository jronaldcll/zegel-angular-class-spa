import { Route } from '@angular/router';
import { ClaimRegisterComponent } from './claim/claim-register/claim-register.component';
import { ClaimQueryComponent } from './claim/claim-query/claim-query.component';
import { MainComponent } from './claim/main/main.component';
import { ClaimNotificationComponent } from './claim/claim-query/claim-notification/claim-notification.component';
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
      },
      {
        path: 'notificar-reclamo',
        title: 'Notificar Reclamo',
        component: ClaimNotificationComponent,
      },
      {
        path: 'notificar-reclamo/:id',
        title: 'Notificar Reclamo',
        component: ClaimNotificationComponent,
      }
    ]
  }
];
