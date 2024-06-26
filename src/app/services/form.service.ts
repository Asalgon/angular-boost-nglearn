import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }

  private isTesting: boolean = false;
  protected done: boolean = false;

  protected data = [
    {
      value: 'q1',
      label: 'Dans quel cas de figure un formulaire par modèle est-il le plus adapté ?',
      type: 'radio',
      options:['Formulaires dynamiques', 'Validations complexes', 'Utilisation de ngModel', 'Très structuré pour les tests'],
      response: 3,
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
    },
    {
      value: 'q4',
      label: 'Quelles sont les fonctionnalités fournies par les formulaires réactifs ?',
      type: 'checkbox',
      options:[
        'Validation asynchrone',
        'Liaison bidirectionnelle automatique',
        'Gestion de la valeur et du statut du formulaire',
        'Possibilité de regrouper les contrôles',
      ],
      response: {1: true, 2: false, 3: true, 4: true},
    },
    {
      value: 'q5',
      label: 'Quels validateurs intégrés sont disponibles dans Angular ?',
      type: 'checkbox',
      options:[
        'Validators.required',
        'Validators.minLength',
        'Validators.pattern',
        'Validators.email',
      ],
      response: {1: true, 2: true, 3: true, 4: true},
    },
    {
      value: 'q6',
      label: 'Quels service Angular est souvent utilisé pour créer et gérer des formulaires réactifs ?',
      type: 'input',
      options:[''],
      response: 'FormBuilder' || 'formBuilder' || 'formbuilder' || 'Formbuilder',
    },
    {
      value: 'q7',
      label: "Quelle propriété d'un contrôle de formulaire indique s'il a été modifié par l'utilisateur ?",
      type: 'select',
      options:[
        'pristine',
        'touched',
        'dirty',
        'valid'
      ],
      response: 3,
    },
  ]

  getFormData(): any[]{
    return this.data;
  };

  getQuestionsAmount(): number{
    return this.data.length;
  };

  getAllResponses(){
    let responses: any[] = [];
    this.data.forEach((data: any) => {
      responses.push(data.response)
    });
    return responses;
  };

  beginTest(){
    this.done = false;
    this.isTesting = true;
  };

  notTesting(){
    this.done = false;
    this.isTesting = false;
  };

  finishTest(){
    this.done = true;
  }

  isDone(): boolean{
    return this.done;
  }

  testingState(): boolean{
    return this.isTesting;
  }

}
