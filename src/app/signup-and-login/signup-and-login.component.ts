import {
  Component,
  EnvironmentInjector,
  Injector,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { SubjectDestroyService } from '../services/subject-destroy.service';
import { takeUntil } from 'rxjs';
import { SignupOrLoginComponent } from './signup-or-login/signup-or-login.component';
import { SignUpLoginData } from './signup-or-login/signUpLoginData.token';
import { FormBuilder } from '@angular/forms';
import { ViewcontainerrefDirective } from '../viewcontainerref.directive';

@Component({
  selector: 'linkshare-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.scss'],
  providers: [SubjectDestroyService],
})
export class SignupAndLoginComponent implements OnInit, OnDestroy {
  url!: keyof SignUpLoginData;
  form = this.fb.group({
    email: '',
    password: '',
  });
  @ViewChild('vr', { read: ViewContainerRef })
  vcr1!: ViewContainerRef;
  @ViewChild(ViewcontainerrefDirective)
  vcr2!: ViewcontainerrefDirective;
  constructor(
    private route: ActivatedRoute,
    private destroy$: SubjectDestroyService,
    private vcr: ViewContainerRef,
    private ei: EnvironmentInjector,
    // private ngModuleRef: NgModuleRef<AppModule>,
    private injector: Injector,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.url.pipe(takeUntil(this.destroy$)).subscribe(([data]) => {
      if (data?.path) {
        const { path } = data;
        path === 'signup' && (this.url = path);
      } else {
        this.url = 'login';
      }
    });

    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ components }) => {
        if (!!components && components.length > 0) {
          const [component] = components as Type<SignupOrLoginComponent>[];
          this.vcr?.clear();
          const componentRef = this.vcr.createComponent(component, {
            environmentInjector: this.ei,
            // ngModuleRef: this.ngModuleRef,
            injector: this.injector,
          });
          componentRef.setInput('url', this.url);
        }
      });
  }

  ngOnDestroy(): void {
    this.vcr.clear();
  }
}
