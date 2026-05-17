import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IntroLessonComponent } from './intro-lesson';
import { HtmlLessonComponent } from './html-lesson';
import { CssLessonComponent } from './css-lesson';
import { JsLessonComponent } from './js-lesson';
import { QuizLessonComponent } from './quiz-lesson';
import { ProjectLessonComponent } from './project-lesson';

export type LessonType = 'intro' | 'html' | 'css' | 'js' | 'quiz' | 'project';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    CommonModule,
    MatIconModule,
    IntroLessonComponent,
    HtmlLessonComponent,
    CssLessonComponent,
    JsLessonComponent,
    QuizLessonComponent,
    ProjectLessonComponent
  ],
  templateUrl: './app.html',
})
export class App {
  currentLesson = signal<LessonType>('intro');
  isSidebarOpen = signal<boolean>(true);

  selectLesson(lesson: LessonType) {
    this.currentLesson.set(lesson);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.isSidebarOpen.set(false);
    }
  }
}
