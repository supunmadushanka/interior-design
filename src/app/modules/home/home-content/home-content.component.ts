import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faArrowRight, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from 'src/app/shared/models/servise';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {

  arrowIcon = faArrowRight;
  squareIcon = faSquarePlus;

  public serviceList: Service[] = [];

  constructor(public _router: Router, private _sericesService: ServicesService) { }

  ngOnInit(): void {
    AOS.init();

    this._sericesService.getServices()
      .subscribe(
        response => {
          this.serviceList = response;
          console.log(response)
        }
      );
  }

  navigateAdmin() {
    this._router.navigate(['manage-services']);
  }

}

