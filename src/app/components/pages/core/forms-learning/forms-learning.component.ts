import { Component } from '@angular/core';

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
  `<div class="container">
    <h2 class="heading">Template Driven Form</h2>
    <form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">

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
    </form>
  </div>`
}
