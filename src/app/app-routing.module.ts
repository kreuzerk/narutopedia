import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'characters', loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
