import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { CommonModule,NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIFComponent } from './components/directive/ng-if/ng-if.component';
import { NgForComponent } from './components/directive/ng-for/ng-for.component';
import { NgClassComponent } from './components/directive/ng-class/ng-class.component';
import { NgStyleComponent } from './components/directive/ng-style/ng-style.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RoutingComponent } from './components/routing/routing.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { CoustomerComponent } from './components/api/coustomer/coustomer.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NaPipe } from './pipes/na.pipe';
import { ProgresBarComponent } from './shared/progres-bar/progres-bar.component';
import { ReusableUiComponent } from './components/reusable-ui/reusable-ui.component';
import { ClassInterfaceComponent } from './components/class-interface/class-interface.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { NgTempNgContainerComponent } from './components/ng-temp-ng-container/ng-temp-ng-container.component';
import { FormArrayComponent } from './components/form-array/form-array.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgIFComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ControlStatementComponent,
    SignalComponent,
    LinkedSignalComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RoutingComponent,
    HomepageComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    CoustomerComponent,
    ResourceApiComponent,
    LifeCycleComponent,
    PipeComponent,
    NaPipe,
    ProgresBarComponent,
    ReusableUiComponent,
    ClassInterfaceComponent,
    LoginComponent,
    LayoutComponent,
    ViewChildComponent,
    NgTempNgContainerComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
