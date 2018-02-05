import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    /*     { path: 'work', component: ProjectsComponent },
        { path: 'contact', component: ContactComponent }, */
    {
        path: '', component: HomeComponent, children: [
            //    { path: ':projectUrl', component: ProjectComponent }
        ]
    },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
