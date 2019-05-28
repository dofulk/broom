import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ns-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
  moduleId: module.id,
})
export class LinearComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
