import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  togglePadding: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output()
  onShowSidebar: EventEmitter<boolean> = new EventEmitter<boolean>()
  platform = false;
  sidebarShow = false;
  sidebar: boolean = false;
  overview = false;
  overviewActive = false;
  settingActive = false;
  customizeActive = false;
  integrationActive = false;
  helpActive = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    switch (this.router.url) {
      case "/overview":
        this.overviewActive = true;
        break;
      case "/customize":
        this.customizeActive = true
        break;
      case "/billing":
        this.settingActive = true
        break;
      case "/integration":
        this.integrationActive = true
        break;
      default:
        this.overviewActive = false
        break;
    }

    if (this.router.url == "/create-program") {
      this.platform = this.sidebar = true;
    }
    if (this.router.url == "/manage-content") {
      this.platform = this.sidebar = true;
    }
    if (this.router.url == "/add-week") {
      this.platform = this.sidebar = true;
    }
  }

  onSidebarChange() {
    this.sidebarShow = !this.sidebarShow
    this.onShowSidebar.emit(this.sidebarShow)
  }
}
