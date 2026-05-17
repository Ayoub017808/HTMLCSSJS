import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-js-lesson',
  imports: [MatIconModule, CommonModule],
  template: `
    <div class="space-y-6 animate-[fade-in_0.5s_ease-out]">
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <mat-icon class="text-purple-600 scale-125">smart_toy</mat-icon>
          الدرس الثالث: برمجة تفاعل تطبيق "موسم الرياض"
        </h2>
        <p class="text-slate-600 mt-3 text-lg leading-relaxed">
          لغة JavaScript هي بمثابة العقل المفكر للتطبيق. هي التي تتلقى نقرات المستخدم وتقوم بالعمليات المنطقية، لتجعل الواجهات حية وذكية.
          الأسفل تطبيق مصغر يحاكي حجز تذكرة.
        </p>
      </div>

      <!-- JS Basics Section -->
      <div class="bg-purple-50 text-purple-900 p-6 md:p-8 rounded-3xl border border-purple-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-bl-full blur-2xl pointer-events-none"></div>
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-purple-600 scale-125">code</mat-icon>
          أساسيات لغة البرمجة JavaScript
        </h3>
        <p class="text-base leading-relaxed mb-6 text-purple-800 relative z-10 font-medium whitespace-break-spaces">إذا كانت HTML هي الهيكل و CSS هي التصميم، فإن <strong>JavaScript</strong> هي الدماغ والعضلات!
هي ما يجعل الزر يستجيب للنقر، والصور تتحرك، والبيانات تُحدث دون الحاجة لإعادة تحميل الصفحة.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10 mb-6">
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">link</mat-icon>
              كيف نربط JavaScript بـ HTML؟
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">لكي تتفاعل الصفحة، يجب ربط ملف الأكواد <code class="bg-purple-100 px-1 rounded text-xs">script.js</code> في نهاية ملف الـ HTML وتحديداً قبل إغلاق وسم <code class="bg-slate-200 px-1 rounded text-xs">&lt;/body&gt;</code> لضمان تحميل العناصر أولاً:</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-400">&lt;</span><span class="text-blue-400">script</span> <span class="text-teal-300">src</span><span class="text-slate-400">=</span><span class="text-amber-300">"script.js"</span><span class="text-slate-400">&gt;&lt;/</span><span class="text-blue-400">script</span><span class="text-slate-400">&gt;</span>
             </div>
          </div>

          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">touch_app</mat-icon>
              التفاعل مع عناصر HTML (DOM)
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">نستطيع قراءة وتغيير محتوى HTML من خلال JavaScript بواسطة <code>document</code>:</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-500 italic block mb-1">// لتغيير نص عنصر له ID معين</span>
                <span class="text-white">document</span><span class="text-slate-400">.</span><span class="text-amber-300">getElementById</span><span class="text-slate-400">(</span><span class="text-amber-300">"map"</span><span class="text-slate-400">).</span><span class="text-purple-300">innerHTML</span> <span class="text-slate-400">=</span> <span class="text-amber-300">"خريطة جديدة"</span><span class="text-slate-400">;</span>
             </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-6">
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">data_object</mat-icon>
              المتغيرات (Variables)
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">صناديق لحفظ البيانات. نستخدم <code class="bg-purple-100 px-1 rounded">let</code> للقيم التي تتغير، و <code class="bg-purple-100 px-1 rounded">const</code> للقيم الثابتة.</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-blue-400 font-bold">let</span> <span class="text-white">tickets</span> <span class="text-slate-400">=</span> <span class="text-purple-400">0</span><span class="text-slate-400">;</span><br>
                <span class="text-blue-400 font-bold">const</span> <span class="text-white">eventName</span> <span class="text-slate-400">=</span> <span class="text-amber-300">"موسم الرياض"</span><span class="text-slate-400">;</span>
             </div>
          </div>
          
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">functions</mat-icon>
              الدوال (Functions)
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">مجموعة من الأوامر المجمعة في مكان واحد لتنفيذ مهمة معينة عند استدعائها.</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-blue-400 font-bold">function</span> <span class="text-amber-300">book()</span> <span class="text-slate-400">{{'{'}}</span><br>
                &nbsp;&nbsp;<span class="text-white">tickets</span> <span class="text-slate-400">=</span> <span class="text-white">tickets</span> <span class="text-slate-400">+</span> <span class="text-purple-400">1</span><span class="text-slate-400">;</span><br>
                <span class="text-slate-400">{{'}'}}</span>
             </div>
          </div>

          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">touch_app</mat-icon>
              الأحداث (Events)
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">كيف نستدعي الدالة؟ نربطها بـ "حدث" يقوم به المستخدم مثل النقر <code>click</code>.</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-400">&lt;</span><span class="text-blue-400">button</span> <span class="text-teal-300">onclick</span><span class="text-slate-400">=</span><span class="text-amber-300">"book()"</span><span class="text-slate-400">&gt;</span><br>
                &nbsp;&nbsp;<span class="text-white">احجز الآن</span><br>
                <span class="text-slate-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-slate-400">&gt;</span>
             </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6 w-full">
           <!-- Arithmetic & Logic -->
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200 min-w-0">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">calculate</mat-icon>
              العمليات الحسابية والمنطقية
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">تُستخدم لإجراء حسابات، مثلاً لمشروع استثماري في رؤية 2030، أو لإجراء مقارنات منطقية:</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-500 italic block mb-1">/* حساب العائد الاستثماري */</span>
                <span class="text-blue-400 font-bold">let</span> <span class="text-white">profit</span> <span class="text-slate-400">=</span> <span class="text-white">revenue</span> <span class="text-slate-400">-</span> <span class="text-white">cost</span><span class="text-slate-400">;</span><br>
                <span class="text-slate-500 italic block mt-2 mb-1">/* عمليات منطقية */</span>
                <span class="text-blue-400 font-bold">let</span> <span class="text-white">isProfitable</span> <span class="text-slate-400">=</span> <span class="text-white">profit</span> <span class="text-slate-400">&gt;</span> <span class="text-purple-400">0</span> <span class="text-slate-400">&&</span> <span class="text-white">cost</span> <span class="text-slate-400">&lt;</span> <span class="text-white">budget</span><span class="text-slate-400">;</span>
             </div>
          </div>

          <!-- Control Statements -->
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-purple-200 min-w-0">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-pink-500 scale-75">alt_route</mat-icon>
              جمل التحكم (الشروط والحلقات)
            </h4>
             <p class="text-sm text-purple-800 mb-3 leading-relaxed">تُستخدم لاتخاذ قرارات أو تكرار خطوات. مثال: التأكد من توفر مقاعد لفعالية وطنية.</p>
             <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[10px] sm:text-[11px] ltr text-left leading-loose shadow-inner overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-blue-400 font-bold">if</span> <span class="text-slate-400">(</span><span class="text-white">seats</span> <span class="text-slate-400">&gt;</span> <span class="text-purple-400">0</span><span class="text-slate-400">) {{'{'}}</span><br>
                &nbsp;&nbsp;<span class="text-amber-300">bookTicket</span><span class="text-slate-400">();</span><br>
                <span class="text-slate-400">{{'}'}}</span> <span class="text-blue-400 font-bold">else</span> <span class="text-slate-400">{{'{'}}</span><br>
                &nbsp;&nbsp;<span class="text-white">console</span><span class="text-slate-400">.</span><span class="text-blue-300">log</span><span class="text-slate-400">(</span><span class="text-amber-300">"نفذت المقاعد!"</span><span class="text-slate-400">);</span><br>
                <span class="text-slate-400">{{'}'}}</span>
             </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Application Demo -->
        <div class="bg-white border text-center border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col relative group">
          <!-- The Header -->
          <div class="bg-gradient-to-r from-purple-800 via-indigo-800 to-indigo-900 p-6 text-white text-right flex justify-between items-center relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div class="flex items-center gap-4 relative z-10">
              <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <mat-icon class="text-2xl text-purple-200">event_seat</mat-icon>
              </div>
              <div class="text-right">
                <h3 class="font-bold text-xl mb-1">موسم الرياض</h3>
                <p class="text-purple-200 text-xs font-medium tracking-wide">المنصة الرسمية للتذاكر</p>
              </div>
            </div>
            
            <div class="bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-xl flex flex-col items-center gap-0 border border-white/10 relative z-10 transition-transform duration-300" [class.scale-110]="showSuccess()" [class.shadow-[0_0_20px_#22c55e]]="showSuccess()">
              <span class="text-[10px] uppercase tracking-widest text-purple-200 mb-0.5">عدد التذاكر</span>
              <span class="font-black text-2xl leading-none font-mono tracking-tighter transition-all duration-300" [class.text-emerald-400]="showSuccess()">{{tickets()}}</span>
            </div>
          </div>
          
          <!-- The Content -->
          <div class="p-8 flex flex-col items-center justify-center flex-1 space-y-8 bg-slate-50 relative overflow-hidden">
            
            <!-- Confetti abstract elements if success -->
            @if (showSuccess()) {
              <div class="absolute inset-0 pointer-events-none opacity-50">
                 <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
                 <div class="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping" style="animation-delay: 100ms;"></div>
                 <div class="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-ping" style="animation-delay: 200ms;"></div>
              </div>
            }

            <div class="w-32 h-32 rounded-full flex items-center justify-center relative transition-all duration-500 ease-out z-10"
              [ngClass]="{'bg-purple-100 text-purple-600 shadow-inner': !showSuccess(), 'bg-emerald-100 text-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.2)] scale-110': showSuccess()}">
               <mat-icon class="text-[64px] w-[64px] h-[64px] transition-transform duration-500" [ngClass]="{'scale-110': showSuccess()}">
                  {{ showSuccess() ? 'check_circle' : 'confirmation_number' }}
               </mat-icon>
               <!-- Simulated animation pulse -->
               @if (isBooking()) {
                 <div class="absolute inset-0 border-4 border-purple-500/50 rounded-full animate-ping"></div>
                 <div class="absolute inset-2 border-4 border-purple-400/30 rounded-full animate-ping" style="animation-delay: 150ms;"></div>
               }
            </div>
            
            <div class="h-8 flex items-center justify-center w-full z-10">
              @if (showSuccess()) {
                <!-- Added a small bounce animation to the success message -->
                <span class="text-emerald-700 font-bold bg-emerald-50 px-5 py-2 rounded-xl border border-emerald-100 animate-[bounce_0.5s_ease-out,fade-in_0.5s_ease-out] shadow-sm text-sm">
                  تم حجز التذكرة وإضافتها للمحفظة بنجاح!
                </span>
              } @else if (isBooking()) {
                <span class="text-purple-600 font-bold animate-pulse tracking-wide text-sm flex items-center gap-2">
                  <mat-icon class="animate-spin text-sm w-4 h-4">loop</mat-icon>
                  جاري الاتصال بالخادم...
                </span>
              } @else {
                <span class="text-slate-500 text-sm font-medium">اضغط للحجز وتجربة التفاعل المنطقي</span>
              }
            </div>

            <button 
              (click)="bookTicket()"
              [disabled]="isBooking()"
              class="w-full relative overflow-hidden group/btn bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-indigo-900/30 flex items-center gap-3 justify-center z-10">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-xl" [class.opacity-100]="!isBooking()"></div>
              <mat-icon class="relative z-10 text-xl font-bold">{{ isBooking() ? 'hourglass_empty' : 'touch_app' }}</mat-icon>
              <span class="relative z-10">{{ isBooking() ? 'الرجاء الانتظار...' : 'احجز تذكرتك الآن' }}</span>
            </button>
          </div>
        </div>

        <!-- Code Source -->
        <div class="flex flex-col gap-4">
          <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 shadow-sm text-indigo-800 text-sm leading-relaxed text-right flex gap-4">
             <div class="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0">
               <mat-icon class="text-indigo-600 text-sm w-4 h-4">info</mat-icon>
             </div>
             <p class="pt-1">الكود أدناه يمثل الدالة <code>bookTicket()</code> التي تُنفذ عند ضغطك للزر. تلاحظ استخدام أمر <code>setTimeout()</code> لمحاكاة تأخير وصول البيانات من الخادم، وتحديث عدد التذاكر.</p>
          </div>

          <div class="bg-[#1e1e1e] rounded-2xl overflow-visible shadow-sm flex flex-col flex-1 min-h-[320px] relative mt-4 md:mt-0">
             <div class="bg-slate-800 py-2 px-4 border-b border-slate-700 text-xs font-bold w-full text-slate-300 flex justify-end items-center gap-2 rounded-t-2xl z-10" dir="ltr">
              <span class="font-mono tracking-wider">app.js</span>
              <mat-icon class="text-[16px] w-[16px] h-[16px] text-amber-400">code</mat-icon>
            </div>
            <div class="p-4 sm:p-5 flex-1 overflow-visible bg-[#1e1e1e] rounded-b-2xl font-mono text-xs sm:text-[13px] leading-relaxed sm:leading-loose ltr text-left flex flex-col gap-[2px] whitespace-pre-wrap break-words min-w-0" dir="ltr">
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 100ms;">
                <span class="text-blue-400 font-bold">let</span> 
                <div class="relative inline-block group/tt1 cursor-help">
                  <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">tickets</span>
                  <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt1:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                    يخزن هذا المتغير عدد التذاكر المحجوزة حالياً. يتم تحديثه ديناميكياً.<br/><span class="mt-2 block font-bold text-emerald-400">القيمة: {{tickets()}}</span>
                  </div>
                </div>
                <span class="text-slate-400"> = </span> <span class="text-purple-400 transition-colors" [class.text-emerald-400]="showSuccess()">{{tickets()}}</span>;
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 200ms;">
                <span class="text-blue-400 font-bold">let</span> 
                <div class="relative inline-block group/tt2 cursor-help">
                  <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">isBooking</span>
                  <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt2:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                    متغير منطقي (True/False) يمنع المستخدم من ضغط الزر مرتين أثناء الحجز.<br/><span class="mt-2 block font-bold text-orange-400">القيمة: {{isBooking()}}</span>
                  </div>
                </div>
                <span class="text-slate-400"> = </span> <span class="text-orange-400 transition-colors" [class.text-red-400]="isBooking()">{{isBooking()}}</span>;
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 300ms;">
                <span class="text-blue-400 font-bold">let</span> 
                <div class="relative inline-block group/tt3 cursor-help">
                  <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">showSuccess</span>
                  <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt3:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                    يتحكم هذا المتغير في إظهار بطاقة النجاح الخضراء بعد إتمام الحجز.<br/><span class="mt-2 block font-bold text-emerald-400">القيمة: {{showSuccess()}}</span>
                  </div>
                </div>
                <span class="text-slate-400"> = </span> <span class="text-orange-400 transition-colors" [class.text-emerald-400]="showSuccess()">{{showSuccess()}}</span>;
              </div>
              
              <div class="h-4"></div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 400ms;">
                <span class="text-blue-400 font-bold">function</span> <span class="text-amber-300">bookTicket</span><span class="text-slate-400">() {{'{'}}</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 500ms;">
                &nbsp;&nbsp;<span class="text-slate-500 italic">/* تأمين الزر لمنع الضغط المزدوج */</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 600ms;">
                &nbsp;&nbsp;<span class="bg-white/5 px-1 rounded transition-colors" [class.bg-orange-500/20]="isBooking()">
                  <div class="relative inline-block group/tt2x cursor-help">
                    <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">isBooking</span>
                    <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt2x:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                      متغير منطقي (True/False) يمنع المستخدم من ضغط الزر مرتين أثناء الحجز.<br/><span class="mt-2 block font-bold text-orange-400">القيمة: {{isBooking()}}</span>
                    </div>
                  </div>
                  <span class="text-slate-400"> = </span> <span class="text-orange-400">true</span>;
                </span>
              </div>
              
              <div class="h-4"></div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 700ms;">
                &nbsp;&nbsp;<span class="text-slate-500 italic">/* طلب بالشبكة للخدمة السحابية (1.5 ثانية) */</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 800ms;">
                &nbsp;&nbsp;<span class="text-amber-300">setTimeout</span><span class="text-slate-400">(() <span class="text-blue-400 font-bold">=&gt;</span> {{'{'}}</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 900ms;">
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="bg-white/5 px-1 rounded transition-colors" [class.bg-emerald-500/20]="showSuccess()">
                  <div class="relative inline-block group/tt1x cursor-help">
                    <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">tickets</span>
                    <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt1x:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                      يخزن هذا المتغير عدد التذاكر المحجوزة حالياً. يتم تحديثه ديناميكياً.<br/><span class="mt-2 block font-bold text-emerald-400">القيمة: {{tickets()}}</span>
                    </div>
                  </div>
                  <span class="text-slate-400"> ++</span>; <span class="text-slate-500 italic">// زيادة العدد</span>
                </span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 1000ms;">
                &nbsp;&nbsp;&nbsp;&nbsp;<div class="relative inline-block group/tt2y cursor-help">
                  <span class="text-white underline decoration-dashed decoration-slate-500 underline-offset-4 transition-colors hover:text-purple-300">isBooking</span>
                  <div class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/tt2y:opacity-100 transition-opacity w-56 p-3 bg-slate-700 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-600 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
                    متغير منطقي (True/False) يمنع المستخدم من ضغط الزر مرتين أثناء الحجز.<br/><span class="mt-2 block font-bold text-orange-400">القيمة: {{isBooking()}}</span>
                  </div>
                </div> <span class="text-slate-400">=</span> <span class="text-orange-400">false</span>;
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 1100ms;">
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-300">showSuccessMessage</span><span class="text-slate-400">();</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 1200ms;">
                &nbsp;&nbsp;<span class="text-slate-400">{{'}'}},</span> <span class="text-purple-400">1500</span><span class="text-slate-400">);</span>
              </div>
              
              <div class="animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both" style="animation-delay: 1300ms;">
                <span class="text-slate-400 block mt-1">{{'}'}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Interactive Challenge -->
        <div class="mt-12 bg-purple-50/50 border border-purple-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 class="font-bold text-2xl mb-4 text-purple-900 flex items-center gap-3">
            <mat-icon class="text-purple-500 scale-125">military_tech</mat-icon>
            تحدي الفهم: أساسيات JavaScript
          </h3>
          <p class="text-purple-800 mb-6 font-medium">{{ challengeJs.question }}</p>
          
          <div class="space-y-3 mb-6">
            @for (option of challengeJs.options; track $index) {
              <button 
                (click)="selectedChallengeAnswer.set($index); challengeError.set('')"
                [disabled]="challengeCompleted()"
                class="w-full text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus:outline-none"
                [ngClass]="{
                  'border-purple-500 bg-purple-50 text-purple-900 ring-2 ring-purple-200': selectedChallengeAnswer() === $index && !challengeCompleted(),
                  'border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50/50 text-slate-700': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                  'border-emerald-500 bg-emerald-50 text-emerald-900': challengeCompleted() && $index === challengeJs.correctAnswer,
                  'border-slate-200 bg-slate-50 text-slate-400 opacity-50': challengeCompleted() && $index !== challengeJs.correctAnswer,
                  'cursor-default': challengeCompleted()
                }">
                <span class="font-mono text-left ltr" dir="ltr">{{ option }}</span>
                <div class="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                  [ngClass]="{
                    'border-purple-500': selectedChallengeAnswer() === $index && !challengeCompleted(),
                    'border-slate-300': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                    'border-emerald-500 bg-emerald-500': challengeCompleted() && $index === challengeJs.correctAnswer
                  }">
                  @if (challengeCompleted() && $index === challengeJs.correctAnswer) {
                    <mat-icon class="text-white scale-75">check</mat-icon>
                  } @else if (selectedChallengeAnswer() === $index && !challengeCompleted()) {
                    <div class="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                  }
                </div>
              </button>
            }
          </div>
          
          @if (!challengeCompleted()) {
            <div class="flex items-center gap-4">
              <button 
                (click)="checkJsChallenge()"
                class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50">
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
              <p class="text-slate-700 leading-relaxed mb-4 text-sm">{{ challengeJs.explanation }}</p>
              
              <div class="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start gap-3">
                <mat-icon class="text-amber-500 shrink-0">lightbulb</mat-icon>
                <div>
                  <h5 class="font-bold text-amber-900 text-sm mb-1">تنبيه لخطأ شائع</h5>
                  <p class="text-slate-700 text-sm leading-relaxed">{{ challengeJs.commonMistakes }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class JsLessonComponent {
  tickets = signal(0);
  isBooking = signal(false);
  showSuccess = signal(false);

  // Challenge State
  challengeCompleted = signal(false);
  challengeError = signal('');
  challengeSuccess = signal('');
  selectedChallengeAnswer = signal<number | null>(null);

  challengeJs = {
    question: 'في الكود المعروض لتطبيق حجز التذاكر، ما هي الفائدة الرئيسية من المتغير isBooking ؟',
    options: [
      'يقوم بحساب وتحديث عدد التذاكر المتاحة للحجز.',
      'يُستخدم كمنبه بصري (لإظهار البطاقة الخضراء) عند الانتهاء.',
      'يمنع إرسال طلب جديد أثناء معالجة الطلب الحالي (لمنع الضغط المزدوج).',
      'يؤخر تنفيذ العملية تلقائياً لمدة 1500 جزء من الثانية.'
    ],
    correctAnswer: 2,
    explanation: 'المتغير isBooking يعمل كـ (حارس منطقي). عندما يتم استدعاء الدالة، تصبح قيمته true، فيتم تعطيل زر الحجز مؤقتاً. هذا يمنع المستخدم من ضغط الزر أكثر من مرة وتكرار الحجوزات أو الضغط على الخادم.',
    commonMistakes: 'الخطأ الشائع هو الخلط بين أدوار المتغيرات والدوال المساعدة. فالدالة setTimeout هي المسؤولة الوحيدة عن التأخير، ومسؤولية showSuccess هي إظهار رسالة النجاح.'
  };

  checkJsChallenge() {
    if (this.selectedChallengeAnswer() === null) {
      this.challengeError.set('الرجاء اختيار إجابة أولاً.');
      return;
    }
    
    if (this.selectedChallengeAnswer() === this.challengeJs.correctAnswer) {
      this.challengeSuccess.set('إجابة صحيحة! أحسنت.');
      this.challengeError.set('');
      this.challengeCompleted.set(true);
    } else {
      this.challengeError.set('إجابة خاطئة. حاول مرة أخرى!');
      this.challengeSuccess.set('');
    }
  }

  bookTicket() {
    this.isBooking.set(true);
    this.showSuccess.set(false);
    
    // Simulate network delay
    setTimeout(() => {
      this.tickets.update(t => t + 1);
      this.isBooking.set(false);
      this.showSuccess.set(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccess.set(false);
      }, 3000);
      
    }, 1500);
  }
}
