import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
//   template: `
//   <h3>Interpolation: "{{ name }}" is a class property with from variable: name</h3>
// <h3>2 + 2 = {{2 + 2}}</h3>
// <h3>{{"Welcome" + name}}</h3>
//   `,
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {

  public name = "Alsiesta";
  public windowURL = window.location.href;
  
  greetName() {
    return "Welcome " + this.name;
  } 

  
}
