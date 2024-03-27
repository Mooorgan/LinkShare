import { Injectable } from '@angular/core';
import { PortalOutletDirective } from '../portal-outlet/portal-outlet.directive';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  outlets = new Map<string, PortalOutletDirective>();
  private readonly createTemplateSubj = new Subject<void>();
  readonly createTemplate$ = this.createTemplateSubj.asObservable();

  registerOutlets(outlet: PortalOutletDirective) {
    this.outlets.set(outlet.portalOutletName, outlet);
    this.createTemplateSubj.next();
  }
}
