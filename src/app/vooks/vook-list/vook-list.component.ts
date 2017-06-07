import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Vook } from '../vooks.model';


@Component({
  selector: 'app-vook-list',
  templateUrl: './vook-list.component.html',
  styleUrls: ['./vook-list.component.css']
})
export class VookListComponent implements OnInit {
	vooks :Vook[]=[
		new Vook("the sonam's book","hdgahfvdwhfdsf","https://resizing.flixster.com/l5K-EC1nla3zmPN8Ipqf-dew0bo=/300x300/v1.bjs1MTgwOTQ7ajsxNzMzMDsxMjAwOzYyNDs0Njg"),
		new Vook("the sonam's book","hdgahfvdwhfdsf","https://resizing.flixster.com/l5K-EC1nla3zmPN8Ipqf-dew0bo=/300x300/v1.bjs1MTgwOTQ7ajsxNzMzMDsxMjAwOzYyNDs0Njg"),
		new Vook("the sonam's book","hdgahfvdwhfdsf","https://resizing.flixster.com/l5K-EC1nla3zmPN8Ipqf-dew0bo=/300x300/v1.bjs1MTgwOTQ7ajsxNzMzMDsxMjAwOzYyNDs0Njg")
	];
  @Output() vookSelected = new EventEmitter<Vook>();
  
  constructor() { }

  ngOnInit() {
  }
  passVookDetail(vook:Vook){
    this.vookSelected.emit(vook);
  }

}
