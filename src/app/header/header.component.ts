import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { MenuComponent } from '../header/menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [LogoComponent, MenuComponent],
  standalone: true,
})
export class HeaderComponent {}
