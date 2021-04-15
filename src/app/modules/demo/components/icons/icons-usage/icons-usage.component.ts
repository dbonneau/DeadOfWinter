import { Component } from '@angular/core';
import { IconsComponent } from '../icons.component';

@Component({
    selector: 'app-icons-usage',
    templateUrl: './icons-usage.component.html',
    styleUrls: ['./icons-usage.component.scss']
})
export class IconsUsageComponent extends IconsComponent {
    public iconCheck = '<em class="icon icon-check"></em>';
    public iconCheckPrimary = '<em class="icon icon-check colors-primary"></em>';
    public iconCheckFontSizeMd = '<em class="icon icon-check font-size-md"></em>';

    constructor() {
        super();
    }
}
