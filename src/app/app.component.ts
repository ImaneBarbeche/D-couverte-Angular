import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnfantTestAngularComponent } from './enfant-test-angular/enfant-test-angular.component'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnfantTestAngularComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Test Angular';
  message = "Hello, world!"
}
