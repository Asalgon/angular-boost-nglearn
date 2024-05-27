import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLearningComponent } from './forms-learning.component';

describe('FormsLearningComponent', () => {
  let component: FormsLearningComponent;
  let fixture: ComponentFixture<FormsLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
