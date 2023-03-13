import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereferencebinding',
  templateUrl: './templatereferencebinding.component.html',
  styleUrls: ['./templatereferencebinding.component.scss']
})
export class TemplatereferencebindingComponent {
  topic = "Template Reference Variables";
  public message: string = "";

  logMessage(value: any) {
    console.log(value);
    this.message = value;
  }
}
