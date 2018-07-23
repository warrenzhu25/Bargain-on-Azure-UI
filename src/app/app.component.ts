import { Component } from '@angular/core';
import { RouteTabLink } from '@app/app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Azure Price Model';
  tabLinks: RouteTabLink[] = [
    {
      label: 'Dashboard',
      link: 'dashboard',
    },
    {
      label: 'Order',
      link: 'order',
    },
  ];
}
