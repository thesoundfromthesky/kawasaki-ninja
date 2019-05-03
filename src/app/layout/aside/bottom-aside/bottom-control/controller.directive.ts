import { Directive, AfterViewInit, OnInit } from "@angular/core";

@Directive({
  selector: "[appController]"
})
export class ControllerDirective implements OnInit, AfterViewInit {
  constructor() {}
  ngOnInit(): void {
    console.log("init");
  }
  ngAfterViewInit(): void {
    console.log("after");
  }
}
