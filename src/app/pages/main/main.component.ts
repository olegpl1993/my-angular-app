import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from 'src/app/pages/main/card/card.component';
import { MovieData } from 'src/app/types';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { delay } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    SpinnerComponent,
    MatButtonModule,
  ],
})
export class MainComponent {
  public data: MovieData[] = [];
  public search: string = '';
  public isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  getData(search: string): void {
    this.isLoading = true;
    if (search.length) {
      this.apiService
        .getData(search)
        .pipe(delay(500))
        .subscribe((data) => {
          console.log(data);
          this.data = data.description;
          console.log(this.data);
          this.isLoading = false;
        });
    } else {
      this.apiService.getData('a').subscribe((data) => {
        console.log(data);
        this.data = data.description;
        console.log(this.data);
        this.isLoading = false;
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
