import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = 'white';
  @Input('appHighlight') highlightColor = 'yellow';

  @HostBinding('style.backgroundColor') get setColor(): string {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver(): void {
      this.backgroundColor = this.highlightColor;
    }

  @HostListener('mouseleave') onMouseLeave(): void {
      this.backgroundColor = this.defaultColor;
    }

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
