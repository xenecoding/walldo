import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: "login", component: LoginComponent,
    },
    {
        path: "panel", loadChildren: () => import("./panel/panel.module").then(m => m.PanelModule),
    },
    { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }