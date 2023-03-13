import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 [style.color]="'orange'">Simple property style binding inline of template</h2>
  <h2 [style.color]="hasError ? 'red': 'green'">Style binding via conditional ternary expression in template</h2>
  <h2 [style.color]="highlightColor">Stylebinding via class property binding</h2>
  <h2 [ngStyle]="titleStyles">Stylebinding</h2>
  
  `,
  styles: []
})
export class StylebindingComponent {
  public name = 'Alsiesta';
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
}
