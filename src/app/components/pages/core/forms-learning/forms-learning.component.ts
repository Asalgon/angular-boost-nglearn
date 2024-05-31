import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { PrismService } from '../../../../services/prism.service';

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
export class FormsLearningComponent implements OnInit, AfterViewChecked{


  displayedColumns: string[] = ['criteria', 'reactive', 'template'];
  dataSource = data;

  name: string = 'Angular';
  highlighted: boolean = false;

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
  </div>`;

  constructor(private readonly prismService: PrismService){}

  ngOnInit(): void {
    this.tplCodeExample = this.addClassToHtml(this.tplCodeExample, 'line-numbers', 'pre');
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted && this.tplCodeExample) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

  addClassToHtml(html: string, className: string, tagName: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements = doc.querySelectorAll(tagName);
    elements.forEach((el) => {
      el.classList.add(className);
    });
    return doc.documentElement.innerHTML;
  }

}
