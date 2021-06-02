import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit {
  codeId;
  a;
  id;
  questions=[];
  
  constructor(private route:ActivatedRoute, private authService:AuthService) {
  }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get("id");
    this.getAll(this.id);
  }
  getAll(id){
    this.authService.getTestDetail(id).subscribe((res)=>{
      this.questions = res.result.questions;
      this.codeId = res.result.id;
      this.a = res.result.time * 60;
      for(let i in this.questions){
        this.questions[i].isAnswers = false;
        this.questions[i].answerId = -1;
      }
    })
  }

  handleEvent(e) {
   if( e.action ==="done"){}
  }

  checkAnswers(id){
    for(let i in this.questions){
      if(id == this.questions[i].id){
        this.questions[i].isAnswers =true;
      }
    }
  }

  clickAnswer(answer){
    for(let i in this.questions){
      if(this.questions[i].id == answer.questionId){
        this.questions[i].answerId = answer.id;
      }
    }
  }

  Submit(){
    let arrAnswerId =[];
    for(let i in this.questions){
      if(this.questions[i].answerId != -1){
        arrAnswerId.push(this.questions[i].answerId);
      }else{
        arrAnswerId.push(-1);
      }
    }
      const data = {
        id: +this.id,
        answerIds:arrAnswerId
      }
      console.log(data);
      this.authService.submitTest(data).subscribe((res =>{
             
      }))
  }
}
