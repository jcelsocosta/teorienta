import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  x: number;
  answer: String;
  question: Array<any>

  constructor() {
    this.x = 0;
    this.question = [this.x];
   }

  ngOnInit(): void {
    const al = localStorage.getItem('title');
   
  }

  addQuestion(){
    this.x = this.x + 1;
    this.question.push(this.x);
  }
  removeQuestion(){
    this.question.pop();
  }

}
