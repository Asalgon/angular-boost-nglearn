import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-question-select',
  templateUrl: './question-select.component.html',
  styleUrl: './question-select.component.scss'
})
export class QuestionSelectComponent {
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
