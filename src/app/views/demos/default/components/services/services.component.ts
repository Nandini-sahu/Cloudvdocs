import { Component } from '@angular/core'
import { services } from '../../data'
import { StickyDirective } from '@/app/components/sticky.directive'
@Component({
  selector: 'default-services',
  standalone: true,
  imports: [StickyDirective],
  templateUrl: './services.component.html',
  styles: `
   p {
  font-size: 14px !important;
  }
  
  `,
})
export class ServicesComponent {
  servicesData = services
}
