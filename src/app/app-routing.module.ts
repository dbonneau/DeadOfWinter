import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTING_DEMO } from '@consts/consts';
import { BodyComponent } from './modules/home/components/body/body.component';

const routes: Routes = [
    {
        path: '',
        component: BodyComponent
    },
    {
        path: ROUTING_DEMO,
        loadChildren: () => import('./modules/demo/demo.module')
            .then(m => m.DemoModule)
    },
    // {
    //   path: '**',
    //   component: ErrorComponent,
    //   data: { type: 404, message: 'Page not found' }
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
