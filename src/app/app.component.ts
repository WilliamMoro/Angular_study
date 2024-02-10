import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateComponent } from './components/template/template-component/template-component.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponentComponent } from './signals/signals-component/signals-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateComponent, FormsModule, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent, SignalsComponentComponent],
  template: ` <!-- <router-outlet /> -->
    <!-- <app-new-component/>
    <app-template-component/>
    <app-template-variables/>
    <app-template-control-flow/> 
    <app-template-deferrable-views/> -->
    
    <h1>Curso de Angular</h1>
    <app-signals-component/>
  `
  
})
export class AppComponent {}
