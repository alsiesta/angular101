import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
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
export class ClassbindingComponent {
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
