import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

import { UrlService } from "src/app/shared/service/url.service";
import { Url } from "src/app/shared/model";

enum Dir {
  LEFT = "isLeft",
  RIGHT = "isRight"
}

@Component({
  selector: "app-bottom-control",
  templateUrl: "./bottom-control.component.html",
  styleUrls: ["./bottom-control.component.scss"]
})
export class BottomControlComponent implements OnInit {
  private readonly urlList: Url[];
  constructor(private router: Router, private urlService: UrlService) {
    this.urlList = this.urlService.urlList;
  }
  @HostListener("click", ["$event"])
  onclick(e: Event): void {
    this.navigate(e.target["dataset"].ctr);
  }

  ngOnInit() {}

  navigate(dir: Dir): void {
    const curIndex: number = this.findCurIndex();
    const lastIndex = this.urlList.length - 1;
    this.urlService.clickInfo.hasClicked = true;
    if (dir === Dir.LEFT) {
      this.urlService.clickInfo.direction = Dir.LEFT;
      const prevIndex: number = curIndex - 1 < 0 ? lastIndex : curIndex - 1;
      this.router.navigate([this.urlList[prevIndex].path]);
    } else if (dir === Dir.RIGHT) {
      this.urlService.clickInfo.direction = Dir.RIGHT;
      const nextIndex: number = lastIndex < curIndex + 1 ? 0 : curIndex + 1;
      this.router.navigate([this.urlList[nextIndex].path]);
    }
  }

  findCurIndex(): number {
    return this.urlList.findIndex((url: Url) => {
      return url.path === this.router.url;
    });
  }
}
