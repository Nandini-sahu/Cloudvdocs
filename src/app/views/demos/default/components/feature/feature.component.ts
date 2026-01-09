import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  @ViewChild('featuresGrid', { static: true }) featuresGrid!: ElementRef<HTMLElement>;

  private scrollStep = 260; // px per click (tunable)

  scrollNext() {
    const el = this.featuresGrid.nativeElement;
    const amount = Math.min(this.scrollStep, el.scrollWidth - el.scrollLeft - el.clientWidth);
    el.scrollBy({ left: amount || this.scrollStep, behavior: 'smooth' });
  }

  scrollPrev() {
    const el = this.featuresGrid.nativeElement;
    const amount = Math.min(this.scrollStep, el.scrollLeft);
    el.scrollBy({ left: -(amount || this.scrollStep), behavior: 'smooth' });
  }

  onWheel(event: WheelEvent) {
    // Prefer horizontal scroll when user scrolls vertically over the grid
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
      event.preventDefault();
      this.featuresGrid.nativeElement.scrollBy({ left: event.deltaY, behavior: 'smooth' });
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const el = this.featuresGrid.nativeElement;
    if (document.activeElement === el) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.scrollNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.scrollPrev();
      }
    }
  }
}
