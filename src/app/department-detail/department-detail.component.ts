import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public deptId!:number
  constructor(private _departmentService:DepartmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  //  let id = (this.route.snapshot.paramMap.get('id'))
  //  this.deptId=parseInt(id!)
  this.route.paramMap.subscribe((params: ParamMap)=>{
    let id = params.get('id')
    this.deptId=parseInt(id!)
  })
 
  }

  previous(id:number) {
    let dpid=id-1
    this.router.navigate(['department',dpid])
  }

  next(id:number) {
    let dpid=id+1
    this.router.navigate(['department',dpid])
  }

}
