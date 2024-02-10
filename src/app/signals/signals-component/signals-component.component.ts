import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-component',
  standalone: true,
  imports: [],
  templateUrl: './signals-component.component.html',
  styleUrl: './signals-component.component.scss'
})
export class SignalsComponentComponent {
  public firstName = signal('William');
  public lastName = signal('Moro');

  public fullName = computed( () => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  /*
    effect - raramente são necessários na maioria dos códigos, mas podem ser úteis em circunstâncias específicas.
    - Registro de dados sendo exibidos e quando eles mudam, seja para análise ou como ferramente de depuração.

    - Manter os dados sincronizados com o window.localStorage.

    - Adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe de modelo.

    - Executar renderização personalizada em um <canvas>, biblioteca de gráficos ou outra biblioteca de UI de terceiros.
  */

  constructor() {
    effect(() => {
      console.log(this.firstName());
      if(this.firstName() === "Raphael") {
        alert('Menor de idade');
      }
    })
  }

  public updateName() {
    return this.firstName.set("Raphael")
  }

  public updateArray() {
    this.array.update( (oldValue: Array<number>) => {
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1];
    })
  }
}
