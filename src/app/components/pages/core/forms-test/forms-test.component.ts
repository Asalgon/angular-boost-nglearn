import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrl: './forms-test.component.scss'
})
export class FormsTestComponent {
  constructor(private formBuilder: FormBuilder){}

  test: boolean = false;
  form!: FormGroup;

  questions: any = [
    {
      value: 'q1',
      label: 'Dans quel cas de figure un formulaire par modèle est-il le plus adapté ?',
      type: 'radio',
      options:['Formulaires dynamiques', 'Validations complexes', 'Utilisation de ngModel', 'Très structuré pour les tests'],
      response: 3,
      rules: {
        required: true
      }
    },
    {
      value: 'q2',
      label: 'Quelle est la principale différence entre les formulaires template-driven et réactifs ?',
      type: 'radio',
      options:[
        'Les formulaires réactifs sont plus difficiles à tester',
        'Les formulaires réactifs permettent un meilleur contrôle',
        "Les formulaires template-driven n'utilisent pas de directives",
        'Les formulaires réactifs ne nécessitent pas de module supplémentaire'
      ],
      response: 2,
      rules: {
        required: true
      }
    },
    {
      value: 'q3',
      label: 'Quel module devez-vous importer pour utiliser les formulaires template-driven ?',
      type: 'radio',
      options:[
        'ReactiveFormsModule',
        'FormBuilderModule',
        'TemplateFormsModule',
        'FormsModule',
      ],
      response: 4,
      rules: {
        required: true
      }
    },
  ]


  ngOnInit(): void {
    this.buildForm();
  };

  buildForm(): void{
    this.form = this.formBuilder.group({
      q1: ['', [Validators.required]],
      q2: ['', [Validators.required]],
      q3: ['', [Validators.required]]
    })
    //this.form.valueChanges.subscribe(v => console.log(v))
  };

  beginTest(){
    this.test = true;
  }

  onSubmit(): void{
    console.log(this.form.value)
  }
}
