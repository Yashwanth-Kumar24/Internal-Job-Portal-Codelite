import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cusnavbar',
  templateUrl: './cusnavbar.component.html',
  styleUrls: ['./cusnavbar.component.css']
})
export class CusnavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
