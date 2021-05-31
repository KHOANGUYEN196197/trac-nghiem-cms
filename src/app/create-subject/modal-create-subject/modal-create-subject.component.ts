import { AuthService } from "./../../services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-modal-create-subject",
  templateUrl: "./modal-create-subject.component.html",
  styleUrls: ["./modal-create-subject.component.scss"],
})
export class ModalCreateSubjectComponent implements OnInit {
  add;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authServive: AuthService
  ) {}
  subjects;
  subject;
  level;
  amount;
  time;
  categoris;
  category;
  times = [
    {
      id: 1,
      name: "10 phút",
      time: 10,
    },
    {
      id: 2,
      name: "20 phút",
      time: 20,
    },
    {
      id: 1,
      name: "30 phút",
      time: 30,
    },
    {
      id: 2,
      name: "40 phút",
      time: 40,
    },
    {
      id: 1,
      name: "50 phút",
      time: 50,
    },
    {
      id: 2,
      name: "60 phút",
      time: 60,
    },
    {
      id: 1,
      name: "70 phút",
      time: 70,
    },
  ];
  amuounts = [
    {
      id: 1,
      name: "10 Câu",
      amount: 10,
    },
    {
      id: 2,
      name: "20 Câu",
      amount: 20,
    },
    {
      id: 3,
      name: "30 Câu",
      amount: 30,
    },
    {
      id: 4,
      name: "40 Câu",
      amount: 40,
    },
    {
      id: 5,
      name: "50 Câu",
      amount: 50,
    },
    {
      id: 6,
      name: "60 Câu",
      amount: 60,
    },
    {
      id: 7,
      name: "70 Câu",
      amount: 70,
    },
  ];
  levels = [
    { id: "easy", name: "Dễ" },
    { id: "medium", name: "Trung Bình" },
    { id: "hard", name: "Khó" },
  ];
  ngOnInit(): void {
    this.getAllSubjec();
  }
  getAllSubjec() {
    this.authServive.getSubject().subscribe((res) => {
      this.subjects = res.result;
      console.log(this.subjects);
    });
  }
  selectSubject(subject) {
    this.authServive.getCategoryByIdSubject(subject.id).subscribe((res) => {
      this.categoris = res.result;
    });
  }
  createTest() {
    const userId = localStorage.getItem("UserID");
    const data = {
      subjectId: +this.subject,
      level: this.level,
      amount: +this.amount,
      time: +this.time,
      userId: +userId,
      categoryIds: this.category,
    };
    this.authServive.createTest(data).subscribe((res) => {
      this.dialog.closeAll();
      this.getTestDetail(res.result.id);
    });
  }
  getTestDetail(id) {
    console.log(id);
    this.authServive.getTestDetail(id).subscribe((res) => {
      this.router.navigateByUrl(`/Subject/${id}`);
    });
  }
}
