import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() text = "default text";

  script = `<script src="my-element.js" type="module"></script></body>`;
  element = `<my-element text="CUSTOM TEXT!! WOW!!"></my-element>`;
}
