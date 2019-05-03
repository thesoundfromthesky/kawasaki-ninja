import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { fader, slider, transformer, stepper } from "src/app/shared/animation";
import { UrlService } from "src/app/shared/service/url.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  animations: [
    // fader,
    // slider,
    // transformer,
    stepper
  ]
})
export class ContentComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private urlService: UrlService) {}
  private unsubscribe$ = new Subject<void>();
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  @HostBinding("@routeAnimations") routeAnim;

  // anim code is from https://www.youtube.com/watch?v=7JA90VI9fAI&t=333s
  ngOnInit() {}
  ngAfterViewInit(): void {
    this.outlet.activateEvents
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(c => {
        this.routeAnim = this.prepareRoute(this.outlet);
        this.urlService.clickInfo.hasClicked = false;
      });
  }

  prepareRoute(outlet: RouterOutlet): string {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
