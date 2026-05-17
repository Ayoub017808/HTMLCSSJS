import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quiz-lesson',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="space-y-6 animate-[fade-in_0.5s_ease-out]">
      <div class="mb-6 border-b border-slate-200 pb-6">
        <h2 class="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <mat-icon class="text-amber-500 scale-125">workspace_premium</mat-icon>
          تحدي المعرفة
        </h2>
        <p class="text-slate-600 mt-3 text-lg leading-relaxed">
          اختبر فهمك لما تعلمته في الدروس السابقة عن HTML و CSS و JavaScript. تأكد من استعدادك للمساهمة في بناء المشاريع التقنية العظيمة في الرؤية.
        </p>
      </div>

      @if (!quizCompleted()) {
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div class="flex items-center justify-between mb-8">
            <span class="text-sm font-bold text-slate-500">السؤال {{currentQuestionIndex() + 1}} من {{questions.length}}</span>
            <div class="flex gap-2">
              @for (q of questions; track $index) {
                <div class="h-2 w-8 rounded-full transition-colors" [ngClass]="{'bg-amber-500': $index === currentQuestionIndex(), 'bg-emerald-500': $index < currentQuestionIndex(), 'bg-slate-100': $index > currentQuestionIndex()}"></div>
              }
            </div>
          </div>

          <h3 class="text-2xl font-bold text-slate-800 mb-8">{{ questions[currentQuestionIndex()].text }}</h3>

          <div class="flex flex-col gap-4">
            @for (option of questions[currentQuestionIndex()].options; track $index) {
              <button 
                (click)="selectOption($index)"
                [disabled]="showFeedback()"
                class="w-full text-right p-5 rounded-2xl border-2 transition-all font-medium text-lg flex items-center justify-between group"
                [ngClass]="{
                  'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50 text-slate-700': selectedOption() !== $index && (!showFeedback() || (showFeedback() && $index !== questions[currentQuestionIndex()].correctAnswer)),
                  'border-amber-500 bg-amber-50 text-amber-800': selectedOption() === $index && !showFeedback(),
                  'border-emerald-500 bg-emerald-50 text-emerald-800': showFeedback() && $index === questions[currentQuestionIndex()].correctAnswer,
                  'border-red-500 bg-red-50 text-red-800': showFeedback() && selectedOption() === $index && $index !== questions[currentQuestionIndex()].correctAnswer
                }">
                <span>{{ option }}</span>
                @if (showFeedback()) {
                  @if ($index === questions[currentQuestionIndex()].correctAnswer) {
                    <mat-icon class="text-emerald-500">check_circle</mat-icon>
                  }
                  @if (selectedOption() === $index && $index !== questions[currentQuestionIndex()].correctAnswer) {
                    <mat-icon class="text-red-500">cancel</mat-icon>
                  }
                } @else {
                   <div class="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-amber-400 transition-colors" [ngClass]="{'border-amber-500 bg-amber-500': selectedOption() === $index}"></div>
                }
              </button>
            }
          </div>

          @if (showFeedback()) {
            <div class="mt-8 animate-in fade-in slide-in-from-bottom-2">
               <button (click)="nextQuestion()" class="bg-slate-900 text-white font-bold py-4 px-8 rounded-xl w-full md:w-auto hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                 <span>{{ currentQuestionIndex() === questions.length - 1 ? 'إنهاء التحدي' : 'السؤال التالي' }}</span>
                 <mat-icon>arrow_back</mat-icon>
               </button>
            </div>
          }
        </div>
      } @else {
        <div class="bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-sm relative overflow-hidden flex flex-col items-center">
            
            <div class="absolute inset-0 pointer-events-none opacity-40">
                <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-amber-500 rounded-full animate-ping" style="animation-delay: 100ms;"></div>
                <div class="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping" style="animation-delay: 200ms;"></div>
            </div>

            <div class="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 relative z-10">
               <mat-icon class="text-emerald-600 text-6xl w-[60px] h-[60px]">emoji_events</mat-icon>
            </div>
            
            <h3 class="text-3xl font-bold text-slate-800 mb-4 relative z-10">مبروك! أكملت التحدي بنجاح.</h3>
            
            <p class="text-slate-600 text-lg max-w-md mx-auto mb-8 relative z-10">لقد أثبتّ قدراتك في فهم الأساسيات لبناء واجهات الويب. خطوة ممتازة نحو احتراف البرمجة.</p>
            
            <div class="bg-slate-50 border border-slate-100 p-6 rounded-2xl w-full max-w-md relative z-10">
               <span class="text-sm font-bold text-slate-500 block mb-2">نتيجتك</span>
               <span class="text-5xl font-black text-emerald-600 tracking-tighter">{{ score() }} <span class="text-xl text-slate-400">/ {{ questions.length }}</span></span>
            </div>

            <button (click)="resetQuiz()" class="mt-8 text-slate-500 hover:text-slate-800 font-bold flex items-center justify-center gap-2 transition-colors relative z-10">
              <mat-icon>refresh</mat-icon>
              إعادة المحاولة
            </button>
        </div>
      }
    </div>
  `
})
export class QuizLessonComponent {
  questions = [
    {
      text: 'أي لغة مسؤولة عن بناء الهيكل الأساسي للصفحة (مثل تأسيس مشروع مدينة نيوم)؟',
      options: ['JavaScript', 'HTML', 'Java', 'CSS'],
      correctAnswer: 1
    },
    {
      text: 'ما هو الوسم (Tag) المناسب في لغة HTML لكتابة "عنوان رئيسي" في الصفحة؟',
      options: ['<p>', '<img>', '<h1>', '<header>'],
      correctAnswer: 2
    },
    {
      text: 'لإضافة ألوان وتنسيقات جميلة تشبه معمار الدرعية التراثي، أي لغة نستخدم؟',
      options: ['HTML', 'Python', 'CSS', 'JavaScript'],
      correctAnswer: 2
    },
    {
      text: 'عندما نحتاج لإضافة تأثير ديناميكي أو تفاعل مثل "حجز تذكرة موسم الرياض" عند النقر على زر، ماذا نستخدم؟',
      options: ['CSS', 'HTML', 'JavaScript', 'SQL'],
      correctAnswer: 2
    }
  ];

  currentQuestionIndex = signal(0);
  selectedOption = signal<number | null>(null);
  showFeedback = signal(false);
  score = signal(0);
  quizCompleted = signal(false);

  selectOption(index: number) {
    if (this.showFeedback()) return;
    this.selectedOption.set(index);
    this.showFeedback.set(true);
    
    if (index === this.questions[this.currentQuestionIndex()].correctAnswer) {
      this.score.update(s => s + 1);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
      this.selectedOption.set(null);
      this.showFeedback.set(false);
    } else {
      this.quizCompleted.set(true);
    }
  }

  resetQuiz() {
    this.currentQuestionIndex.set(0);
    this.selectedOption.set(null);
    this.showFeedback.set(false);
    this.score.set(0);
    this.quizCompleted.set(false);
  }
}
