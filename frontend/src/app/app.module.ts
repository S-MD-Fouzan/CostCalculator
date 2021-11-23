import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SectionService } from './services/section.service';
import { HomeComponent } from './components/container/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { QuestionnaireComponent } from './components/impl/questionnaire/questionnaire.component';
import { AllSectionsComponent } from './components/container/all-sections/all-sections.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SummaryComponent } from './components/shared/summary/summary.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './components/shared/question/question.component';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { AlertBoxComponent } from './components/shared/alert-box/alert-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FinalOverviewComponent } from './components/impl/final-overview/final-overview.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { QuestionOverviewComponent } from './components/shared/question-overview/question-overview.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { SectionPreviewCardComponent } from './components/impl/section-preview-card/section-preview-card.component';
import { IconComponent } from './components/shared/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionnaireComponent,
    AllSectionsComponent,
    SummaryComponent,
    QuestionComponent,
    AlertBoxComponent,
    FinalOverviewComponent,
    QuestionOverviewComponent,
    ButtonComponent,
    SectionPreviewCardComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [SectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
