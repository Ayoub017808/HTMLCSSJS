import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface TourProject {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
  category: string;
}

@Component({
  selector: 'app-project-lesson',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="space-y-8 animate-[fade-in_0.8s_ease-out]">
      
      <!-- Hero Section -->
      <div class="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl p-8 md:p-14 text-white group">
        <!-- Abstract Background -->
        <div class="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed group-hover:scale-105 transition-transform duration-[15s]">
          <div class="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/30 blur-[80px] animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div class="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-teal-500/20 blur-[80px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        </div>
        
        <div class="relative z-10 flex flex-col items-start max-w-3xl text-right w-full">
          <div class="flex justify-end w-full">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-md mb-6 text-indigo-200">
              <mat-icon class="text-[18px] w-[18px] h-[18px]">workspace_premium</mat-icon>
              مشروع الرؤية
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight text-right w-full">
            <span class="bg-gradient-to-r from-indigo-300 via-white to-teal-300 bg-clip-text text-transparent transform transition-transform duration-700 group-hover:translate-x-[-10px] inline-block">
              منصة "روح السعودية"
            </span>
          </h2>
          <p class="text-lg md:text-xl text-slate-300 leading-relaxed text-right font-light w-full">
            حان الوقت لتطبيق ما تعلمته! مشروعك الختامي سيكون بناء صفحة ترويجية سياحية لأحد مشاريع رؤية المملكة 2030 (مثل مدينة العلا، أو مشروع البحر الأحمر).
          </p>
          <div class="mt-8 flex justify-end w-full">
            <button aria-label="استعراض المشاريع" (click)="scrollToProjects()" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl backdrop-blur-md flex items-center gap-3 transition-colors outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              استكشف المشاريع
              <mat-icon class="animate-bounce">arrow_downward</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Requirements Section (Left/Main side) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden h-full">
            <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none"></div>
            
            <h3 class="text-2xl font-bold text-slate-800 mb-8 flex items-center justify-end gap-3 relative z-10 text-right">
              المتطلبات الأساسية
              <mat-icon class="text-indigo-500">task_alt</mat-icon>
            </h3>
            
            <div class="space-y-6 relative z-10">
              <!-- Requirement 1 -->
              <div class="group flex flex-col gap-0 overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 shadow-sm">
                <div class="flex items-start gap-5 p-5">
                  <div class="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 font-black text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <mat-icon>html</mat-icon>
                  </div>
                  <div class="flex-1 text-right">
                    <div class="flex items-center justify-end gap-2 mb-2">
                       <button aria-label="تلميحة HTML" [attr.aria-expanded]="activeTip() === 'html'" (click)="toggleTip('html')" class="p-1.5 rounded-full hover:bg-orange-100 text-orange-400 hover:text-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                         <mat-icon class="text-sm scale-75">info</mat-icon>
                       </button>
                       <h4 class="font-bold text-slate-800 text-lg group-hover:text-amber-700 transition-colors">بناء الهيكل الدلالي</h4>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed">استخدم <code>&lt;header&gt;</code> للعنوان، <code>&lt;main&gt;</code> للمحتوى، و <code>&lt;section&gt;</code> للوجهات السياحية لضمان صداقة محركات البحث (SEO).</p>
                  </div>
                </div>
                @if (activeTip() === 'html') {
                  <div class="px-5 pb-5 pt-0 bg-orange-50/50 animate-[fade-in_0.3s_ease-out]">
                    <div class="p-4 rounded-xl border border-orange-100 bg-white shadow-sm text-right">
                       <h5 class="text-xs font-bold text-orange-700 mb-2 flex items-center justify-end gap-1">
                         نصيحة تقنية
                         <mat-icon class="scale-50">tips_and_updates</mat-icon>
                       </h5>
                       <p class="text-xs text-orange-900 leading-relaxed">
                         تأكد من استخدام الوسم <code class="bg-orange-100 px-1 rounded">alt</code> لجميع الصور. هذا لا يساعد فقط في الـ SEO بل يجعل موقعك متاحاً للجميع (Accessibility).
                       </p>
                    </div>
                  </div>
                }
              </div>
              
              <!-- Requirement 2 -->
              <div class="group flex flex-col gap-0 overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 shadow-sm">
                <div class="flex items-start gap-5 p-5">
                  <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <mat-icon>css</mat-icon>
                  </div>
                  <div class="flex-1 text-right">
                    <div class="flex items-center justify-end gap-2 mb-2">
                       <button aria-label="تلميحة CSS" [attr.aria-expanded]="activeTip() === 'css'" (click)="toggleTip('css')" class="p-1.5 rounded-full hover:bg-blue-100 text-blue-400 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                         <mat-icon class="text-sm scale-75">info</mat-icon>
                       </button>
                       <h4 class="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">تنسيق الواجهة البصرية</h4>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed">طبّق ألواناً مستوحاة من طبيعة المملكة (مثل ألوان الصحراء أو البحر الأحمر). استخدم خطوطاً عربية أنيقة وظلال للبطاقات عبر <code>box-shadow</code>.</p>
                  </div>
                </div>
                @if (activeTip() === 'css') {
                  <div class="px-5 pb-5 pt-0 bg-blue-50/50 animate-[fade-in_0.3s_ease-out]">
                    <div class="p-4 rounded-xl border border-blue-100 bg-white shadow-sm text-right">
                       <h5 class="text-xs font-bold text-blue-700 mb-2 flex items-center justify-end gap-1">
                         أفضل الممارسات
                         <mat-icon class="scale-50">palette</mat-icon>
                       </h5>
                       <p class="text-xs text-blue-900 leading-relaxed">
                         استخدم وحدات قياس مرنة مثل <code class="bg-blue-100 px-1 rounded">rem</code> و <code class="bg-blue-100 px-1 rounded">vh/vw</code> بدلاً من <code class="bg-blue-100 px-1 rounded">px</code> لجعل التصميم يتأقلم مع أحجام الشاشات المختلفة بسهولة.
                       </p>
                    </div>
                  </div>
                }
              </div>
              
              <!-- Requirement 3 -->
              <div class="group flex flex-col gap-0 overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 shadow-sm">
                <div class="flex items-start gap-5 p-5">
                  <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 font-black text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <mat-icon>javascript</mat-icon>
                  </div>
                  <div class="flex-1 text-right">
                    <div class="flex items-center justify-end gap-2 mb-2">
                       <button aria-label="تلميحة JS" [attr.aria-expanded]="activeTip() === 'js'" (click)="toggleTip('js')" class="p-1.5 rounded-full hover:bg-purple-100 text-purple-400 hover:text-purple-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                         <mat-icon class="text-sm scale-75">info</mat-icon>
                       </button>
                       <h4 class="font-bold text-slate-800 text-lg group-hover:text-purple-700 transition-colors">التفاعل والمنطق</h4>
                    </div>
                    <p class="text-slate-600 text-sm leading-relaxed">برمج زراً لحجز رحلة أو عرض تفاصيل أكثر <code>addEventListener</code>. أظهر نافذة منبثقة تفاعلية عند النقر.</p>
                  </div>
                </div>
                @if (activeTip() === 'js') {
                  <div class="px-5 pb-5 pt-0 bg-purple-50/50 animate-[fade-in_0.3s_ease-out]">
                    <div class="p-4 rounded-xl border border-purple-100 bg-white shadow-sm text-right">
                       <h5 class="text-xs font-bold text-purple-700 mb-2 flex items-center justify-end gap-1">
                         تطوير متقدم
                         <mat-icon class="scale-50">code</mat-icon>
                       </h5>
                       <p class="text-xs text-purple-900 leading-relaxed">
                         استخدم <code class="bg-purple-100 px-1 rounded">localStorage</code> لحفظ خيارات المستخدم حتى لا يفقدها عند تحديث الصفحة أو العودة مرة أخرى.
                       </p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Inspiration & Tools (Right/Sidebar side) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Inspiration Card -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group h-full">
            <div class="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10 text-right h-full flex flex-col">
              <div class="flex items-center justify-end gap-3 mb-6 pb-4 border-b border-indigo-100">
                <h3 class="text-xl font-bold text-indigo-900">نصائح للتميز والإبداع</h3>
                <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <mat-icon>auto_awesome</mat-icon>
                </div>
              </div>
              
              <ul class="space-y-4 text-indigo-900/80 font-medium text-sm flex-1">
                <li class="group/item flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-white/80 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default border border-transparent hover:border-indigo-100 bg-white/40">
                  <span class="group-hover/item:-translate-x-1 transition-transform">استلهم التصميم من منصة "روح السعودية" الرسمية.</span>
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-500 group-hover/item:scale-110 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all shadow-sm"><mat-icon class="scale-75">palette</mat-icon></div>
                </li>
                <li class="group/item flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-white/80 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default border border-transparent hover:border-indigo-100 bg-white/40">
                  <span class="group-hover/item:-translate-x-1 transition-transform">استخدم صوراً عالية الجودة تبرز جمال المعالم.</span>
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-500 group-hover/item:scale-110 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all shadow-sm"><mat-icon class="scale-75">crop_original</mat-icon></div>
                </li>
                <li class="group/item flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-white/80 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default border border-transparent hover:border-indigo-100 bg-white/40">
                  <span class="group-hover/item:-translate-x-1 transition-transform">استخدم تصميم متجاوب يعمل بشكل جيد على الهواتف.</span>
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-500 group-hover/item:scale-110 group-hover/item:bg-indigo-500 group-hover/item:text-white transition-all shadow-sm"><mat-icon class="scale-75">devices</mat-icon></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action (Moved here) -->
      <div class="bg-emerald-600 text-white rounded-3xl p-8 border border-emerald-500 shadow-xl shadow-emerald-600/20 text-center relative overflow-hidden group transition-all duration-500">
         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
         
         <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
           <div class="text-right">
             <h3 class="text-2xl font-bold mb-2 flex justify-end items-center gap-3">
                ابدأ البرمجة الآن
                <mat-icon class="text-4xl text-emerald-300 drop-shadow-md group-hover:rotate-12 transition-transform duration-500">code</mat-icon>
             </h3>
             <p class="text-emerald-100 text-sm font-medium">احصل على هيكل المشروع الأساسي بضغطة زر واحدة لتسريع عملية البناء!</p>
           </div>
           <button aria-label="توليد الهيكل" (click)="toggleScaffold()" class="flex items-center justify-center gap-2 text-sm font-bold bg-white hover:bg-emerald-50 text-emerald-700 py-3 px-8 rounded-xl shrink-0 shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-95">
              <span>{{ showScaffold() ? 'إخفاء الأكواد' : 'تأسيس الملفات الأساسية' }}</span>
              <mat-icon class="scale-90">{{ showScaffold() ? 'close' : 'create_new_folder' }}</mat-icon>
           </button>
         </div>

         @if (showScaffold()) {
           <div class="mt-8 text-right animate-[fade-in-down_0.5s_ease-out] relative z-10">
             <div class="bg-emerald-950 rounded-2xl p-4 overflow-hidden shadow-inner border border-emerald-500/30">
               <div class="flex items-center justify-between mb-2 text-[10px] text-emerald-400 font-mono uppercase tracking-widest px-2">
                 <button aria-label="نسخ الكود" (click)="copyCode()" class="flex items-center gap-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                   <mat-icon class="text-xs scale-75">content_copy</mat-icon>
                   نسخ الكود
                 </button>
                 <span>index.html</span>
               </div>
               <pre class="text-[11px] font-mono text-emerald-200 overflow-x-auto p-2 scrollbar-thin scrollbar-thumb-emerald-800" dir="ltr"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ar" dir="rtl"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;روح السعودية&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt; &lt;!-- شعار الموقع --&gt; &lt;/header&gt;
    &lt;main&gt; &lt;!-- المحتوى الرئيسي --&gt; &lt;/main&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
             </div>
             <p class="text-[10px] text-emerald-200 mt-2 font-medium">قم بإنشاء ملفات <code class="bg-emerald-900/50 px-1 rounded">style.css</code> و <code class="bg-emerald-900/50 px-1 rounded">script.js</code> في نفس المجلد.</p>
           </div>
         }
      </div>

      <!-- Projects List Section -->
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden w-full mt-8" id="projects-section">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 relative z-10">
          <!-- Filters -->
          <div class="flex flex-wrap items-center gap-2" dir="rtl">
            @for (cat of categories; track cat) {
              <button [attr.aria-label]="cat" [attr.aria-pressed]="activeFilter() === cat" (click)="activeFilter.set(cat)"
                class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                [ngClass]="activeFilter() === cat ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'">
                {{ cat }}
              </button>
            }
          </div>
          
          <h3 class="text-2xl font-bold text-slate-800 flex items-center justify-end gap-3 text-right">
            اختر وجهتك للمشروع
            <mat-icon class="text-teal-500">explore</mat-icon>
          </h3>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          @for (project of filteredProjects(); track project.id) {
            <button [attr.aria-label]="project.name" [attr.aria-expanded]="selectedProject()?.id === project.id" (click)="selectedProject.set(project)" class="group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden text-right block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] bg-white relative z-0" [ngClass]="{'border-teal-400 bg-teal-50 ring-2 ring-teal-200': selectedProject()?.id === project.id, 'border-slate-100 hover:border-teal-300': selectedProject()?.id !== project.id}">
              <div class="h-40 sm:h-48 overflow-hidden relative">
                <img [src]="project.image" loading="lazy" [alt]="project.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerpolicy="no-referrer">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
                <h4 class="absolute bottom-3 right-4 text-white font-bold text-lg drop-shadow-md">{{ project.name }}</h4>
                <span class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                  {{ project.category }}
                </span>
              </div>
              <div class="p-5">
                <p class="text-sm text-slate-600 line-clamp-2 leading-relaxed opacity-90">{{ project.description }}</p>
                <div class="mt-4 flex justify-end">
                   <span class="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" [ngClass]="{'text-teal-700': selectedProject()?.id === project.id, 'text-teal-600': selectedProject()?.id !== project.id}">
                     التفاصيل
                     <mat-icon class="scale-50">arrow_back</mat-icon>
                   </span>
                </div>
              </div>
            </button>
          }
        </div>

        <!-- Project Details Expanded -->
        @if (selectedProject()) {
          <div class="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100 animate-[fade-in-down_0.4s_ease-out] text-right relative overflow-hidden shadow-inner">
            <button aria-label="إغلاق المشروع" (click)="selectedProject.set(null)" class="absolute top-4 left-4 p-2 text-teal-500 hover:text-teal-800 hover:bg-teal-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 z-10 bg-white shadow-sm border border-teal-100">
              <mat-icon class="scale-90">close</mat-icon>
            </button>
            <div class="flex flex-col md:flex-row-reverse gap-8 items-start relative z-0">
               <div class="w-full md:w-5/12 h-56 md:h-full rounded-xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                 <img [src]="selectedProject()?.image" loading="lazy" [alt]="selectedProject()?.name" class="w-full h-full object-cover" referrerpolicy="no-referrer">
               </div>
               <div class="flex-1 w-full">
                 <h4 class="text-3xl font-black text-teal-900 mb-4">{{ selectedProject()?.name }}</h4>
                 <p class="text-teal-800 text-base leading-loose mb-6">{{ selectedProject()?.details }}</p>
                 
                 <!-- Action steps -->
                 <div class="bg-white p-6 rounded-xl border border-teal-100 shadow-sm mt-6">
                    <h5 class="font-bold text-slate-800 mb-5 flex items-center justify-end gap-2 text-base">
                      خطوات التنفيذ
                      <mat-icon class="text-teal-500 scale-90">assignment_turned_in</mat-icon>
                    </h5>
                    <ul class="space-y-4 text-right">
                      <li class="flex items-start justify-end gap-4 text-sm text-slate-700 font-medium">
                         <span class="mt-0.5 leading-relaxed">أنشئ هيكل HTML سليم باستخدام وسوم دلالية.</span>
                         <div class="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-500"><mat-icon class="scale-75">check</mat-icon></div>
                      </li>
                      <li class="flex items-start justify-end gap-4 text-sm text-slate-700 font-medium">
                         <span class="mt-0.5 leading-relaxed">صمم واجهة جذابة باستخدام CSS تتوافق مع هوية المشروع وتعمل على مختلف الشاشات.</span>
                         <div class="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-500"><mat-icon class="scale-75">check</mat-icon></div>
                      </li>
                      <li class="flex items-start justify-end gap-4 text-sm text-slate-700 font-medium">
                         <span class="mt-0.5 leading-relaxed">أضف تفاعلات ديناميكية وصور تفاعلية مستخدماً JavaScript.</span>
                         <div class="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 text-teal-500"><mat-icon class="scale-75">check</mat-icon></div>
                      </li>
                    </ul>
                 </div>
               </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    @keyframes fade-in-down {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ProjectLessonComponent {
  activeTip = signal<string | null>(null);
  showScaffold = signal(false);

  projects: TourProject[] = [
    {
      id: 'alula',
      name: 'العلا',
      description: 'متحف حي يجمع الطبيعة الساحرة والتاريخ الممتد.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Elephant_Rock_2020.jpg?width=800',
      details: 'تعتبر العلا من أهم الوجهات السياحية في المملكة، حيث تضم مدائن صالح (الحجر) أول موقع تراث عالمي لليونسكو في السعودية. قم ببناء صفحة تستعرض جمال الطبيعة الصخرية، واجعل المستخدمين قادرين على تصفح المعالم مثل قاعة مرايا وصخرة الفيل.',
      category: 'تراث وتاريخ'
    },
    {
      id: 'redsea',
      name: 'مشروع البحر الأحمر',
      description: 'وجهة سياحية فاخرة ومستدامة على الساحل الغربي.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Turquoise_Red_Sea_Waves_(3002926462).jpg?width=800',
      details: 'يركز مشروع البحر الأحمر على السياحة البيئية المستدامة. صمم صفحتك لتبرز الجزر البكر، الشعب المرجانية الفريدة والمنتجعات الفاخرة، مع التركيز التام على التصاميم المريحة للعين.',
      category: 'طبيعة وبيئة'
    },
    {
      id: 'diriyah',
      name: 'بوابة الدرعية',
      description: 'جوهرة المملكة ومهد الدولة السعودية الأولى.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/At-Turaif_District_of_Diriyah,_Saudi_Arabia.jpg?width=800',
      details: 'انطلق من حي الطريف التاريخي الذي يعتبر قلب الدرعية النابض. قم بإنشاء منصة تعرض الهندسة المعمارية النجدية العريقة، وتوفر معلومات شيقة عن الفعاليات الثقافية.',
      category: 'تراث وتاريخ'
    }
  ];

  categories = ['الكل', 'تراث وتاريخ', 'طبيعة وبيئة'];
  activeFilter = signal<string>('الكل');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'الكل') return this.projects;
    return this.projects.filter(p => p.category === filter);
  });

  selectedProject = signal<TourProject | null>(null);

  scrollToProjects() {
    const el = document.getElementById('projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleTip(tip: string) {
    if (this.activeTip() === tip) {
      this.activeTip.set(null);
    } else {
      this.activeTip.set(tip);
    }
  }

  toggleScaffold() {
    this.showScaffold.update(v => !v);
  }

  copyCode() {
    const code = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>روح السعودية</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header> <!-- شعار الموقع --> </header>
    <main> <!-- المحتوى الرئيسي --> </main>
    <script src="script.js"></script>
</body>
</html>`;
    navigator.clipboard.writeText(code);
    alert('تم نسخ الكود بنجاح!');
  }
}
