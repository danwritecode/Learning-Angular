import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  showAvatarDropdown = false;

  get curRoute() {
    console.log(ActivatedRoute)
    return ActivatedRoute
  }
}
