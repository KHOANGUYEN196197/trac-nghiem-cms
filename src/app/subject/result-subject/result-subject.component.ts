import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-subject',
  templateUrl: './result-subject.component.html',
  styleUrls: ['./result-subject.component.scss']
})
export class ResultSubjectComponent implements OnInit {
  results = [];
id;
  constructor(private authService: AuthService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getResult();
  }
  getResult(){
    this.authService.showResult(this.id).subscribe((res) => {
      for (const key in res.result) {
        if (Object.prototype.hasOwnProperty.call(res.result, key)) {
          const element = res.result[key];
          this.results.push(element);
        }
      }
    });

  }
}
