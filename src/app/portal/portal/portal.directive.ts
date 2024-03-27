import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { PortalService } from '../services/portal.service';
import { PortalOutletDirective } from '../portal-outlet/portal-outlet.directive';
import { SubjectDestroyService } from 'src/app/services/subject-destroy.service';
import { takeUntil } from 'rxjs';

@Directive({
  selector: '[linksharePortal]',
  providers: [SubjectDestroyService],
})
export class PortalDirective
  implements
    OnInit,
    AfterContentInit,
    AfterViewInit,
    DoCheck,
    OnDestroy,
    AfterViewChecked,
    AfterContentChecked,
    OnChanges
{
  @Input('linksharePortal')
  registeredInOutlet!: string;

  ngDoCheck() {
    console.log('ngDoCheck of parent directive');
  }
  constructor(
    private portalService: PortalService,
    private tr: TemplateRef<any>,
    private destroy$: SubjectDestroyService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges of child directive');
  }
  ngOnInit(): void {
    console.log('ngOnInit of child directive');
    this.portalService.createTemplate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((_) => {
        const outlet: PortalOutletDirective | undefined =
          this.portalService.outlets.get(this.registeredInOutlet);
        if (outlet) {
          outlet.vcr.clear();
          outlet.vcr.createEmbeddedView(this.tr);
        }
      });
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit of child directive');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked of child directive');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of child directive');
    // const outlet: PortalOutletDirective | undefined =
    //   this.portalService.outlets.get(this.registeredInOutlet);
    // if (outlet) {
    //   outlet.vcr.clear();
    //   outlet.vcr.createEmbeddedView(this.tr);
    // }
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked of child directive');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy of child directive');
  }
}
