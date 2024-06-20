import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormService } from '../../../../services/form.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrl: './forms-test.component.scss',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('1s ease-in',
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class FormsTestComponent {
  constructor(private formBuilder: FormBuilder, private formService: FormService){}

  test: boolean = false;
  form!: FormGroup;
  questions: any = []


  ngOnInit(): void {
    this.questions = this.formService.getFormData();
    this.form = this.buildForm(this.questions);


    this.form.valueChanges.subscribe(v => console.log(v))
  };

  buildForm(data: any): FormGroup {
    let formGroup: any = {};
    data.forEach((control: any) => {

        formGroup[control.value] = new FormControl('', Validators.required);


    });
    return new FormGroup(formGroup)
  };

  beginTest(){
    this.test = true;
  }

  onSubmit(): void{
    console.log(this.form.value)
  }
}
