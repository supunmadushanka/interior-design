import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/servise';
import { ServicesService } from 'src/app/core/services/services.service';
import { Router } from '@angular/router';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit  {

  public serviceList: Service[] = [];

  trashIcon = faTrash;
  editIcon = faPenToSquare;

  constructor(public _router: Router, private _sericesService: ServicesService) { }

  ngOnInit(): void {
    this._sericesService.getServices()
      .subscribe(
        response => {
          this.serviceList = response;
          console.log(response)
        }
      );
  }

  deleteRow(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.serviceList.splice(x, 1 );
    }   
  }

}
