import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import  {Vook} from '../../vooks.model';


@Component({
  selector: 'app-vook-item',
  templateUrl: './vook-item.component.html',
  styleUrls: ['./vook-item.component.css']
})
export class VookItemComponent implements OnInit {
	@Input() vook:Vook;
	@Output() getvookDetail = new EventEmitter<void>();
	getDetail(){
		this.getvookDetail.emit();
	}
  	constructor() { }

	  ngOnInit() {
	  }

}
