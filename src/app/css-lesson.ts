import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css-lesson',
  imports: [MatIconModule, CommonModule],
  styles: [`
    @keyframes subtle-pulse-3d {
      0%, 100% {
        transform: perspective(500px) rotateX(20deg) rotateY(-20deg) translateZ(50px) scale(1);
      }
      50% {
        transform: perspective(500px) rotateX(20deg) rotateY(-20deg) translateZ(55px) scale(1.02);
      }
    }
    .diriyah-building {
      animation: subtle-pulse-3d 4s ease-in-out infinite;
    }
  `],
  template: `
    <div class="space-y-6 animate-[fade-in_0.5s_ease-out]">
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <mat-icon class="text-blue-500 scale-125">color_lens</mat-icon>
          الدرس الثاني: تلوين معمار الدرعية بـ CSS
        </h2>
        <p class="text-slate-600 mt-3 text-lg leading-relaxed">
          لغة CSS هي المسؤولة عن المظهر. بدونها، جميع المواقع ستبدو كنصوص عادية باهتة. 
          لنجرّب تزيين هذا المربع ليمثل مبنى من الطراز المعماري السلماني.
        </p>
      </div>

      <!-- CSS Basics Section -->
      <div class="bg-blue-50 text-blue-900 p-6 md:p-8 rounded-3xl border border-blue-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-bl-full blur-2xl pointer-events-none"></div>
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-blue-600 scale-125">style</mat-icon>
          أساسيات لغة التصميم CSS
        </h3>
        <p class="text-base leading-relaxed mb-6 text-blue-800 relative z-10 font-medium whitespace-break-spaces">تعني كلمة <strong>CSS</strong> (Cascading Style Sheets) وهي اللغة المسؤولة عن تنسيق صفحات الويب وتجميلها. بينما تقوم HTML ببناء الهيكل الأساسي كالعظم، تمثل CSS الجلد والملابس وتختار الألوان للمشروع.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6">
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-blue-200 min-w-0">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">link</mat-icon>
              كيف نربط CSS بـ HTML؟
            </h4>
             <p class="text-sm text-blue-800 mb-3 leading-relaxed">لكي تُطبق التصاميم على صفحتك، يجب ربط ملف الألوان <code class="bg-blue-100 px-1 rounded text-xs">style.css</code> بملف الهيكل <code class="bg-blue-100 px-1 rounded text-xs">index.html</code>. ونضع هذا الربط داخل وسم <code class="bg-slate-200 px-1 rounded text-xs">&lt;head&gt;</code>:</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-400">&lt;</span><span class="text-blue-400">link</span> <span class="text-teal-300">rel</span><span class="text-slate-400">=</span><span class="text-amber-300">"stylesheet"</span> <span class="text-teal-300">href</span><span class="text-slate-400">=</span><span class="text-amber-300">"style.css"</span><span class="text-slate-400">&gt;</span>
             </div>
          </div>

          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-blue-200 min-w-0">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">mediation</mat-icon>
              المحددات (Selectors) الدقيقة
            </h4>
             <p class="text-sm text-blue-800 mb-3 leading-relaxed">كيف نختار العنصر الذي نريد تلوينه؟ نستخدم "المُحدد".</p>
             <ul class="text-sm text-blue-800 space-y-2">
                <li><strong class="mx-1">• محدد النوع:</strong> <code class="font-mono bg-blue-100 px-1 rounded mx-1">h1</code> لاختيار جميع عناوين h1.</li>
                <li><strong class="mx-1">• محدد الفئة (Class):</strong> <code class="font-mono bg-blue-100 px-1 rounded mx-1">.card</code> يسبقه نقطة، ويختار عناصر معينة.</li>
                <li><strong class="mx-1">• محدد المعرف (ID):</strong> <code class="font-mono bg-blue-100 px-1 rounded mx-1">#map</code> يسبقه #، ويختار عنصراً واحداً فريداً.</li>
             </ul>
          </div>
          
          <div class="col-span-1 md:col-span-2 bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-blue-200 min-w-0">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">tune</mat-icon>
              القاعدة و التركيب (Syntax)
            </h4>
             <p class="text-sm text-blue-800 mb-3 leading-relaxed">تتكون الجملة في CSS من المُحدد ثم الخصائص داخل أقواس معقوفة.</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-amber-300">.title</span> <span class="text-slate-400">{{'{'}}</span><br/>
                <span class="ml-4 text-teal-300">color:</span> <span class="text-orange-300">#D4AF37</span><span class="text-slate-400">;</span> <span class="text-slate-500 italic">/* خاصية وقيمة */</span><br/>
                <span class="text-slate-400">{{'}'}}</span>
             </div>
          </div>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-blue-200 text-sm relative z-10 w-full transition-shadow hover:shadow-md">
           <h4 class="font-bold text-blue-800 mb-4 pb-2 border-b border-blue-50">أهم الخصائص النمطية الشائعة:</h4>
           <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <div class="flex flex-col p-3 rounded-xl transition-colors hover:bg-blue-50">
                <span class="font-bold mb-1 text-indigo-700 font-mono text-xs text-left ltr w-full block" dir="ltr">color</span>
                <span class="text-xs text-blue-800 leading-relaxed">تلوين النصوص وإبرازها.</span>
             </div>
             <div class="flex flex-col p-3 rounded-xl transition-colors hover:bg-blue-50">
                <span class="font-bold mb-1 text-indigo-700 font-mono text-xs text-left ltr w-full block" dir="ltr">background-color</span>
                <span class="text-xs text-blue-800 leading-relaxed">تلوين خلفية العناصر والمربعات.</span>
             </div>
             <div class="flex flex-col p-3 rounded-xl transition-colors hover:bg-blue-50">
                <span class="font-bold mb-1 text-indigo-700 font-mono text-xs text-left ltr w-full block" dir="ltr">margin / padding</span>
                <span class="text-xs text-blue-800 leading-relaxed">إضافة مساحات و هوامش خارجية وداخلية.</span>
             </div>
             <div class="flex flex-col p-3 rounded-xl transition-colors hover:bg-blue-50">
                <span class="font-bold mb-1 text-indigo-700 font-mono text-xs text-left ltr w-full block" dir="ltr">border-radius</span>
                <span class="text-xs text-blue-800 leading-relaxed">تنعيم وإمالة الزوايا الحادة للعنصر.</span>
             </div>
           </div>
        </div>
      </div>

      <!-- Box Model Explanation -->
      <div class="bg-indigo-50 text-indigo-900 p-6 md:p-8 rounded-3xl border border-indigo-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-indigo-600 scale-125">check_box_outline_blank</mat-icon>
          نموذج الصندوق (Box Model)
        </h3>
        <p class="text-base leading-relaxed mb-6 text-indigo-800 relative z-10 font-medium">كل عنصر في HTML يُعتبر في CSS عبارة عن صندوق. يتكون هذا الصندوق من أربع طبقات تتحكم في المساحة والمحتوى:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10 text-center">
            <div class="bg-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm flex flex-col items-center justify-center">
                <span class="font-bold text-blue-900 text-lg">الهامش</span>
                <span class="font-mono text-[10px] md:text-xs text-blue-700 mt-1 uppercase tracking-wider">Margin</span>
                <p class="text-xs text-blue-800 mt-2">المسافة الخارجية التي تفصل العنصر عن بقية العناصر.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded-xl border border-slate-300 shadow-sm flex flex-col items-center justify-center">
                <span class="font-bold text-slate-800 text-lg">الحدود</span>
                <span class="font-mono text-[10px] md:text-xs text-slate-600 mt-1 uppercase tracking-wider">Border</span>
                <p class="text-xs text-slate-700 mt-2">الإطار الذي يحيط بالعنصر وحشوته.</p>
            </div>
            <div class="bg-emerald-100 p-4 rounded-xl border border-emerald-200 shadow-sm flex flex-col items-center justify-center">
                <span class="font-bold text-emerald-900 text-lg">الحشو</span>
                <span class="font-mono text-[10px] md:text-xs text-emerald-700 mt-1 uppercase tracking-wider">Padding</span>
                <p class="text-xs text-emerald-800 mt-2">المسافة الداخلية بين محتوى العنصر وبين حدوده.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center">
                <span class="font-bold text-slate-900 text-lg">المحتوى</span>
                <span class="font-mono text-[10px] md:text-xs text-slate-600 mt-1 uppercase tracking-wider">Content</span>
                <p class="text-xs text-slate-700 mt-2">النص أو الصورة أو المحتوى الفعلي داخل العنصر.</p>
            </div>
        </div>
      </div>

      <!-- Best Practices Grid -->
      <div class="mb-10 section-fade-in relative z-10 w-full">
        <h4 class="font-bold text-blue-900 text-xl mb-4 relative flex items-center gap-2">
          <mat-icon class="text-blue-500">star</mat-icon>
          ممارسات احترافية في CSS
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <!-- Responsive Design -->
          <div class="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow min-w-0">
            <h5 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">devices</mat-icon>
              التصميم المتجاوب (Responsive)
            </h5>
             <p class="text-sm text-slate-600 mb-4 leading-relaxed">استخدم الاستعلامات <code>&#64;media</code> والأبعاد المرنة مثل <code>%</code> ليتكيف الموقع مع شاشات الجوال والأجهزة اللوحية بسلاسة.</p>
             <div class="bg-slate-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
<span class="text-blue-400">&#64;media</span> <span class="text-slate-400">(</span><span class="text-teal-300">max-width</span><span class="text-slate-400">:</span> <span class="text-amber-300">768px</span><span class="text-slate-400">) {{ '{' }}</span>
  <span class="text-blue-400">.container</span> <span class="text-slate-400">{{ '{' }}</span> <span class="text-teal-300">flex-direction</span><span class="text-slate-400">:</span> <span class="text-amber-300">column</span><span class="text-slate-400">; {{ '}' }}</span>
<span class="text-slate-400">{{ '}' }}</span>
             </div>
          </div>

          <!-- Transitions -->
          <div class="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow min-w-0">
            <h5 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">animation</mat-icon>
              الحركة والتفاعل (Transitions)
            </h5>
             <p class="text-sm text-slate-600 mb-4 leading-relaxed">أضف انتقالاً سلساً <code>transition</code> مع حالة <code>:hover</code> لإعطاء تفاعل بصري متجاوب للأزرار والبطاقات.</p>
             <div class="bg-slate-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
<span class="text-blue-400">.btn</span> <span class="text-slate-400">{{ '{' }}</span> <span class="text-teal-300">transition</span><span class="text-slate-400">:</span> <span class="text-amber-300">all 0.3s ease</span><span class="text-slate-400">; {{ '}' }}</span>
<span class="text-blue-400">.btn:hover</span> <span class="text-slate-400">{{ '{' }}</span> <span class="text-teal-300">transform</span><span class="text-slate-400">:</span> <span class="text-amber-300">scale(1.05)</span><span class="text-slate-400">; {{ '}' }}</span>
             </div>
          </div>
          
          <!-- Accessibility -->
          <div class="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow min-w-0">
            <h5 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">accessibility_new</mat-icon>
              سهولة الوصول (Accessibility)
            </h5>
             <p class="text-sm text-slate-600 mb-4 leading-relaxed">حافظ على تباين ألوان واضح (Contrast)، ولا تفوّت إظهار مؤشر التركيز <code>:focus-visible</code> لدعم ذوي الهمم ومن يتصفح بلوحة المفاتيح.</p>
             <div class="bg-slate-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
<span class="text-blue-400">button:focus-visible</span> <span class="text-slate-400">{{ '{' }}</span>
  <span class="text-teal-300">outline</span><span class="text-slate-400">:</span> <span class="text-amber-300">3px solid #3b82f6</span><span class="text-slate-400">;</span>
<span class="text-slate-400">{{ '}' }}</span>
             </div>
          </div>

          <!-- Selector Efficiency -->
          <div class="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow min-w-0">
            <h5 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-indigo-500 scale-75">speed</mat-icon>
              كفاءة المحددات (Efficiency)
            </h5>
             <p class="text-sm text-slate-600 mb-4 leading-relaxed">تجنب التداخل العميق للمحددات (Deep Nesting) واستخدم فئات مباشرة لتقليل تعقيد الكود وتحسين سرعة أداء المتصفح (Performance).</p>
             <div class="bg-slate-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
<span class="text-slate-500 italic block mb-1">/* ممتاز: أداء سريع، مباشر، وسهل الصيانة */</span>
<span class="text-blue-400">.nav-item-active</span> <span class="text-slate-400">{{ '{' }} ... {{ '}' }}</span>
             </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Controls -->
        <div class="bg-white border text-right border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <h3 class="font-bold text-lg text-slate-800 border-b border-slate-100 pb-3">خصائص CSS المُتاحة للتعديل</h3>
          
          <button aria-label="تغيير لون الخلفية" id="toggleBtn-bg" (keydown)="handleKeydown($event, 0)" (click)="toggle('bg')" [ngClass]="{'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.1)]': styles().bg, 'border-slate-200 hover:bg-slate-50 text-slate-700': !styles().bg}" class="w-full flex items-center justify-between border rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent">
            <div class="flex items-center gap-3">
              <mat-icon [class.text-blue-600]="styles().bg" [class.text-slate-400]="!styles().bg" class="transition-colors">format_color_fill</mat-icon>
              <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                <span class="font-bold code-font ltr break-words whitespace-normal" [class.text-blue-700]="styles().bg" dir="ltr">background-color: #D4AF37;</span>
                <span class="text-xs font-medium whitespace-normal" [class.text-slate-500]="!styles().bg" [class.text-blue-600]="styles().bg">إضافة لون التراث (ذهبي رملي)</span>
              </div>
            </div>
            <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors" [ngClass]="{'bg-blue-600 border-blue-600': styles().bg, 'bg-white border-slate-300 group-hover:border-blue-400': !styles().bg}">
              @if (styles().bg) { <mat-icon class="text-white scale-75 w-5 h-5 flex items-center justify-center">check</mat-icon> }
            </div>
          </button>

          <button aria-label="حواف دائرية" id="toggleBtn-rounded" (keydown)="handleKeydown($event, 1)" (click)="toggle('rounded')" [ngClass]="{'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.1)]': styles().rounded, 'border-slate-200 hover:bg-slate-50 text-slate-700': !styles().rounded}" class="w-full flex items-center justify-between border rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent">
            <div class="flex items-center gap-3">
              <mat-icon [class.text-blue-600]="styles().rounded" [class.text-slate-400]="!styles().rounded" class="transition-colors">rounded_corner</mat-icon>
              <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                <span class="font-bold code-font ltr break-words whitespace-normal" [class.text-blue-700]="styles().rounded" dir="ltr">border-radius: 16px;</span>
                <span class="text-xs font-medium whitespace-normal" [class.text-slate-500]="!styles().rounded" [class.text-blue-600]="styles().rounded">تنعيم وإمالة الزوايا</span>
              </div>
            </div>
            <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors" [ngClass]="{'bg-blue-600 border-blue-600': styles().rounded, 'bg-white border-slate-300 group-hover:border-blue-400': !styles().rounded}">
              @if (styles().rounded) { <mat-icon class="text-white scale-75 w-5 h-5 flex items-center justify-center">check</mat-icon> }
            </div>
          </button>

          <button aria-label="إضافة ظل" id="toggleBtn-shadow" (keydown)="handleKeydown($event, 2)" (click)="toggle('shadow')" [ngClass]="{'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.1)]': styles().shadow, 'border-slate-200 hover:bg-slate-50 text-slate-700': !styles().shadow}" class="w-full flex items-center justify-between border rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent">
            <div class="flex items-center gap-3">
              <mat-icon [class.text-blue-600]="styles().shadow" [class.text-slate-400]="!styles().shadow" class="transition-colors">wb_sunny</mat-icon>
              <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                <span class="font-bold code-font ltr break-words whitespace-normal" [class.text-blue-700]="styles().shadow" dir="ltr">box-shadow: ...;</span>
                <span class="text-xs font-medium whitespace-normal" [class.text-slate-500]="!styles().shadow" [class.text-blue-600]="styles().shadow">إضافة ظل يبرز الهيكل</span>
              </div>
            </div>
            <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors" [ngClass]="{'bg-blue-600 border-blue-600': styles().shadow, 'bg-white border-slate-300 group-hover:border-blue-400': !styles().shadow}">
              @if (styles().shadow) { <mat-icon class="text-white scale-75 w-5 h-5 flex items-center justify-center">check</mat-icon> }
            </div>
          </button>
          
          <button aria-label="تغيير الخط" id="toggleBtn-font" (keydown)="handleKeydown($event, 3)" (click)="toggle('font')" [ngClass]="{'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.1)]': styles().font, 'border-slate-200 hover:bg-slate-50 text-slate-700': !styles().font}" class="w-full flex items-center justify-between border rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent">
            <div class="flex items-center gap-3">
              <mat-icon [class.text-blue-600]="styles().font" [class.text-slate-400]="!styles().font" class="transition-colors">text_format</mat-icon>
              <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                <span class="font-bold code-font ltr break-words whitespace-normal" [class.text-blue-700]="styles().font" dir="ltr">color: white;</span>
                <span class="text-xs font-medium whitespace-normal" [class.text-slate-500]="!styles().font" [class.text-blue-600]="styles().font">تنسيق النص ليكون بارزاً ومقروءاً</span>
              </div>
            </div>
             <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors" [ngClass]="{'bg-blue-600 border-blue-600': styles().font, 'bg-white border-slate-300 group-hover:border-blue-400': !styles().font}">
              @if (styles().font) { <mat-icon class="text-white scale-75 w-5 h-5 flex items-center justify-center">check</mat-icon> }
            </div>
          </button>
          
          <button aria-label="تفعيل الأبعاد الثلاثية" id="toggleBtn-perspective" (keydown)="handleKeydown($event, 4)" (click)="toggle('perspective')" [ngClass]="{'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_0_10px_rgba(59,130,246,0.1)]': styles().perspective, 'border-slate-200 hover:bg-slate-50 text-slate-700': !styles().perspective}" class="w-full flex items-center justify-between border rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent">
            <div class="flex items-center gap-3">
              <mat-icon [class.text-blue-600]="styles().perspective" [class.text-slate-400]="!styles().perspective" class="transition-colors">3d_rotation</mat-icon>
              <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                <span class="font-bold code-font ltr break-words whitespace-normal" [class.text-blue-700]="styles().perspective" dir="ltr">transform: perspective(...)</span>
                <span class="text-xs font-medium whitespace-normal" [class.text-slate-500]="!styles().perspective" [class.text-blue-600]="styles().perspective">إضافة بُعد ثلاثي يوحي بالعمق</span>
              </div>
            </div>
             <div class="w-6 h-6 rounded-md border flex items-center justify-center transition-colors" [ngClass]="{'bg-blue-600 border-blue-600': styles().perspective, 'bg-white border-slate-300 group-hover:border-blue-400': !styles().perspective}">
              @if (styles().perspective) { <mat-icon class="text-white scale-75 w-5 h-5 flex items-center justify-center">check</mat-icon> }
            </div>
          </button>
        </div>

        <!-- Preview & Code -->
        <div class="flex flex-col gap-4">
          <!-- Canvas -->
          <div class="bg-slate-100 border border-slate-200 rounded-2xl shadow-sm h-64 flex flex-col items-center justify-center p-8 overflow-hidden relative" [ngClass]="{'perspective-1000': styles().perspective}">
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, black 1px, transparent 0); background-size: 16px 16px;"></div>
            
            <!-- The Box -->
            <div class="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center justify-center z-10 w-48 h-48 border-2 border-dashed border-slate-300 relative"
              [ngClass]="{
                'bg-[#D4AF37] border-transparent': styles().bg,
                'rounded-3xl': styles().rounded,
                'shadow-2xl shadow-[#D4AF37]/50 -translate-y-2': styles().shadow,
                'text-white font-black text-2xl': styles().font,
                'text-slate-500 font-medium text-sm': !styles().font,
                'diriyah-building': styles().perspective
              }"
              >
              
              <!-- Subtle inner highlights if styled -->
              @if (styles().bg && styles().rounded) {
                <div class="absolute inset-0 rounded-3xl border border-white/20"></div>
              }

              <mat-icon [class.scale-150]="styles().font" class="mb-2 transition-transform duration-500">account_balance</mat-icon>
              <span>مبنى تراثي</span>
            </div>
          </div>

          <!-- Code Source -->
          <div class="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-sm flex flex-col h-48 relative">
            <div class="bg-slate-800 py-2 px-4 border-b border-slate-700 text-xs font-bold w-full text-slate-300 flex justify-end items-center gap-2" dir="ltr">
              <span class="font-mono tracking-wider">style.css</span>
              <mat-icon class="text-[16px] w-[16px] h-[16px] text-blue-400">css</mat-icon>
            </div>
            <div class="p-4 flex-1 overflow-auto bg-[#1e1e1e] font-mono text-xs md:text-sm leading-relaxed ltr text-left whitespace-pre-wrap break-words" dir="ltr">
               <span class="text-amber-300">.diriyah-building</span> <span class="text-slate-400">{{'{'}}</span><br/>
               
               @if (styles().bg) { <span class="ml-4 inline-block transition-all animate-in fade-in slide-in-from-right-4"><span class="text-teal-300">background-color:</span> <span class="text-orange-300">#D4AF37</span>;</span><br/> }
               @if (styles().rounded) { <span class="ml-4 inline-block transition-all animate-in fade-in slide-in-from-right-4 mt-1"><span class="text-teal-300">border-radius:</span> <span class="text-purple-300">16px</span>;</span><br/> }
               @if (styles().shadow) { <span class="ml-4 inline-block transition-all animate-in fade-in slide-in-from-right-4 mt-1"><span class="text-teal-300">box-shadow:</span> <span class="text-purple-300">0px 10px 30px</span> <span class="text-orange-300">rgba(212, 175, 55, 0.4)</span>;</span><br/> }
               @if (styles().font) { 
                 <span class="ml-4 inline-block transition-all animate-in fade-in slide-in-from-right-4 mt-1">
                   <span class="text-teal-300">color:</span> <span class="text-orange-300">white</span>;<br/>
                   <span class="ml-4 text-teal-300">font-size:</span> <span class="text-purple-300">24px</span>;<br/>
                   <span class="ml-4 text-teal-300">font-weight:</span> <span class="text-orange-300">bold</span>;
                 </span><br/>
               }
               @if (styles().perspective) { <span class="ml-4 inline-block transition-all animate-in fade-in slide-in-from-right-4 mt-1"><span class="text-teal-300">transform:</span> <span class="text-purple-300">perspective(500px) rotateX(20deg) rotateY(-20deg) translateZ(50px)</span>;</span><br/> }
               
               @if (!styles().bg && !styles().rounded && !styles().shadow && !styles().font && !styles().perspective) {
                 <span class="ml-4 text-slate-500 italic block mt-1">/* اختر الخصائص النمطية لإضافتها هنا */</span>
               }

               <span class="text-slate-400 mt-1 block">{{'}'}}</span>
            </div>
          </div>
        </div>
        <!-- Interactive Challenge -->
        <div class="mt-12 bg-blue-50/50 border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 class="font-bold text-2xl mb-4 text-blue-900 flex items-center gap-3">
            <mat-icon class="text-blue-500 scale-125">military_tech</mat-icon>
            تحدي الفهم: أساسيات CSS
          </h3>
          <p class="text-blue-800 mb-6 font-medium">{{ challengeCss.question }}</p>
          
          <div class="space-y-3 mb-6">
            @for (option of challengeCss.options; track $index) {
              <button 
                (click)="selectedChallengeAnswer.set($index); challengeError.set('')"
                [disabled]="challengeCompleted()"
                class="w-full text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus:outline-none"
                [ngClass]="{
                  'border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-200': selectedChallengeAnswer() === $index && !challengeCompleted(),
                  'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 text-slate-700': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                  'border-emerald-500 bg-emerald-50 text-emerald-900': challengeCompleted() && $index === challengeCss.correctAnswer,
                  'border-slate-200 bg-slate-50 text-slate-400 opacity-50': challengeCompleted() && $index !== challengeCss.correctAnswer,
                  'cursor-default': challengeCompleted()
                }">
                <span class="font-mono text-left ltr" dir="ltr">{{ option }}</span>
                <div class="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                  [ngClass]="{
                    'border-blue-500': selectedChallengeAnswer() === $index && !challengeCompleted(),
                    'border-slate-300': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                    'border-emerald-500 bg-emerald-500': challengeCompleted() && $index === challengeCss.correctAnswer
                  }">
                  @if (challengeCompleted() && $index === challengeCss.correctAnswer) {
                    <mat-icon class="text-white scale-75">check</mat-icon>
                  } @else if (selectedChallengeAnswer() === $index && !challengeCompleted()) {
                    <div class="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  }
                </div>
              </button>
            }
          </div>
          
          @if (!challengeCompleted()) {
            <div class="flex items-center gap-4">
              <button 
                (click)="checkCssChallenge()"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                تحقق من الإجابة
              </button>
              @if (challengeError()) {
                <span class="text-red-500 font-medium text-sm slide-in-right">{{ challengeError() }}</span>
              }
            </div>
          }
          
          @if (challengeCompleted()) {
            <div class="slide-in-bottom bg-white rounded-2xl p-6 border border-emerald-200 mt-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
              <h4 class="font-bold text-emerald-800 text-lg mb-2 flex items-center gap-2">
                <mat-icon class="text-emerald-500">check_circle</mat-icon>
                {{ challengeSuccess() }}
              </h4>
              <p class="text-slate-700 leading-relaxed mb-4 text-sm">{{ challengeCss.explanation }}</p>
              
              <div class="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start gap-3">
                <mat-icon class="text-amber-500 shrink-0">lightbulb</mat-icon>
                <div>
                  <h5 class="font-bold text-amber-900 text-sm mb-1">تنبيه لخطأ شائع</h5>
                  <p class="text-slate-700 text-sm leading-relaxed">{{ challengeCss.commonMistakes }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class CssLessonComponent {
  styles = signal({
    bg: false,
    rounded: false,
    shadow: false,
    font: false,
    perspective: false
  });

  // Challenge State
  challengeCompleted = signal(false);
  challengeError = signal('');
  challengeSuccess = signal('');
  selectedChallengeAnswer = signal<number | null>(null);

  challengeCss = {
    question: 'أي من التنسيقات التالية يعتبر الخيار النمطي الصحيح لإضافة ظل خفيف باللون الذهبي لصندوق مبنى الدرعية؟',
    options: [
      'shadow-color: d4af37;',
      'box-shadow: 0px 10px 30px #d4af37;',
      'border-shadow: gold;',
      'background-shadow: #d4af37;'
    ],
    correctAnswer: 1,
    explanation: 'الخاصية المعتمدة في CSS لإضافة ظل حول العناصر المربعة أو المستطيلة هي box-shadow. وتأخذ عدة قيم كالتالي: (أفقي، عمودي، التمويه/Blur، ثم اللون).',
    commonMistakes: 'الخطأ الشائع هنا هو افتراض قياسات وأسماء غير موجودة بالاصل مثل (shadow-color أو background-shadow). نستخدم box-shadow للصناديق، بينما نستخدم text-shadow في حالة أردنا إضافة الظل للنصوص.'
  };

  checkCssChallenge() {
    if (this.selectedChallengeAnswer() === null) {
      this.challengeError.set('الرجاء اختيار إجابة أولاً.');
      return;
    }
    
    if (this.selectedChallengeAnswer() === this.challengeCss.correctAnswer) {
      this.challengeSuccess.set('إجابة صحيحة! أحسنت.');
      this.challengeError.set('');
      this.challengeCompleted.set(true);
    } else {
      this.challengeError.set('إجابة خاطئة. حاول مرة أخرى!');
      this.challengeSuccess.set('');
    }
  }

  toggle(key: 'bg' | 'rounded' | 'shadow' | 'font' | 'perspective') {
    this.styles.update(s => ({ ...s, [key]: !s[key] }));
  }

  handleKeydown(event: KeyboardEvent, index: number) {
    const keys = ['bg', 'rounded', 'shadow', 'font', 'perspective'];
    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const next = (index + 1) % keys.length;
      document.getElementById('toggleBtn-' + keys[next])?.focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      event.preventDefault();
      const prev = (index - 1 + keys.length) % keys.length;
      document.getElementById('toggleBtn-' + keys[prev])?.focus();
    }
  }
}
