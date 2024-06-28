import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.scss'
})
export class TestResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router){}
  score!: number;
  questionsNumber!: number;
  correctAnswers: any[] = [];
  displayText: string = '';
  buttonText: string = '';

  ngOnInit(): void {
    try {
      this.score = this.route.snapshot.params['score'];
      this.questionsNumber = this.route.snapshot.params['questionsNumber']!;
      this.correctAnswers = this.route.snapshot.params['correctAnswers']!;


    } catch (error) {
      console.log(error)
    }
    this.textToDisplay();
  }

  textToDisplay(): void{
    if(this.score < this.questionsNumber*0.75){
      this.displayText = "Ce n'est pas encore ça, retente ta chance : "
      this.buttonText = "REPASSER LE TEST";
    } else {
      this.displayText = 'Bravo ! Tu as obtenu : '
      this.buttonText = "REFAIRE LE TEST";
    }
  };

  retakeTest(){
    this.router.navigate(['/test'])
  }



}
