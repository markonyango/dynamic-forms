import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormCheckboxComponent } from './form-checkbox.component';

describe('FormCheckboxComponent', () => {
  let comp: FormCheckboxComponent;
  let fixture: ComponentFixture<FormCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCheckboxComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FormCheckboxComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('has correct form element', () => {
    let element = fixture.nativeElement.querySelector('mat-checkbox') as HTMLElement;
    expect(element.hasAttribute('checked')).toBe(true);
    expect(element.attributes['checked']).toBe(true);
  });
});
