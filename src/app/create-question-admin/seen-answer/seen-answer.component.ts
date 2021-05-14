import { AuthService } from "./../../services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-seen-answer",
  templateUrl: "./seen-answer.component.html",
  styleUrls: ["./seen-answer.component.css"],
})
export class SeenAnswerComponent implements OnInit {
  @Input() data;
  answers = [];
  checkAnswer = false;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.seenAnswer();
  }
  seenAnswer() {
    this.authService.seenAsnwer(this.data).subscribe((res) => {
      this.answers = res.result;
      if ((this.answers[0] === undefined)) {
        this.checkAnswer = true;
      }
    });
  }
}
