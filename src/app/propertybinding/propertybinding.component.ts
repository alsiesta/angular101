import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2>Hi {{topic}} </h2>
  <input [id]="myId" type="text" value="Alexander">
  <h4>direct property binding to an HTML attribut only works with strings</h4>
  <input id="{{myId}}" type="text" value="Alexander">
  <input disabled="{{false}}" type="text" size="40" value="Disabled is actually false, but does not bind directly">
  <h4>therefore best practise is to bind to class properties, because it works for every type</h4>
  <input [disabled]="isDisabled" type="text" size="40" value="False is bound to class property here">
  <h4>Square brackets bind HTML attributes to properties. Bind-attribute is an alternative</h4>
  <input bind-disabled="isDisabled" type="text" size="40" value="attribute disabled is bound via hyphen">
  `,
  styles: []
})
export class PropertybindingComponent {
  public topic = 'Property Binding';
  public myId = 'testId';
  public isDisabled = false;
}
