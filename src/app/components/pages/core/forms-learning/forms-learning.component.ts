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
}
