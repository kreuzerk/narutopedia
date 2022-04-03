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
  { path: 'characters', loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'rating', loadChildren: () => import('./features/rating/rating.module').then(m => m.RatingModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
