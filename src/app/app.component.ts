import { Component } from '@angular/core';

import {MdSidenavContainer, MdSidenav} from '@angular/material';

import {OverlayPanelModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
