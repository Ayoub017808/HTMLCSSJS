import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SaudiMapComponent } from './saudi-map';

@Component({
  selector: 'app-intro-lesson',
  imports: [MatIconModule, CommonModule, SaudiMapComponent],
  template: `
    <div class="space-y-8 animate-[fade-in_1s_ease-out]">
      <div class="bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        
        <!-- Decorative pattern -->
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>
        
        <div class="relative z-10 flex flex-col items-start">
          <span class="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium backdrop-blur-md mb-6 shadow-sm border border-white/10">
            مبادرة قدرات المستقبل
          </span>
          <h2 class="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight text-right w-full">
            مرحباً بك في رحلة <br class="hidden md:block"/> <span class="text-emerald-200">صناعة التقنية</span>
          </h2>
          <p class="text-lg md:text-xl text-emerald-50 max-w-2xl leading-relaxed text-right">
            في ظل طموحات رؤية المملكة 2030، ننتقل بخطوات واثقة من مرحلة الاستهلاك التقني إلى الابتكار والصناعة. مدن المستقبل الذكية مثل "نيوم" و"القدية" لا تُبنى فقط من الموارد المادية، بل تزدهر بالبيانات والأكواد.
          </p>
        </div>
      </div>

      <!-- Interactive Saudi Map Section -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-[80px]"></div>
        <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
               <div class="bg-emerald-100 text-emerald-600 p-2 rounded-xl">
                 <mat-icon>public</mat-icon>
               </div>
               <h3 class="text-2xl font-bold text-slate-800">جولة في مشاريع رؤية 2030</h3>
            </div>
            <p class="text-slate-600 mb-6 max-w-3xl leading-relaxed text-lg">
                تم بناء هذه الخريطة التفاعلية باستخدام التقنيات التي سنتعلمها (HTML, CSS, JavaScript). 
                انقر على العلامات لتستكشف أبرز مشاريع المملكة.
            </p>
            <app-saudi-map></app-saudi-map>
        </div>
      </div>

      <!-- FAQ / Concepts Section -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
         <h3 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <mat-icon class="text-amber-500">menu_book</mat-icon>
            مفاهيم برمجية أساسية
         </h3>
         
         <div class="space-y-4">
            
            <div class="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300" [class.bg-slate-50]="openTab() === 'what'">
               <button (click)="toggleTab('what')" [attr.aria-expanded]="openTab() === 'what'" class="w-full text-right px-6 py-4 flex items-center justify-between font-bold text-lg text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors">
                   كيف تعمل مواقع الويب والتطبيقات؟
                   <mat-icon class="text-slate-400 transition-transform" [class.rotate-180]="openTab() === 'what'">expand_more</mat-icon>
               </button>
               <div class="px-6 overflow-hidden transition-all duration-500 ease-in-out" 
                    [ngClass]="openTab() === 'what' ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'">
                   <p class="text-slate-600 leading-relaxed pt-2">
                       يقوم متصفحك أو تطبيقك بقراءة الملفات البرمجية التي يرسلها الخادم (Server) ويترجمها إلى الواجهة التي تراها الآن. هذه الملفات مدونة بثلاث لغات أساسية (HTML, CSS, JS) تعمل معاً بانسجام لتكوين التجربة بأكملها.
                   </p>
               </div>
            </div>

            <div class="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300" [class.bg-slate-50]="openTab() === 'tools'">
               <button (click)="toggleTab('tools')" [attr.aria-expanded]="openTab() === 'tools'" class="w-full text-right px-6 py-4 flex items-center justify-between font-bold text-lg text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors">
                   الفرق بين اللغات الثلاث في بناء الويب
                   <mat-icon class="text-slate-400 transition-transform" [class.rotate-180]="openTab() === 'tools'">expand_more</mat-icon>
               </button>
               <div class="px-6 overflow-hidden transition-all duration-500 ease-in-out" 
                    [ngClass]="openTab() === 'tools' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'">
                   <ul class="space-y-4 text-slate-600 mt-4">
                       <li class="flex items-start gap-3">
                           <mat-icon class="text-orange-500 mt-0.5">architecture</mat-icon>
                           <span><strong>HTML: </strong> لغة بناء الهيكل العظمي للمشروع، كما يتم وضع المخططات الأساسية لمدينة "نيوم". بدونها لا توجد محتويات أو نصوص.</span>
                       </li>
                       <li class="flex items-start gap-3">
                           <mat-icon class="text-blue-500 mt-0.5">format_paint</mat-icon>
                           <span><strong>CSS: </strong> لغة التصميم والألوان، تجعل الموقع يبدو جذاباً وتضيف الديكور، تشبه معمار الدرعية التراثي.</span>
                       </li>
                       <li class="flex items-start gap-3">
                           <mat-icon class="text-purple-500 mt-0.5">settings_ethernet</mat-icon>
                           <span><strong>JavaScript: </strong> لغة التفاعل والمنطق، تجعل الموقع حياً وتجيب لطلبات الزر، كأنظمة التحكم الذكية في قطار الرياض.</span>
                       </li>
                   </ul>
               </div>
            </div>

            <div class="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300" [class.bg-slate-50]="openTab() === 'uiux'">
               <button (click)="toggleTab('uiux')" [attr.aria-expanded]="openTab() === 'uiux'" class="w-full text-right px-6 py-4 flex items-center justify-between font-bold text-lg text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors">
                   مبادئ تصميم واجهة وتجربة المستخدم (UI/UX)
                   <mat-icon class="text-slate-400 transition-transform" [class.rotate-180]="openTab() === 'uiux'">expand_more</mat-icon>
               </button>
               <div class="px-6 overflow-hidden transition-all duration-500 ease-in-out" 
                    [ngClass]="openTab() === 'uiux' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'">
                   <p class="text-slate-600 leading-relaxed pt-2 mb-4">
                       في عصر الخدمات الرقمية المتقدمة (مثل أبشر وتوكلنا)، لا يكفي أن يعمل الكود فقط، بل يجب أن يكون مريحاً للمستخدم. هذا هو دور UI و UX:
                   </p>
                   <ul class="space-y-4 text-slate-600">
                       <li class="flex items-start gap-3">
                           <mat-icon class="text-pink-500 mt-0.5">design_services</mat-icon>
                           <span><strong>واجهة المستخدم (UI):</strong> تعنى بالجانب البصري؛ الألوان المستوحاة من هويتنا، الخطوط الواضحة (مثل الخطوط العربية الأنيقة)، والأزرار الجذابة.</span>
                       </li>
                       <li class="flex items-start gap-3">
                           <mat-icon class="text-teal-500 mt-0.5">psychology</mat-icon>
                           <span><strong>تجربة المستخدم (UX):</strong> تتعلق بسهولة الاستخدام المنطقي. هل يمكن للمواطن إنجاز خدمته في 3 شاشات فقط؟ هل التصفح سلس وبدون عقبات؟</span>
                       </li>
                    </ul>
                    <p class="text-slate-500 text-sm mt-4 bg-slate-100 p-3 rounded-lg border border-slate-200">
                        <strong>رؤية 2030:</strong> تصميم تجارب رقمية تضع راحة المواطن وابتكار الحلول في صميم التطوير التقني، لترسيخ مكانة المملكة رائداً في الحكومة الإلكترونية.
                    </p>
               </div>
            </div>

            <div class="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300" [class.bg-slate-50]="openTab() === 'devtools'">
               <button (click)="toggleTab('devtools')" [attr.aria-expanded]="openTab() === 'devtools'" class="w-full text-right px-6 py-4 flex items-center justify-between font-bold text-lg text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors">
                   أدوات مطوري الويب (Browser DevTools)
                   <mat-icon class="text-slate-400 transition-transform" [class.rotate-180]="openTab() === 'devtools'">expand_more</mat-icon>
               </button>
               <div class="px-6 overflow-hidden transition-all duration-500 ease-in-out" 
                    [ngClass]="openTab() === 'devtools' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'">
                   <p class="text-slate-600 leading-relaxed pt-2 mb-4">
                       أداة فحص العناصر المضمنة في متصفحك (مثل Chrome DevTools) تعتبر صديقك المفضل. يمكنك فتحها بالضغط على <kbd class="bg-slate-200 px-1 rounded text-sm">F12</kbd> أو النقر يميناً ثم "فحص" (Inspect).
                   </p>
                   <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                          <h5 class="font-bold text-slate-800 mb-2 flex items-center gap-2"><mat-icon class="text-blue-500 scale-75">find_in_page</mat-icon> ماذا تقدم لك أداة DevTools؟</h5>
                         <ul class="text-sm text-slate-600 space-y-2 list-disc list-inside">
                           <li><strong>فحص العناصر (Elements):</strong> استعراض وتعديل نصوص HTML والألوان مباشرة لتجربة التصميم (مثال: تغيير لون الزر قبل حفظ الكود).</li>
                           <li><strong>سجل الأوامر (Console):</strong> لاكتشاف أخطاء JavaScript ومتابعة الرسائل البرمجية للتأكد من خلو واجهتك من الأخطاء.</li>
                           <li><strong>الشبكة (Network):</strong> مراقبة طلبات البيانات والتأكد من سرعة تحميل الموقع، وهو أمر مهم لتجربة الملايين من المستخدمين.</li>
                           <li><strong>محاكاة الأجهزة (Device Mode):</strong> التأكد من توافقية التطبيقات مع شاشات الجوال المختلفة (Responsive).</li>
                         </ul>
                      </div>
                      <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                         <h5 class="font-bold text-slate-800 mb-2 flex items-center gap-2"><mat-icon class="text-emerald-500 scale-75">verified</mat-icon> الجودة والكفاءة (رؤية 2030)</h5>
                         <p class="text-sm text-slate-600">
                           استخدام هذه الأدوات يضمن لك تقديم منتجات رقمية خالية من الأخطاء، عالية الأداء وسريعة، وهو معيار أساسي في التطبيقات السعودية الحديثة لبناء بنية تحتية رقمية قوية واقتصاد مزدهر.
                         </p>
                      </div>
                   </div>
               </div>
            </div>

         </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- HTML Card -->
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
            <mat-icon>architecture</mat-icon>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">HTML (الهيكل)</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            تخيلها كالأساسات الحديدية والخراسانية للأبراج في المركز المالي بالرياض. هي الهيكل المتين الذي يحمل كل محتوى وتفاصيل الصفحة.
          </p>
        </div>

        <!-- CSS Card -->
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <mat-icon>format_paint</mat-icon>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">CSS (التصميم والجمال)</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            هي لمسات الجمال وفن العمارة، تماماً مثل الطراز السلماني الأنيق في الدرعية وتناسق الألوان الفريد في واجهات المباني.
          </p>
        </div>

        <!-- JS Card -->
        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            <mat-icon>settings_ethernet</mat-icon>
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-2">JavaScript (التفاعل)</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            الأنظمة الذكية والتفاعل الحي، تشبه نظام قطار الرياض الذكي أو منصات حجز الفعاليات في تطبيق توكلنا التي تتجاوب معك فوراً.
          </p>
        </div>
      </div>
      
      <div class="bg-emerald-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between text-emerald-800 border border-emerald-100">
        <div class="flex items-center gap-4 mb-4 md:mb-0">
          <mat-icon class="text-emerald-600">lightbulb</mat-icon>
          <span class="font-medium text-lg">جاهز للبدء في كتابة الكود الأول؟</span>
        </div>
        <p class="text-sm font-medium">اختر من القائمة الجانبية قسماً لتبدأ الاستكشاف والبناء.</p>
      </div>
    </div>
  `
})
export class IntroLessonComponent {
  openTab = signal<string | null>('what'); // default open tab

  toggleTab(tab: string) {
    this.openTab.update(current => current === tab ? null : tab);
  }
}
