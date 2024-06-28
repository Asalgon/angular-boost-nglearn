import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrl: './question-checkbox.component.scss'
})
export class QuestionCheckboxComponent {

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
