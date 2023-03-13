import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
  <h2>Welcome to {{topic}}</h2>
  <h4>Display event using the "$event" eventhandler as param within the onClick event.</h4>
  <button (click)="onClick($event)">Greet</button><br>
  {{greeting}}
  <h4>if the method bodey for the event is small, you can integrate it as a template statement within the HTM</h4>
  <button (click)="greeting2='Welcome Alex'">Greet</button>
{{greeting2}}
  `,
  styles: []
})
export class EventbindingComponent {
  public topic = 'Event Binding';
  public greeting = '';
  public greeting2 = '';

  onClick(event: any) {
    console.log(event)
    this.greeting = event.type;
  } 
}
