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
  ViewContainerRef,
} from '@angular/core';
import { PortalService } from '../services/portal.service';

@Directive({
  selector: '[linksharePortalOutlet]',
})
export class PortalOutletDirective
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
  @Input('linksharePortalOutlet')
  portalOutletName!: string;

  ngDoCheck() {
    console.log('ngDoCheck of parent directive');
  }
  constructor(
    private portalService: PortalService,
    public vcr: ViewContainerRef
  ) {
    console.log('constructor of parent directive');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges of parent directive');
  }
  ngOnInit(): void {
    console.log('ngOnInit of parent directive');
    this.portalService.registerOutlets(this);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit of parent directive');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked of parent directive');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit of parent directive');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked of parent directive');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy of parent directive');
  }
}
