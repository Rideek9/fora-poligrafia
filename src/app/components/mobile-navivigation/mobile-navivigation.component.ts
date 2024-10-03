import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../service/global-variable.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navivigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile-navivigation.component.html',
  styleUrl: './mobile-navivigation.component.sass',
})
export class MobileNavivigationComponent implements OnInit {
  social: { name: string; icon: string }[] = [];

  navigation: { name: string; active: boolean; url: string }[] = [];

  navigationElement: boolean = false;

  constructor(private dataGlobal: GlobalVariableService) {}

  ngOnInit() {
    this.social = this.dataGlobal.socials;
  }

  openNavigation() {
    this.navigationElement = !this.navigationElement;
  }
}