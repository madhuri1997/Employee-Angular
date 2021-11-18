import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { dept } from '../models/dept.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public deptList:dept[]=[]
  constructor(private _departmentService:DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this._departmentService.getDep().subscribe((data)=>{
      this.deptList=data
      console.log(data.length)
    })

    }
    onSelectLink(d:dept) {
      this.router.navigate(['/department',d.id])
  }

}
