import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.scss"],
})
export class SubjectComponent implements OnInit {
  a = "5";
  id;
  questions=[];
  
  constructor(private route:ActivatedRoute, private authService:AuthService) {
    this.questions= [
      {
        "id": 1,
        "content": "1.  Thí nghiệm nào dưới đây không xảy ra phản ứng? ",
        "createdAt": "2021-05-09T14:04:42.000Z",
        "updatedAt": "2021-05-09T14:04:42.000Z",
        "deletedAt": null,
        "cateId": 1,
        "levelId": 1,
        "answers": [
          {
            "id": 1,
            "content": "Thêm AgNO3 vào dung dịch Fe(NO3)2.",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 1
          },
          {
            "id": 2,
            "content": "Cho kim loại Fe vào dung dịch HCl đặc, nguội.",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 1
          },
          {
            "id": 3,
            "content": " Cho kim loại Al vào dung dịch NaOH.",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 1,
            "isSelected": true
          },
          {
            "id": 4,
            "content": "Cho Fe tác dụng với dung dịch ZnCl2.",
            "isCorrect": false,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 1
          }
        ]
      },
      {
        "id": 2,
        "content": "2.  Để khử mùi tanh của cá (gây ra do một số amin) ta có thể rửa cá với",
        "createdAt": "2021-05-09T14:04:42.000Z",
        "updatedAt": "2021-05-09T14:04:42.000Z",
        "deletedAt": null,
        "cateId": 2,
        "levelId": 1,
        "answers": [
          {
            "id": 5,
            "content": "nước",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 2,
            "isSelected": true
          },
          {
            "id": 6,
            "content": "giấm",
            "isCorrect": true,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 2
          },
          {
            "id": 7,
            "content": "nước muối",
            "isCorrect": false,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 2
          },
          {
            "id": 8,
            "content": "nước vôi trong",
            "isCorrect": false,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 2
          }
        ]
      },
      {
        "id": 3,
        "content": "3.Kết tủa Fe(OH)2 sinh ra khi cho dung dịch FeCl2 tác dụng với dung dịch",
        "createdAt": "2021-05-09T14:04:42.000Z",
        "updatedAt": "2021-05-09T14:04:42.000Z",
        "deletedAt": null,
        "cateId": 3,
        "levelId": 1,
        "answers": [
          {
            "id": 9,
            "content": "HCl",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 3
          },
          {
            "id": 10,
            "content": "NaOH",
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 3,
            "isSelected": true
          },
          {
            "id": 11,
            "content": "NaCl",
            "isCorrect": false,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 3
          },
          {
            "id": 12,
            "content": "KNO3",
            "isCorrect": false,
            "createdAt": "2021-05-09T14:04:42.000Z",
            "updatedAt": "2021-05-09T14:04:42.000Z",
            "deletedAt": null,
            "questionId": 3
          }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get("id");
    this.getAll(this.id);

    for(let i in this.questions){
      this.questions[i].isAnswers = false;
    }
  }
  getAll(id){
    this.authService.getTestDetail(id).subscribe((res)=>{
      console.log(res);
    })
  }
  handleEvent(e) {
    console.log(e);
   if( e.action ==="done")
   console.log(1);
   
  }
  checkAnswers(id){
    console.log(id);
    for(let i in this.questions){
      if(id == this.questions[i].id){
        this.questions[i].isAnswers =true;
      }
    }
    console.log(this.questions);
    
  }
}
