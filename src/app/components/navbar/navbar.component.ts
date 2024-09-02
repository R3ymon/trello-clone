import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  faBell,
  faInfoCircle,
  faClose,
  faBox,
  faWaveSquare,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
  isOpenBody = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faBook = faBook;
}
