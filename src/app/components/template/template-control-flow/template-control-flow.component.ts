import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NgIf, NgFor, NgSwitchCase],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = false;
  public switchCondition = "A";

  public itens: Array<{ name: string}> = [];
  public loadingData$: Observable<string[]> = of([
    'Tenis 1',
    'Tenis 2',
    'Tenis 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }

}


