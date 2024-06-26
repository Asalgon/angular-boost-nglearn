import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormService } from '../../../../services/form.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private formService: FormService, private router: Router){}

  test: boolean = false;
  form!: FormGroup;
  questions: any = [];
  score: number = 0;


  ngOnInit(): void {
    this.questions = this.formService.getFormData();
    this.form = this.buildForm(this.questions);
    //this.form.valueChanges.subscribe(v => console.log(v))
  };

  buildForm(data: any): FormGroup {
    let formGroup: any = {};
    data.forEach((control: any) => {
      if(control.type === 'checkbox'){
        let u: FormGroup = formGroup[control.value] = new FormGroup({})
        // faire une boucle for avec taille liste options: for length i++
        //items.forEach(item => { u.addControl(item, new FormControl('')) })

        for(let i = 1; i <= control.options.length; i++){
          u.addControl(i.toString(), new FormControl(false))
        }

      } else {
        formGroup[control.value] = new FormControl('', Validators.required);
      }

    });
    return new FormGroup(formGroup)
  };

  beginTest(){
    this.test = true;
  }

  onSubmit(): void{
    let correctAnswers: any[] = []

    //get form answers
    let answers: any[] = []
    Object.keys(this.form.controls).forEach((control) => {
      answers.push(this.form.controls[control].value)
    });

    //check with correct responses
    const correction: any[] = this.formService.getAllResponses();
    for(let index = 0; index < correction.length; index++){
      if(answers[index] === correction[index]){
        this.score+=1;
        correctAnswers.push(index+1);
      }
    }
    console.log('You have: ' + this.score + '/' + correction.length);
    console.log('Correct responses: ' + correctAnswers)
    this.test = false;

    this.formService.finishTest();

  }
}
