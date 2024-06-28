import { AfterViewChecked, Component, OnInit } from '@angular/core';

const data: any[] = [
  {criteria: 'Création', reactive: 'Composant', template: 'Directive'},
  {criteria: 'Prédicabilité', reactive: 'Synchrone', template: 'Asynchrone'},
  {criteria: 'Validateurs', reactive: 'Fonctions', template: 'Directive'},
  {criteria: 'Mutabilité', reactive: 'Non mutable', template: 'Mutable'},
  {criteria: 'Scalabilité', reactive: 'Oui', template: 'Non'},
  {criteria: 'Testabilité', reactive: 'Facile', template: 'Incomfortable'},
]
@Component({
  selector: 'app-forms-learning',
  templateUrl: './forms-learning.component.html',
  styleUrl: './forms-learning.component.scss'
})
export class FormsLearningComponent {
  displayedColumns: string[] = ['criteria', 'reactive', 'template'];
  dataSource = data;

  tplCodeExample =
  `<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" [(ngModel)]="userDetails.name" required>
      <div *ngIf="userForm.controls.name?.touched && userForm.controls.name?.invalid" class="text-danger">
        Name is required.
      </div>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" name="email" [(ngModel)]="userDetails.email" required email>
      <div *ngIf="userForm.controls.email?.touched && userForm.controls.email?.invalid" class="text-danger">
        Please enter a valid email address.
      </div>
    </div>

    <div class="form-group">
      <label for="gender">Gender</label>
      <select class="form-control" id="gender" name="gender" [(ngModel)]="userDetails.gender" required>
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <div *ngIf="userForm.controls.gender?.touched && userForm.controls.gender?.invalid" class="text-danger">
        Please select a gender.
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;

  inputExample = `<input type="text" [(ngModel)]="userDetails.name" />`;

  validationExample = `<input required minlength="2" type="text" [(ngModel)]="userDetails.name" />`;

  formExample = 
  `<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" [(ngModel)]="userDetails.name" required>
      <div *ngIf="userForm.controls.name?.touched && userForm.controls.name?.invalid" class="text-danger">
        Name is required.
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;

  reacImport = 
  `import { ReactiveFormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      // vos composants ici
    ],
    imports: [
      // autres imports
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;

  formCreation = 
  `import { Component } from '@angular/core';
   import { FormGroup, FormControl, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-mon-formulaire',
    templateUrl: './mon-formulaire.component.html',
    styleUrls: ['./mon-formulaire.component.css']
  })
  export class MonFormulaireComponent {
    monFormulaire: FormGroup;
  
    constructor() {
      this.monFormulaire = new FormGroup({
        nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', [Validators.required, Validators.min(18)])
      });
    }
  
    onSubmit() {
      if (this.monFormulaire.valid) {
        console.log(this.monFormulaire.value);
      }
    }
  }`;

  reacCodeExample =
  `
  <form [formGroup]="monFormulaire" (ngSubmit)="onSubmit()">
    <label for="nom">Nom:</label>
    <input id="nom" formControlName="nom">
    <div *ngIf="monFormulaire.get('nom').invalid && monFormulaire.get('nom').touched">
      <small *ngIf="monFormulaire.get('nom').errors.required">Le nom est requis.</small>
      <small *ngIf="monFormulaire.get('nom').errors.minlength">Le nom doit avoir au moins 3 caractères.</small>
    </div>

    <label for="email">Email:</label>
    <input id="email" formControlName="email">
    <div *ngIf="monFormulaire.get('email').invalid && monFormulaire.get('email').touched">
      <small *ngIf="monFormulaire.get('email').errors.required">L'email est requis.</small>
      <small *ngIf="monFormulaire.get('email').errors.email">Email invalide.</small>
    </div>

    <label for="age">Age:</label>
    <input id="age" formControlName="age">
    <div *ngIf="monFormulaire.get('age').invalid && monFormulaire.get('age').touched">
      <small *ngIf="monFormulaire.get('age').errors.required">L'âge est requis.</small>
      <small *ngIf="monFormulaire.get('age').errors.min">L'âge doit être au moins de 18 ans.</small>
    </div>

    <button type="submit" [disabled]="monFormulaire.invalid">Soumettre</button>
  </form>
  `;

  reacValidation =
  `
  {
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)])
  }
  `;

  customValidation =
  `
  import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

  export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
  `;

  asyncValidation =
  `
  import { AbstractControl, ValidationErrors } from '@angular/forms';
  import { Observable, of } from 'rxjs';
  import { delay, map } from 'rxjs/operators';

  export function asyncUsernameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const forbiddenUsernames = ['admin', 'user'];
    return of(control.value).pipe(
      delay(1000), // Simule un appel HTTP
      map(value => (forbiddenUsernames.includes(value) ? { forbiddenName: { value } } : null))
    );
  }
  `;

  errorValidation =
  `
  <label for="email">Email:</label>
  <input id="email" formControlName="email">
  <div *ngIf="monFormulaire.get('email').invalid && monFormulaire.get('email').touched">
    <small *ngIf="monFormulaire.get('email').errors.required">L'email est requis.</small>
    <small *ngIf="monFormulaire.get('email').errors.email">Email invalide.</small>
  </div>
  `;

  reacSubmit =
  `
  <form [formGroup]="monFormulaire" (ngSubmit)="onSubmit()">
    <button type="submit" [disabled]="monFormulaire.invalid">Soumettre</button>
  </form>

  onSubmit() {
  if (this.monFormulaire.valid) {
    console.log(this.monFormulaire.value);
  }
  }
  `;

  constructor(){}

}
