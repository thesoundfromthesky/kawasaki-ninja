import { Injectable } from "@angular/core";

import { urlList } from "../data";
import { Url, ClickInfo } from "../model";

@Injectable()
export class UrlService {
  clickInfo: ClickInfo = {};

  constructor() {
  }

  get urlList(): Url[] {
    return urlList;
  }
}
