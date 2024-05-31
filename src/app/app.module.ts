import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PageHeaderComponent } from './components/pages/header/page-header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarTitleComponent } from './components/pages/header/utils/navbar-title/navbar-title.component';
import { FormsLearningComponent } from './components/pages/core/forms-learning/forms-learning.component';
import { FormsTestComponent } from './components/pages/core/forms-test/forms-test.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LearnSectionComponent } from './components/pages/core/forms-learning/learn-section/learn-section.component';
import { NotfoundComponent } from './components/pages/core/notfound/notfound.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from './services/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    NavbarTitleComponent,
    FormsLearningComponent,
    FormsTestComponent,
    LearnSectionComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatRadioModule,
    SharedModule

  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
