import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { buildMenu, MenuData } from './menu';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public openedMenu = new BehaviorSubject<string>('');
    public menuData: MenuData;

    private activeMenu: string;

    menuItemHeight: number;
    activeMenuClass = 'active-menu-bar';
    activeMenuBorder: HTMLElement;

    constructor(public readonly router: Router) {
        this.menuData = buildMenu();
    }

    /**
     * Check active route URL and search for a match in menu data
     * to get active menu
     * @returns active menu ID as string
     */
    getActiveMenu(): string {
        for (const menu of this.menuData) {
            if (menu.route === this.router.url) {
                this.activeMenu = menu.id;
            }
        }
        return this.activeMenu;
    }

    /**
     * Updates display to show active menu
     * @param menuId string - ID of the targeted menu item
     */
    setActiveMenu(menuId) {
        this.activeMenuBorder = document.querySelector(`.${this.activeMenuClass}`);
        this.menuItemHeight = this.activeMenuBorder.clientHeight;
        const activeMenu = document.querySelector(`[data-id="${menuId}"]`);

        if (activeMenu) {
            const activeMenuIndex = activeMenu.getAttribute('data-index');
            this.activeMenuBorder.style.top = `${+activeMenuIndex * this.menuItemHeight}px`;
        }
    }
}
