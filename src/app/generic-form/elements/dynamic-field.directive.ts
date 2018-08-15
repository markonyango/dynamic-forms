import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnInit,
  ComponentRef,
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
export class DynamicFieldDirective implements OnInit {
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
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<DynamicField>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
