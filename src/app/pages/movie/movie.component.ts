import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone: true,
})
export class MovieComponent {
  public id: string = '';
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
