import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[app-menu-item]',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
    @Input() menu: {
        id: string;
        icon: string;
        label: string;
    };
}
