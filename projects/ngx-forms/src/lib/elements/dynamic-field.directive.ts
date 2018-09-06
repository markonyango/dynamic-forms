import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit,
  ComponentRef,
  OnChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { DynamicFieldConfig } from './dynamic-field-config';
import { DynamicField } from './dynamic-field';

const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  checkbox: FormCheckboxComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements DynamicField, OnInit, OnChanges {
  @Input() public config: DynamicFieldConfig;
  @Input() public group: FormGroup;

  public component: ComponentRef<DynamicField>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  public ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
  
  public ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }

    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<DynamicField>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
