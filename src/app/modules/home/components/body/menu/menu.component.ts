import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/navigation/navigation.service';
import { MENU_DISPLAY_DURATION } from '@consts/consts';
import { USER_MENU } from '@consts/routes';
import { ToggleMenu, BackdropFade } from '@shared/animations';
import { MenuData } from '@core/navigation/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [
        ToggleMenu.getAnimations(`${MENU_DISPLAY_DURATION}ms ease`),
        BackdropFade.getAnimations(`${MENU_DISPLAY_DURATION}ms ease`)
    ]
})
export class MenuComponent implements OnInit, AfterViewInit {
    menuData: MenuData;
    userMenu = USER_MENU;

    constructor(
        public readonly nav: NavigationService
    ) { }

    ngOnInit() {
        this.menuData = this.nav.menuData.filter((menu) => menu.id !== USER_MENU);
    }

    ngAfterViewInit() {
        this.nav.setActiveMenu(this.nav.getActiveMenu());
    }
}
