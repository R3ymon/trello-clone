import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  faBox,
  faWaveSquare,
  faBook,
  faClock,
  faAngleLeft,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    CommonModule,
    DragDropModule,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faBook = faBook;
  faClock = faClock;
  faAngleLeft = faAngleLeft;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'item 1',
      item: [
        {
          label: 'sub Item 1.1',
        },
        {
          label: 'sub Item 1.2',
        },
        {
          label: 'sub Item 1.3',
        },
      ],
    },
    {
      label: 'item 2',
      item: [
        {
          label: 'sub Item 2.1',
        },
      ],
    },
    {
      label: 'item 3',
      item: [
        {
          label: 'sub Item 3.1',
        },
        {
          label: 'sub Item 3.2',
        },
        {
          label: 'sub Item 3.3',
        },
      ],
    },
  ];
}
