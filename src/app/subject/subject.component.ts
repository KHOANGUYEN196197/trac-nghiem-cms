import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit {
  codeId;
  a;
  id;
  abc;
  questions = [];
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAll(this.id);
  }
  getAll(id) {
    this.authService.getTestDetail(id).subscribe((res) => {
      this.questions = res.result.questions;
      this.codeId = res.result.id;
      this.a = res.result.time * 60;
      for (let i in this.questions) {
        this.questions[i].isAnswers = false;
        this.questions[i].answerId = -1;
      }
    });
  }
  handleEvent(e) {
    if (e.action === "done") {
     this.Submit();
    }
  }
  checkAnswers(id) {
    for (let i in this.questions) {
      if (id == this.questions[i].id) {
        this.questions[i].isAnswers = true;
      }
    }
  }
  clickAnswer(answer) {
    for (let i in this.questions) {
      if (this.questions[i].id == answer.questionId) {
        this.questions[i].answerId = answer.id;
      }
    }
  }
  Submit() {
    let arrAnswerId = [];
    for (let i in this.questions) {
      if (this.questions[i].answerId != -1) {
        arrAnswerId.push(this.questions[i].answerId);
      } else {
        arrAnswerId.push(-1);
      }
    }
    const data = { id: +this.id, answerIds: arrAnswerId };
    this.authService.submitTest(data).subscribe((res) => {
      Swal.fire({
        title: "Bài Test Đã Được Nộp. Xem Nhận Xét Về Bài Test Này",
        showCancelButton: true,
        confirmButtonText: `Xem`,
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl(`/ResultSubject/${this.id}`);

        } else {
          this.router.navigateByUrl("/LearningInformation");
        }
      });
    });
  }
  toQuestion(i){
    let position = i;   
    let obj = document.getElementById("questionBox");
    obj.scrollTop = position*163; //ok
  }

  onScroll(e){
   console.log(e.target.scrollTop);
    
  }
}
