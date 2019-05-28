import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  constructor(
    private routerExtension: RouterExtensions
  ) { }

  ngOnInit() {
  }

}
