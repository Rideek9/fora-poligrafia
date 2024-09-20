import { Component, OnInit } from '@angular/core';
import { TrustUsContentComponent } from '../../elements/trust-us-content/trust-us-content.component';
import { dataTrust } from '../../../../public/datas/trustData';

@Component({
  selector: 'app-trust-us',
  standalone: true,
  imports: [TrustUsContentComponent],
  templateUrl: './trust-us.component.html',
  styleUrl: './trust-us.component.sass',
})
export class TrustUsComponent implements OnInit {
  dataComents: any = [];

  ngOnInit() {
    this.dataComents = dataTrust;
  }
}
