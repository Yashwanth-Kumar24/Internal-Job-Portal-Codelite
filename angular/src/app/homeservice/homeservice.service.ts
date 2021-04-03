import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

let home_service = 'http://localhost:4041/home/';
export interface HomeInterface{
  id:BigInteger;
	jobId:String ;	
	jobTitle:String ;
	jobLocation:String ;
	jobType:String ;
	jobDesc:String ;
	salary:String ;
}
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  constructor(private http : HttpClient) { }

  getAllJobs(){
    return this.http.get<Array<HomeInterface>>(home_service);
  }

}
