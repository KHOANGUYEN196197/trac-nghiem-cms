import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit {
  a = "5";
  constructor() {}

  ngOnInit(): void {}
  handleEvent(e) {
    console.log(e);
   if( e.action ==="done")
   console.log(1);
   
  }
}
