import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dept } from '../models/dept.model';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

  title:string='Code Evalution'
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return `Welocme ${this.title}`
  }

  findColor="success"

  find= {
    "success-more": true,
    "success" : true

  }

  styling = {
    "color":'red',
   " background-color": "royalblue"
  }


  clickme(val:String){
    console.log(val)
  }

  name1:string=''

  isEnabled:boolean=false

  @Input('titleParent') titleParent:string =''

  @Output() childtitle = new EventEmitter()

  parentclick(){
    this.childtitle.emit(
      new dept(1,'BFS',100)
    )
  }
}
