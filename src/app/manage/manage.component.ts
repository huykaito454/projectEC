import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IdService } from '../Service/id.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  public id:any;
  constructor( private idManage : IdService ) { 
  }
  
  ngOnInit(): void {
    this.id = Number(sessionStorage.getItem('idManage'));
  }
  load(data:any){
    this.id = data;
  }
  
}
