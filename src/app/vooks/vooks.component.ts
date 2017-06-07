import { Component, OnInit } from '@angular/core';
import { Vook } from './vooks.model';


@Component({
  selector: 'app-vooks',
  templateUrl: './vooks.component.html',
  styleUrls: ['./vooks.component.css']
})
export class VooksComponent implements OnInit {
	selectedVook:Vook;
  constructor() { }

  ngOnInit() {
  }

}
