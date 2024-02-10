import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameImput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;

  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit() {
    console.log(this.nameImput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name);
  }

}
