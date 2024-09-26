import { Component, OnInit } from '@angular/core';
import { TrustUsContentComponent } from '../../elements/trust-us-content/trust-us-content.component';
import { dataTrust } from '../../../../public/datas/trustData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trust-us',
  standalone: true,
  imports: [TrustUsContentComponent],
  templateUrl: './trust-us.component.html',
  styleUrl: './trust-us.component.sass',
})
export class TrustUsComponent implements OnInit {
  dataComents: any = [];

  urlAddres = 'https://admin.fora-poligrafia.pl';
  //conected with database

  constructor(private http: HttpClient) {}

  getDataTrust() {
    this.http
      .get(this.urlAddres + '/api/trust-uses?populate=*')
      .subscribe((data: any) => {
        this.dataComents = data.data;
      });
  }

  ngOnInit() {
    // this.dataComents = dataTrust;
    this.getDataTrust();
  }
}
