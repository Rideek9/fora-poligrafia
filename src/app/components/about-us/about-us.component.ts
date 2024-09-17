import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass',
})
export class AboutUsComponent implements OnInit {
  //data with about us section. Information about company.
  information = [
    {
      name: 'czemu my',
      description:
        ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      icon: 'fa-solid fa-trophy',
      piority: 2,
      active: true,
    },
    {
      name: 'wizja',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: 'fa-solid fa-lightbulb',
      piority: 1,
      active: true,
    },
    {
      name: 'kim jesteśmy',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .",
      icon: 'fa-solid fa-people-group',
      piority: 4,
      active: true,
    },
    {
      name: 'doświadczenie',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
      icon: 'fa-solid fa-list-check',
      piority: 3,
      active: true,
    },
    {
      name: 'test5',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .",
      icon: 'Logo5',
      piority: 1,
      active: false,
    },
  ];

  // sort information from piority
  sortInformation = this.information.sort((a, b) => a.piority - b.piority);

  //draw active element on the run site

  elementActive = '';

  ngOnInit() {
    this.elementActive =
      this.sortInformation[Math.floor(this.sortInformation.length / 2)].name;
  }

  // function to change active element
  Activated = (testElemetn: any) => {
    this.elementActive = testElemetn;
  };
}
