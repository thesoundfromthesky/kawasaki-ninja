import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
  host: { class: "font-half" }
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
