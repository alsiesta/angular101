import { Component } from '@angular/core';

@Component({
  selector: 'app-styleclasses',
  templateUrl: './styleclasses.component.html',
  // styleUrls: ['./styleclasses.component.scss']
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class StyleclassesComponent {

  public name = 'Alsiesta';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = false;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }
}
