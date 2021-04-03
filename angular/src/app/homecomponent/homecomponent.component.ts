import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HomeInterface, HomeserviceService } from '../homeservice/homeservice.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  emps: Array<HomeInterface> = [];
  _message: String = "";
  emp! : HomeInterface;
 
  modalReference!: NgbModalRef;
  modalOption: NgbModalOptions = {};
 
  constructor(private empService: HomeserviceService,
    private modalService: NgbModal) { }


  ngOnInit(): void {
  }

}
