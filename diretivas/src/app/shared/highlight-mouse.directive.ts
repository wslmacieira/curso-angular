import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(): string {
    // codigo extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver(): void {
    // this.renderer.setStyle(
      //   this.elementRef.nativeElement,
      //   'background-color', 'yellow'
      // );
      this.backgroundColor = 'yellow';
    }
    @HostListener('mouseleave') onMouseLeave(): void {
      // this.renderer.setStyle(
        //   this.elementRef.nativeElement,
        //   'background-color', 'white'
        // );
        this.backgroundColor = 'white';
      }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

}
