import { Component, Input } from '@angular/core';
import { PortoflioService } from '../../service/portoflio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.sass',
})
export class PortfolioItemComponent {
  @Input() data!: any;
  serwerPath: string = '';
  activeData: any = [];
  activeId: string = '';

  constructor(public portServ: PortoflioService) {
    this.serwerPath = portServ.serwerPath;
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  activElement(id: string): void {
    this.activeId = id;
    document.body.style.overflow = 'hidden';
  }
}
