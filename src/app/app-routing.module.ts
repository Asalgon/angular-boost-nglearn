import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsLearningComponent } from './components/pages/core/forms-learning/forms-learning.component';
import { HomeComponent } from './components/pages/core/home/home.component';
import { FormsTestComponent } from './components/pages/core/forms-test/forms-test.component';
import { NotfoundComponent } from './components/pages/core/notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'learn', component: FormsLearningComponent},
  {path: 'test', component: FormsTestComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
