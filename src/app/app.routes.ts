import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    children:[
      {
        path: 'home',
        title: 'Pagina Principal',
        component: HomeComponent,
      },
      {
        path: 'Claims',
        loadChildren: () =>
          import('./claims/claims.routes').then((m)=> m.CLAIMS_ROUTE),
      }
    ]
  }
];
