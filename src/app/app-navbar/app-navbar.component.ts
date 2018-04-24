import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent implements OnInit {
  constructor(@Inject(TranslateService) public translate) {
    translate.setDefaultLang('de');
    translate.use('de');
  }

  ngOnInit() {
  }

}
