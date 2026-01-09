import { Route } from '@angular/router'
import { CloudHostingComponent } from './cloud-hosting/cloud-hosting.component'
export const SOLUTIONS_ROUTE: Route[] = [
 {
    path: 'facilities',
    loadChildren: () =>
      import('./facilities/facilities.route').then((mod) => mod.FACILITIES_ROUTE),
  },
  {
    path: 'cloud-hosting-deployment',
    redirectTo: 'solution-services/cloud-hosting-deployment',
    pathMatch: 'full',
  },
]
