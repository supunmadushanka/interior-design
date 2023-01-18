import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from 'src/app/shared/models/servise';
import { ServicesService } from 'src/app/core/services/services.service';
import { Router } from '@angular/router';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  @ViewChild('closeCanvas') closeCanvas: any;
  @ViewChild('closeCanvas1') closeCanvas1: any;

  public serviceList: Service[] = [];

  trashIcon = faTrash;
  editIcon = faPenToSquare;
  editingServiceID: any

  constructor(public _router: Router, private _sericesService: ServicesService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this._sericesService.getServices()
      .subscribe(
        response => {
          this.serviceList = response;
          console.log(response)
        }
      );
  }

  serviceForm = this.fb.group({
    name: ['', [Validators.required]],
    content: ['', [Validators.required]]
  })


  deleteRow(index: any, id: any) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this._sericesService.deleteServices(id)
        .subscribe(
          response => {
            console.log(response);
            if (response.name) {
              this.serviceList.splice(index, 1);
            }
          }
        )
    }
  }

  addService() {
    this._sericesService.addServices(this.serviceForm.value)
      .subscribe(
        response => {
          this.closeCanvas.nativeElement.click();
          this.serviceForm.reset();
          console.log(response);
          const obj = {
            _id: response.serviceObj._id,
            name: response.serviceObj.name,
            content: response.serviceObj.content
          }
          this.serviceList.push(obj)
        }
      )
  }

  editService(id: any) {
    let data = this.serviceForm.value;
    this._sericesService.editServices(id, this.serviceForm.value)
      .subscribe({
        next: (v) => {
          this.closeCanvas1.nativeElement.click();
          this.serviceForm.reset();
          console.log(v);
          let objIndex = this.serviceList.findIndex((obj => obj._id == id));
          this.serviceList[objIndex].name = data.name!;
          this.serviceList[objIndex].content = data.content!;
        },
        error: (e) => { console.log(e) }
      });
  }

  putData(data: any) {
    console.log(data)
    this.editingServiceID = data._id
    this.serviceForm.get('name')?.setValue(data.name);
    this.serviceForm.get('content')?.setValue(data.content);
  }
}
