import { Component, OnInit ,Input} from '@angular/core';
import { Vook} from '../vooks.model';


@Component({
  selector: 'app-vook-detail',
  templateUrl: './vook-detail.component.html',
  styleUrls: ['./vook-detail.component.css']
})
export class VookDetailComponent implements OnInit {
	@Input() vookDetail:Vook;
  constructor() { }

  ngOnInit() {
  }

}
