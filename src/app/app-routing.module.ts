import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsLearningComponent } from './components/pages/core/forms-learning/forms-learning.component';
import { FormsTestComponent } from './components/pages/core/forms-test/forms-test.component';
import { NotfoundComponent } from './components/pages/core/notfound/notfound.component';
import { TestResultsComponent } from './components/pages/core/forms-test/test-results/test-results.component';
import { testGuard } from './test.guard';

const routes: Routes = [
  {path: '', redirectTo: '/learn', pathMatch: 'full'},
  {path: 'learn', component: FormsLearningComponent},
  {path: 'test', component: FormsTestComponent},
  {path: 'results', component: TestResultsComponent, canActivate: [testGuard]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
