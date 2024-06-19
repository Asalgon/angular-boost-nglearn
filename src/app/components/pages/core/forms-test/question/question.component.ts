import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit{

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
