import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faArrowRight, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {

  arrowIcon = faArrowRight;
  squareIcon = faSquarePlus;

  serviceList: Array<any> = [
    {
      'id': 1,
      'name': 'Interior Design'
    },
    {
      'id': 2,
      'name': 'Consultant'
    },
    {
      'id': 3,
      'name': 'Construction Consultant'
    },
  ]

  constructor(public _router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  navigateAdmin() {
    this._router.navigate(['manage-services']);
  }

}

