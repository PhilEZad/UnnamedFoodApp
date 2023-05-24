import { Component } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(
    private auth: FireAuthService,
  ) {
  }



  signOut() {
    this.auth.signOut()
  }

  userIsLoggedIn() {
    return this.auth.userIsLoggedIn()
  }
}
