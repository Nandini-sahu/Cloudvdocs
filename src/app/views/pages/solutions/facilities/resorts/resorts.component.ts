import { Component } from '@angular/core';
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component';
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component';
import { StickyHeaderComponent } from '@/app/components/sticky-header.component';
import { features } from '@/app/views/saas/saas-v3/data';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resorts',
  standalone: true,
  imports: [NgbRatingModule,StickyHeaderComponent,HorizontalMenuComponent,Footer1Component,RouterLink],
  templateUrl: './resorts.component.html',
  styleUrl: './resorts.component.scss'
})
export class ResortsComponent {
featuresData = features

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.featuresData.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
