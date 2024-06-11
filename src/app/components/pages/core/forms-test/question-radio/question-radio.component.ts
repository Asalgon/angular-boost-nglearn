import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';


@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrl: './question-radio.component.scss'
})
export class QuestionRadioComponent {
  @Input() field!: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }

  /*onSubmit(){
    if(this.formName.valid){
      console.log(this.formName.value);
    };
  };*/

}
