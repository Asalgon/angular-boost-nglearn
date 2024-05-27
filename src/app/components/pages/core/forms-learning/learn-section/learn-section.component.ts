import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-section',
  templateUrl: './learn-section.component.html',
  styleUrl: './learn-section.component.scss'
})
export class LearnSectionComponent {

  @Input() sectionName: string = "";

}
