import { Component } from '@angular/core';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { MenuComponent } from '../header/menu/menu.component';
import { MathService } from '../shared/services/math.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [LogoComponent, MenuComponent],
  standalone: true,
})
export class HeaderComponent {
  constructor(private math: MathService) {
    console.log(this.math.add(10, 3));
  }
}
