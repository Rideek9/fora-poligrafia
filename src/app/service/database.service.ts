import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  aboutUsData: any;
  private apiURL = 'admin.fora-poligrafia.pl/api';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<any> {
    return this.http.get(`${this.apiURL}/about-uses`);
  }

  getAboutUsData() {
    this.aboutUsData = fetch(`${this.apiURL}/about-uses`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data.');
        }
        return res.json();
      })
      .then((data) => {
        this.aboutUsData = data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
