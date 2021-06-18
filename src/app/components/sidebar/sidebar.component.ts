import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTESUSER: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/CreateSubject", title: "Tạo Đề Thi", icon: "subject", class: "" },
  {
    path: "/LearningInformation",
    title: "Thông tin học tập",
    icon: "info",
    class: "",
  },
  {
    path: "/ResultEvaluation",
    title: "Đánh giá kết quả",
    icon: "spellcheck",
    class: "",
  },
  { path: "/Feedback", title: "Phản hồi", icon: "feedback", class: "" },
  { path: "/Statistics", title: "Thống kê", icon: "waterfall_chart", class: "" },
  // { path: "/Evaluate", title: "Đánh giá", icon: "dashboard", class: "" },
  // { path: "/InfoUser", title: "Thông Tin user ", icon: "dashboard", class: "" },
];
export const ROUTESADMIN: RouteInfo[] = [
  {
    path: "/InfoUserAdmin",
    title: "Thông Tin User ",
    icon: "info",
    class: "",
  },
  {
    path: "/Create-Test-Admin",
    title: "Tạo Môn Thi ",
    icon: "subject",
    class: "",
  },
  {
    path: "/CreateCategoryAdmin",
    title: "Tạo Chương Môn Thi ",
    icon: "bookmarks",
    class: "",
  },
  {
    path: "/CreateQuestionAdmin",
    title: "Tạo Câu Hỏi ",
    icon: "question_answer",
    class: "",
  },
  {
    path: "/TestAdmin",
    title: "Quản Lý Bài Thi",
    icon: "question_answer",
    class: ""
  },
  {
    path: "/StatisticsAdmin",
    title: " Thông Kê User",
    icon: "waterfall_chart",
    class: "",
  },
  {
    path: "/FeedbackAdmin",
    title: "Xem Phản Hồi",
    icon: "feedback",
    class: "",
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  isAdmin;
  checkToken: any;
  menuItems: any[];

  constructor(private router: Router) {
    this.isAdmin = localStorage.getItem("Role");
    this.checkToken = localStorage.getItem("token");
    if (this.checkToken !== null) {
    } else {
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    if (localStorage.getItem("Role") === "admin") {
      this.menuItems = ROUTESADMIN.filter((menuItem) => menuItem);
    } else {
      this.menuItems = ROUTESUSER.filter((menuItem) => menuItem);
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
