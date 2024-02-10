import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-component',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './template-component.component.html',
  styleUrl: './template-component.component.scss'
})
export class TemplateComponent {
  public name = "William";
  public age = 22;
  public ageUp = (this.age > 18 ? "Você é maior de idade" : "Menor de idade");

  
  public isDisabled = true;
  public srcValue = 
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  public isTextDecoration = this.age >= 18 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }
  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) { //posso utilizar para fazer uma animação que se arrasta pelo mouse
    return console.log({
      clientx: event.clientX,
      clienty: event.clientY,
    });
  }
}
