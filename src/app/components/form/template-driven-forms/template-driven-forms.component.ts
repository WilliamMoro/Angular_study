import { NgFor } from '@angular/common';
import { Component, signal, } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida: string, preco:string}>>([
    {
      comida: 'x-salada', 
      preco: 'R$10,00'
    },
    {
      comida: 'x-bacon', 
      preco: 'R$15,00'
    },
    {
      comida: 'x-tudo', 
      preco: 'R$21,00'
    },
  ]);

  public submitForm(form: NgForm) {
    console.log(form.valid);
    if(form.valid) {
      console.log(form.value);
      alert('Formulário enviado!')
    }
  }
}
