import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-answer-test",
  templateUrl: "./answer-test.component.html",
  styleUrls: ["./answer-test.component.scss"],
})
export class AnswerTestComponent implements OnInit {
  id;
  results = [];
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAnswerTest();
  }
  getAnswerTest() {
    this.authService.answerTest(this.id).subscribe((res: any) => {
      this.results = res.result
      console.log(this.results);
      
    });
  }
  seenDg(){
    this.router.navigateByUrl(`/ResultSubject/${this.id}`);
  }
}
