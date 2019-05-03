// import {
//   Directive,
//   Renderer2,
//   OnInit,
//   OnDestroy,
//   ElementRef,
//   Inject,
//   AfterViewInit,
// } from "@angular/core";

// import { DOCUMENT } from "@angular/common";
// import { RouterOutlet } from "@angular/router";

// import { Subject } from "rxjs";
// import { takeUntil } from "rxjs/operators";


// @Directive({
//   selector: "[appendHelper]"
// })
// export class AppendHelperDirective implements OnInit, AfterViewInit, OnDestroy {
//   private unsubscribe$ = new Subject<void>();

//   constructor(
//     private r2: Renderer2,
//     private ro: RouterOutlet,
//     @Inject(DOCUMENT) private d: Document
//   ) {}

//   private app_nav: HTMLElement;
//   private content_router: HTMLElement;
//   private sibling: HTMLElement;

//   ngOnInit(): void {}
  
//   ngAfterViewInit(): void {
//     console.log(this.ro.component);
//     this.ro.activateEvents
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe(c => console.log(c));

    //query app-nav
    // this.app_nav = this.d.querySelector("app-nav");
    // this.content_router = this.d.querySelector(".content-router");
    // this.insertAppNav();
    // this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(e => {
    //   if (e instanceof NavigationStart) {
    //     this.insertAppNav();
    //     console.log(e);
    //   }
    // });
  // }

  // insertAppNav(): void {
  //   //find sibling of router-outlet
  //   this.sibling = this.r2.nextSibling(this.content_router);
  //   this.r2.insertBefore(this.sibling, this.app_nav, this.sibling.firstChild);
  // }

//   ngOnDestroy(): void {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }
