import { Route } from '@angular/router'

export const FACILITIES_ROUTE: Route[] = [
  {
    path: 'hotel',
    loadComponent: () =>
      import('./hotel/hotel.component').then((mod) => mod.HotelComponent),
  },
  {
    path: 'resorts',
    loadComponent: () =>
      import('./resorts/resorts.component').then((mod) => mod.ResortsComponent),
  },
  
]