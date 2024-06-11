import { ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { QuestionRadioComponent } from '../question-radio/question-radio.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html',
  styleUrl: './form-questions.component.scss'
})
export class FormQuestionsComponent implements AfterViewInit{
  supportedDynamicComponents = [
    {
      name: 'text',
      component: undefined
    },
    {
      name: 'number',
      component: undefined
    },
    {
      name: 'select',
      component: undefined
    },
    {
      name: 'radio',
      component: QuestionRadioComponent
    },
    {
      name: 'date',
      component: undefined
    },
    {
      name: 'checkbox',
      component: undefined
    }
  ];

  @ViewChild('dynamicInputContainer', { read: ViewContainerRef}) dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName!: FormGroup;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic!.component || QuestionRadioComponent;
  }

}