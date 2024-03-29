import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentComponent } from './template-component.component';

describe('TemplateComponentComponent', () => {
  let component: TemplateComponentComponent;
  let fixture: ComponentFixture<TemplateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
