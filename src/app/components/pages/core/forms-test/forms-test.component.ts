import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrl: './forms-test.component.scss'
})
export class FormsTestComponent implements OnInit{
  test: boolean = false;
  public fields: any = [];
  dynamicFormGroup!: FormGroup;

  model: any = {
    question1: {
      value: '1',
      label: 'Dans quel cas de figure un formulaire par modèle est-il le plus adapté ?',
      type: 'radio',
      options:['Formulaires dynamiques', 'Validations complexes', 'Utilisation de ngModel', 'Très structuré pour les tests'],
      rules: {
        required: true
      }
      
    },
  }

  ngOnInit(): void {
    this.buildForm;
  };

  buildForm(){
    const formGroupFields = this.getFormControlsFields()
    this.dynamicFormGroup = new FormGroup(formGroupFields);
    console.log(this.dynamicFormGroup)
  };

  private getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {

      const fieldProps = this.model[field];
      //const validators: Validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value);
      this.fields.push({...fieldProps, fieldName: field});
      console.log(this.fields)
    }
    return formGroupFields;
  }

  /*private addValidator(rules: any) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
      }
    });
    return validators;
  }*/

}