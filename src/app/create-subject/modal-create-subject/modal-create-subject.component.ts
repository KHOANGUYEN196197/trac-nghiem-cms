import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: "app-modal-create-subject",
  templateUrl: "./modal-create-subject.component.html",
  styleUrls: ["./modal-create-subject.component.scss"],
})
export class ModalCreateSubjectComponent implements OnInit {
  add;
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato",
  ];
  constructor( private router: Router,public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openSubject = () =>{
    this.router.navigateByUrl("/Subjetc");
    this.dialog.closeAll();
  }
}
