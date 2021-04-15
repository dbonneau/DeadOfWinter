import { Component } from '@angular/core';

@Component({
    selector: 'app-icons-contribute',
    templateUrl: './icons-contribute.component.html',
    styleUrls: ['./icons-contribute.component.scss']
})
export class IconsContributeComponent {
    public newIcon = `.icon-new-icon:before {
    content: "\e123";
  }`;

    constructor() { }

}
