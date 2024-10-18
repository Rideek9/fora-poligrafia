import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortoflioService implements OnInit {
  serwerPath: string = 'admin.fora-poligrafia.pl';

  private dataElement = new BehaviorSubject<[]>([]);
  dataElement$ = this.dataElement.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  takeAllData() {
    this.http
      .get(`https://${this.serwerPath}/api/portfolios?populate=*`)
      .subscribe((data: any) => {
        this.dataElement.next(data);
      });
  }

  takItemData(id: string | null) {
    return this.http.get(
      `https://${this.serwerPath}/api/portfolios/${id}?populate=*`,
    );
  }
}
