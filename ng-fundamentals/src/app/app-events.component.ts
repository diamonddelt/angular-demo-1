import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <section class='section'>
    <div class='container'>
      <h1>Diamond Delt</h1>
      <img src="/assets/images/diamond.png"/>
    </div>
  </section>
  <section class='section'>
    <app-events-list></app-events-list>
  </section>
  `
})
export class AppEventsComponent {
  title = 'app';
}
