import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrnavbar',
  templateUrl: './hrnavbar.component.html',
  styleUrls: ['./hrnavbar.component.css']
})
export class HrnavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
