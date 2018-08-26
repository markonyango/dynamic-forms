import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './generic-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('GenericFormComponent', () => {
  let comp: GenericFormComponent;
  let formModule: FormsModule;
  let reactiveFormsModule: ReactiveFormsModule;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [GenericFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder],
    });
    await TestBed.compileComponents();

    formModule = TestBed.get(FormsModule);
    reactiveFormsModule = TestBed.get(ReactiveFormsModule);
    fixture = TestBed.createComponent(GenericFormComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('config defaults to: []', () => {
    expect(comp.config).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'createGroup');
      comp.ngOnInit();
      expect(comp.createGroup).toHaveBeenCalled();
    });
  });

  describe('createGroup', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(FormBuilder);
      spyOn(formBuilderStub, 'group');
      comp.createGroup();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });

    it('test', () => {
      expect(1).toBe(1);
    });
  });
});
