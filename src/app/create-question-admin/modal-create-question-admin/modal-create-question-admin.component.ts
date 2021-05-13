import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-create-question-admin",
  templateUrl: "./modal-create-question-admin.component.html",
  styleUrls: ["./modal-create-question-admin.component.css"],
})
export class ModalCreateQuestionAdminComponent implements OnInit {
  subjects = [];
  subject;
  categoris = [];
  levels = [];
  level;
  category;
  nameQuestion;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getSubject();
    this.getLevel();
  }
  getSubject() {
    this.authService.getSubject().subscribe((res) => {
      this.subjects = res.result;
    });
  }
  selectSubject(subject) {
    this.authService.getCategoryByIdSubject(subject.id).subscribe((res) => {
      this.categoris = res.result;
    });
  }
  getLevel() {
    this.authService.getLevel().subscribe((res) => {
      this.levels = res.result;
    });
  }
  postQuestion(){
const data ={
  levelId:this.level,
  cateId: this.category,
  content: this.nameQuestion
}
console.log(data);

const data2 = {
  
}
  }
}
