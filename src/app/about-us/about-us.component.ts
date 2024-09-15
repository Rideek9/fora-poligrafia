import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.sass',
})
export class AboutUsComponent implements OnInit {
  information = [
    {
      name: 'test1',
      description:
        ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      icon: 'Logo',
    },
    {
      name: 'test2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      icon: 'Logo2',
    },
    {
      name: 'test3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .",
      icon: 'Logo3',
    },
    {
      name: 'test4',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
      icon: 'Logo4',
    },
    {
      name: 'test5',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting' +
        " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .",
      icon: 'Logo5',
    },
  ];

  elementActive = '';

  ngOnInit() {
    this.elementActive =
      this.information[Math.floor(this.information.length / 2)].name;
  }

  Activated = (testElemetn: any) => {
    this.elementActive = testElemetn;
    console.log(this.elementActive);
  };
}
