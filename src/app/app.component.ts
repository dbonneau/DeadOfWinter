import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Event
} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading: boolean;
    showWidth = false;
    windowSize: number;

    constructor(
        private readonly _translate: TranslateService,
        private readonly _router: Router
    ) {
        this.loading = false;
        this.windowSize = 0;
        this._translate.setDefaultLang('fr');
        this._translate.use('fr');

        this._router.events.subscribe(routerEvent => this.checkRouterEvent(routerEvent));
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (
            routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError
        ) {
            this.loading = false;
        }
    }
}
