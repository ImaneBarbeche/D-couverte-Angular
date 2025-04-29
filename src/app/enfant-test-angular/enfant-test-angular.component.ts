import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant-test-angular',
  template: `<p>Message : {{message}} </p>`,
})

export class EnfantTestAngularComponent {
 message = 'Hello, Im the child component';
}
