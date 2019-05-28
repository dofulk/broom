import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ns-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  moduleId: module.id,
})
export class ParentComponent implements OnInit {

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerExtension.navigate(
      [{ outlets: { linearTab: ["linear"], topTab: ["top"] } }],
      { relativeTo: this.activeRoute }
    );
  }

}
