import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { SignalComponent } from './components/signal/signal/signal.component';
import { NgIFComponent } from './components/directive/ng-if/ng-if.component';
import { NgForComponent } from './components/directive/ng-for/ng-for.component';
import { NgClassComponent } from './components/directive/ng-class/ng-class.component';
import { NgStyleComponent } from './components/directive/ng-style/ng-style.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { RoutingComponent } from './components/routing/routing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { CoustomerComponent } from './components/api/coustomer/coustomer.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReusableUiComponent } from './components/reusable-ui/reusable-ui.component';
import { ClassInterfaceComponent } from './components/class-interface/class-interface.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './auth/auth.guard';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: "homepage", component: HomepageComponent},
      { path: "dataBinding", component: DataBindingComponent },
      { path: "ngif", component: NgIFComponent },
      { path: "ngfor", component: NgForComponent },
      { path: "ngclss", component: NgClassComponent },
      { path: "ngstye", component: NgStyleComponent },
      { path: "controlstatement", component: ControlStatementComponent },
      { path: "signal", component: SignalComponent },
      { path: "linkedsignal", component: LinkedSignalComponent },
      { path: "routing", component: RoutingComponent },
      { path: "templateform", component: TemplateFormComponent },
      { path: "reactiveform", component: ReactiveFormComponent },
      { path: "coustomerapi", component: CoustomerComponent },
      { path: "rsourceapi", component: ResourceApiComponent },
      { path: "lifecycle", component: LifeCycleComponent },
      { path: "pipe", component: PipeComponent },
      { path: "reusable", component: ReusableUiComponent },
      { path: "class-interface", component: ClassInterfaceComponent },
      { path: "viewChild", component: ViewChildComponent },
      { path: "ngTemplateNgContainer", component: NgTempNgContainerComponent },
      { path: "formArray", component: FormArrayComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
