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
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionRadioComponent } from './components/pages/core/forms-test/question-radio/question-radio.component';
import { DurationPipe } from './duration.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { QuestionCheckboxComponent } from './components/pages/core/forms-test/question-checkbox/question-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QuestionInputComponent } from './components/pages/core/forms-test/question-input/question-input.component';
import { QuestionSelectComponent } from './components/pages/core/forms-test/question-select/question-select.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TestResultsComponent } from './components/pages/core/forms-test/test-results/test-results.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    NavbarTitleComponent,
    FormsLearningComponent,
    FormsTestComponent,
    LearnSectionComponent,
    NotfoundComponent,
    QuestionRadioComponent,
    DurationPipe,
    QuestionCheckboxComponent,
    QuestionInputComponent,
    QuestionSelectComponent,
    TestResultsComponent,
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
    MatDividerModule,
    HighlightModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule

  ],
  providers: [
    provideAnimationsAsync(),
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
      },

    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
