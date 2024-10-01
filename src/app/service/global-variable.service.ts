import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariableService {
  urlAddres = 'https://admin.fora-poligrafia.pl';
  private showMoreElementText = new BehaviorSubject<string>('');
  showMoreElementText$ = this.showMoreElementText.asObservable();
  private activePOP = new BehaviorSubject<boolean>(false);
  activePOP$ = this.activePOP.asObservable();
  private idElement = new BehaviorSubject<string>('');
  idElement$ = this.idElement.asObservable();
  private dataPopup = new BehaviorSubject<[]>([]);
  dataPopup$ = this.dataPopup.asObservable();

  constructor(private http: HttpClient) {}

  seeMorePopap(index: any) {
    this.showMoreElementText.next(index);
    this.activePOP.next(true);
  }

  closePopap(index: any) {
    this.activePOP.next(index);
  }

  takeIDElement(index: any) {
    this.idElement.next(index);
    const data = this.http.get(
      `${this.urlAddres}/api/menu-foras/${index}?populate=*`,
    );
    data.subscribe((data: any) => {
      this.dataPopup.next(data);
    });
  }

  cleanPopapData() {
    this.dataPopup.next([]);
  }
}
