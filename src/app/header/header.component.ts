import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [LogoComponent, MenuComponent],
})
export class HeaderComponent {}
