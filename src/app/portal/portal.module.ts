import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalOutletDirective } from './portal-outlet/portal-outlet.directive';
import { PortalDirective } from './portal/portal.directive';

@NgModule({
  declarations: [PortalOutletDirective, PortalDirective],
  imports: [CommonModule],
  exports: [PortalOutletDirective, PortalDirective],
})
export class PortalModule {}
