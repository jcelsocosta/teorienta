import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html',
  styleUrls: ['./form-questions.component.css']
})
export class FormQuestionsComponent implements OnInit {
  x: number;
  answer: String;
  questoes: Array<any>;

  constructor() { 
    this.x = 0;
    this.questoes = [this.x];
  }

  ngOnInit(): void {
  }
  addCampo(): void {
    this.x = this.x + 1;
    this.questoes.push(this.x);
  }
  removeCampo(): void {
    this.questoes.pop();
  }
}
