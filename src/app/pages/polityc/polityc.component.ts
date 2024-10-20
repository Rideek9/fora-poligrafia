import { Component, OnInit } from '@angular/core';
import { PrivatePoliticComponent } from '../../elements/private-politic/private-politic.component';
import { MetaTagService } from '../../service/meta-tag.service';

@Component({
  selector: 'app-polityc',
  standalone: true,
  imports: [PrivatePoliticComponent],
  templateUrl: './polityc.component.html',
  styleUrl: './polityc.component.sass',
})
export class PolitycComponent implements OnInit {
  constructor(private meta: MetaTagService) {}

  ngOnInit() {
    this.meta.getTitle('Fora Poligrafia - polityka prywatności');
  }
}
