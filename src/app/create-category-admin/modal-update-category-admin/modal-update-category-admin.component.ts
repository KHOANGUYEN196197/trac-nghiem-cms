import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-update-category-admin',
  templateUrl: './modal-update-category-admin.component.html',
  styleUrls: ['./modal-update-category-admin.component.css']
})
export class ModalUpdateCategoryAdminComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
