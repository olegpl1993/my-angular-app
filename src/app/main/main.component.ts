import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MainComponent {
  public name = 'MainComponent';
  public data = [
    {
      title: 'Матрица',
      description: 'Киано тащит весь фильм на себе',
    },
    {
      title: 'Хотабыч',
      description: 'Хороший фильм про деда волшебника',
    },
    {
      title: 'Аладин',
      description: 'Фильм про джина из лампы',
    },
  ];

  public say(value: string) {
    console.log(value);
  }
  public sayName() {
    console.log(this.name);
  }
}
