import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrl: './question-input.component.scss'
})
export class QuestionInputComponent {
  @Input() qNumber: number = 0;
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() type: string = '';
  @Input() cName: string = '';

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

}
