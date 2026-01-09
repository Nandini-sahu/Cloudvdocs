import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'


@Component({
  selector: 'default-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: `
  .new {
   background-color: black !important;
   color:white !important;
  }
  `,
})
export class AboutComponent {
  
}
