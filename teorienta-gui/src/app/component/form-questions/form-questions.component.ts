import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html',
  styleUrls: ['./form-questions.component.css']
})
export class FormQuestionsComponent implements OnInit {
  x: number;
  question: String;
  questoes: Array<any>;
  num: number;
  numLength: number;
  perguntas: String;
  perguntasArray: Array<any>;

  constructor() { 
    this.x = 0;
    this.num = 0;
    this.questoes = [this.x];
  }

  ngOnInit(): void {
  }
  readPergunta(pergunta: any):void{
    this.perguntasArray = pergunta.split("\n");
    for(let i=0;i<this.perguntasArray.length;i++){
      alert("perguntas: "+this.perguntasArray[i]);
    }
  }
  readNumber(len: any): void{
    this.questoes.length = len;
    alert("len1: "+len)
    alert("len: "+this.questoes.length);
  }
  addCampo(question: any): void {
    alert(question)
    this.question="";
    this.x = this.x + 1;
    this.questoes.push(question);
  }
  removeCampo(): void {
    this.questoes.pop();
  }
  addBadge():void{
    this.num = this.num + 1;
  }
  removeBadge():void{
    this.num = this.num -1;
  }
}
