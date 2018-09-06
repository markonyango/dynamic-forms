# ngx-forms

This project is based on the Dynamic Form generator by Todd Motto and the works of Netanel Basal. By providing a configuration array of element configuration objects
to the module it will yield a fully styled (Material) form. 

```
public config: any = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [
        Validators.compose([
          Validators.required, Validators.maxLength(5)
        ])
      ]
    },
    {
      type: 'select',
      label: 'Favourite programming language',
      name: 'programming_language',
      multiple: true,
      options: ['JavaScript', 'C/C++', 'Java', 'other'],
      placeholder: 'Select an option'
    },
    {
      type: 'checkbox',
      label: 'Active',
      name: 'active',
      checked: false
    }
  ];
```

To validate a form field, simply make use of Angulars own Validators module and compose a Validator as seen above.

Furthermore, the generated form will be available in the @ngrx/store and automatically update its value with each keystroke. There is no limit to how many forms can exist in parallel at any time (each form requires a unique id which needs to be provided).

## Build

Run `yarn build ngx-forms` or `npm build ngx-forms` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

