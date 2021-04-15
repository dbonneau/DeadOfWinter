import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { MenuComponent } from './components/body/menu/menu.component';
import { MenuItemComponent } from './components/body/menu/menu-item/menu-item.component';

@NgModule({
    declarations: [
        BodyComponent,
        MenuComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HighlightModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class HomeModule { }
