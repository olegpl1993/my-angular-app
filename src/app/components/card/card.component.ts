import { Component, Input } from '@angular/core';
import { MovieData } from 'src/app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent {
  @Input() movie!: MovieData;
}
