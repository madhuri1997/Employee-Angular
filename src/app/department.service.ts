import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dept } from './models/dept.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private _url = ""
  constructor(public http:HttpClient, private router:Router) { }

  getDep():Observable<dept[]> {
    return this.http.get<dept[]>('/assets/data/emp.json')
  }

  getDepbyId(did:number):Observable<dept[]> {
    return this.http.get<dept[]>('/assets/data/emp.json')
  }

  onSelect(d:dept) {
    this.router.navigate(['/department',d.id])
  }
}
