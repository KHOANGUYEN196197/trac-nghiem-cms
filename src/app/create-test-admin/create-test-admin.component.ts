import { ModalCreateTestAdminComponent } from './modal-create-test-admin/modal-create-test-admin.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface PeriodicElement {
  monThi: string;
  maDe: number;
  soCau: number;
  thoiGianThi: string;
  kienThuc: string;
  doKho: string;
  diem: string;
  ngayThi: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    maDe: 1,
    monThi: "Hydrogen",
    soCau: 1.0079,
    kienThuc: "H",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 2,
    monThi: "Helium",
    soCau: 4.0026,
    kienThuc: "He",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 3,
    monThi: "Lithium",
    soCau: 6.941,
    kienThuc: "Li",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 4,
    monThi: "Beryllium",
    soCau: 9.0122,
    kienThuc: "Be",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 5,
    monThi: "Boron",
    soCau: 10.811,
    kienThuc: "B",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 6,
    monThi: "Carbon",
    soCau: 12.0107,
    kienThuc: "C",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 7,
    monThi: "Nitrogen",
    soCau: 14.0067,
    kienThuc: "N",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 8,
    monThi: "Oxygen",
    soCau: 15.9994,
    kienThuc: "O",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 9,
    monThi: "Fluorine",
    soCau: 18.9984,
    kienThuc: "F",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
  {
    maDe: 10,
    monThi: "Neon",
    soCau: 20.1797,
    kienThuc: "Ne",
    thoiGianThi: "H",
    doKho: "H",
    diem: "H",
    ngayThi: "H",
  },
];
@Component({
  selector: 'app-create-test-admin',
  templateUrl: './create-test-admin.component.html',
  styleUrls: ['./create-test-admin.component.scss']
})
export class CreateTestAdminComponent implements OnInit {
  type = false;
  displayedColumns: string[] = [
    "maDe",
    "monThi",
    "soCau",
    "kienThuc",
    "thoiGianThi",
    "doKho",
    "diem",
    "ngayThi",
  ];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  CreateSubject() {
    const dialogRef = this.dialog.open(ModalCreateTestAdminComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
