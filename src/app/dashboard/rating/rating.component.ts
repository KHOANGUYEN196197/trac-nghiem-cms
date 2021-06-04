import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  rating: number;
  constructor() {}

  ngOnInit(): void {}
  voteRating() {
    console.log(5656565, this.rating);
  }
}
