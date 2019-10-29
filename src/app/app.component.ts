import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <product-list></product-list>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  pageTitle: string = "ACME Product Mangement"
}
