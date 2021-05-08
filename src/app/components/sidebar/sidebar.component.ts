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
  { path: "/CreateSubject", title: "Tạo Đề Thi", icon: "dashboard", class: "" },
  {
    path: "/LearningInformation",
    title: "Thông tin học tập",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/ResultEvaluation",
    title: "Đánh giá kết quả",
    icon: "dashboard",
    class: "",
  },
  { path: "/Feedback", title: "Phản hồi", icon: "dashboard", class: "" },
  { path: "/Statistics", title: "Thống kê", icon: "dashboard", class: "" },
  // { path: "/Evaluate", title: "Đánh giá", icon: "dashboard", class: "" },
  // { path: "/InfoUser", title: "Thông Tin user ", icon: "dashboard", class: "" },
];
export const ROUTESADMIN: RouteInfo[] = [
  {
    path: "/InfoUserAdmin",
    title: "Thông Tin User ",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/Create-Test-Admin",
    title: "Tạo Môn Thi ",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/CreateCategoryAdmin",
    title: "Tạo Chương Môn Thi ",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/CreateQuestionAdmin",
    title: "Tạo Câu Hỏi ",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/StatisticsAdmin",
    title: " Thông Kê User",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/FeedbackAdmin",
    title: "Xem Phản Hồi",
    icon: "dashboard",
    class: "",
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  checkToken: any;
  menuItems: any[];

  constructor(private router: Router) {
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
