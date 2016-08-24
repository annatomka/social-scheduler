import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    },

    
    { path: 'library', component: LibraryComponent },
    //{
    //    path: 'heroes',
    //    component: HeroListComponent,
    //    data: {
    //        title: 'Heroes List'
    //    }
    //},
    //{ path: 'hero/:id', component: HeroDetailComponent },
    //{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);