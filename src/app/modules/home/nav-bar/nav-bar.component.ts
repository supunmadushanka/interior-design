import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private _authService: AuthService) { }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

  logOut() {
    this._authService.logout();
  }
}
