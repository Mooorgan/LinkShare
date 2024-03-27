import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[linkshareViewcontainerref]',
  exportAs: 'linkshareViewcontainerref',
})
export class ViewcontainerrefDirective {
  constructor(readonly vcr: ViewContainerRef) {}
}
