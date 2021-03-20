import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if (!condition){
      this.viewContainerREf.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerREf.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerREf: ViewContainerRef
  ) { }

}
