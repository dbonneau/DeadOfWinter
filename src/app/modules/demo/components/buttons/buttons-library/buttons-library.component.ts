import { Component } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-buttons-library',
    templateUrl: './buttons-library.component.html',
    styleUrls: ['./buttons-library.component.scss']
})
export class ButtonsLibraryComponent {
    code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }`;

    loading: boolean;
    timer: Observable<number>;
    subscription: Subscription;
    // eslint-disable-next-line no-magic-numbers
    readonly time = 3000;

    linkDefault = '<a>Lien par défaut</a>';
    linkButton = '<a class="button">Lien avec style de bouton</a>';
    buttonDefault = '<button>Bouton par défaut</button>';
    buttonOutline = '<button class="button-outline">Bouton outline</button>';
    buttonDisabled = '<button disabled>Bouton désactivé</button>';
    buttonMedium = '<button class="is-medium">Bouton format "medium"</button>';
    buttonSmall = '<button class="is-small">Bouton format "small"</button>';
    buttonIconLeft = `<button class="left-icon">
  <em class="icon-search"></em>
  Bouton avec icône à gauche
</button>`;
    buttonIconRight = `<button class="right-icon">
  Bouton avec icône à droite
  <em class="icon-search"></em>
</button>`;
    buttonHoverWhite = '<button class="button-hover-white">hover white</button>';

    constructor() { }

    animateButton() {
        this.loading = true;
        this.timer = timer(this.time);

        this.subscription = this.timer.subscribe(() => {
            this.loading = false;
        });
    }

}
