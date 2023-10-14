import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { MovieData } from 'src/app/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent],
})
export class MainComponent {
  public data: MovieData[] = [];
  public search: string = '';

  constructor(private apiService: ApiService) {}

  getData(search: string): void {
    if (search.length) {
      this.apiService.getData(search).subscribe((data) => {
        console.log(data);
        this.data = data.description;
        console.log(this.data);
      });
    } else {
      this.apiService.getData('a').subscribe((data) => {
        console.log(data);
        this.data = data.description;
        console.log(this.data);
      });
    }
  }

  ngOnInit(): void {
    this.getData('a');
  }

  handleSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.search = String(event.target.value).trim();
    }
    console.log(this.search);
  }

  handleClick(): void {
    this.getData(this.search);
  }
}
