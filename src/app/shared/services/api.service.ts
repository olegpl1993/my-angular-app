import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://search.imdbot.workers.dev/?q=';

  constructor(private http: HttpClient) {}

  getData(search: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${search}`);
  }
}
