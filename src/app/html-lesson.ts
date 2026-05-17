import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NeomMapComponent } from './neom-map';

@Component({
  selector: 'app-html-lesson',
  imports: [MatIconModule, NeomMapComponent, CommonModule],
  template: `
    <div class="space-y-6 animate-[fade-in_0.5s_ease-out]">
      <div class="mb-6">
        <h2 class="text-3xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <mat-icon class="text-orange-500 scale-125">architecture</mat-icon>
          الدرس الأول: بناء هيكل "نيوم" بـ HTML
        </h2>
        <p class="text-slate-600 mt-3 text-lg leading-relaxed">
          لغة HTML تتكون من "وسوم" (Tags). كل وسم يخبر المتصفح عن نوع المحتوى (عنوان، فقرة، زر، صورة، خريطة تفاعلية).
          لنجرّب بناء واجهة تعريفية بسيطة مبسطة لمشروع "نيوم" مع عرض مواقعه على الخريطة.
        </p>
      </div>

      <!-- HTML Skeleton Explanation -->
      <div class="bg-blue-50 text-blue-900 p-6 md:p-8 rounded-3xl border border-blue-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-blue-600 scale-125">integration_instructions</mat-icon>
          الهيكل الأساسي لأي صفحة ويب
        </h3>
        <p class="text-base leading-relaxed mb-6 text-blue-800 relative z-10 font-medium">كل صفحة ويب تبدأ بهيكل أساسي ثابت، يشبه الغلاف الذي يحتوي على معلومات الصفحة والمحتوى الذي يراه المستخدم. إليك أول أسطر برمجية ستكتبها دائماً:</p>
        
        <div class="bg-[#1e1e1e] rounded-2xl p-5 mb-6 shadow-sm overflow-x-auto" dir="ltr">
          <pre class="font-mono text-sm leading-loose"><span class="text-slate-400">&lt;!DOCTYPE html&gt;</span>
<span class="text-slate-400">&lt;</span><span class="text-blue-400">html</span> <span class="text-teal-300">lang</span><span class="text-slate-400">=</span><span class="text-amber-300">"ar"</span> <span class="text-teal-300">dir</span><span class="text-slate-400">=</span><span class="text-amber-300">"rtl"</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">head</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-500 italic">&lt;!-- معلومات للمتصفح ومحركات البحث لا يراها المستخدم --&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">meta</span> <span class="text-teal-300">charset</span><span class="text-slate-400">=</span><span class="text-amber-300">"UTF-8"</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">title</span><span class="text-slate-400">&gt;</span><span class="text-white">مشروع نيوم</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">title</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;/</span><span class="text-blue-400">head</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">body</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-500 italic">&lt;!-- كل ما يظهر للمستخدم يُكتب هنا --&gt;</span>
    
  <span class="text-slate-400">&lt;/</span><span class="text-blue-400">body</span><span class="text-slate-400">&gt;</span>
<span class="text-slate-400">&lt;/</span><span class="text-blue-400">html</span><span class="text-slate-400">&gt;</span></pre>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-blue-200">
            <span class="font-bold ltr text-left text-blue-700 bg-blue-100 px-2 py-1 rounded-md text-xs border border-blue-200 code-font shadow-sm shrink-0">&lt;!DOCTYPE html&gt;</span>
            <span class="text-sm text-blue-900 leading-relaxed flex-1">يُخبر المتصفح أننا نستخدم أحدث إصدار من لغة الشجرة HTML5.</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-blue-200">
            <span class="font-bold ltr text-left text-blue-700 bg-blue-100 px-2 py-1 rounded-md text-xs border border-blue-200 code-font shadow-sm shrink-0">&lt;html&gt;</span>
            <span class="text-sm text-blue-900 leading-relaxed flex-1">الجذر الأساسي للصفحة الذي يحتوي كل شيء بداخله.</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-blue-200">
            <span class="font-bold ltr text-left text-blue-700 bg-blue-100 px-2 py-1 rounded-md text-xs border border-blue-200 code-font shadow-sm shrink-0">&lt;head&gt;</span>
            <span class="text-sm text-blue-900 leading-relaxed flex-1">يحتوي على إعدادات الصفحة مثل العنوان والروابط لملفات التصميم. المحتوى هنا مخفي عن الواجهة.</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-blue-200">
            <span class="font-bold ltr text-left text-blue-700 bg-blue-100 px-2 py-1 rounded-md text-xs border border-blue-200 code-font shadow-sm shrink-0">&lt;body&gt;</span>
            <span class="text-sm text-blue-900 leading-relaxed flex-1">هنا نضع المحتوى المرئي؛ النصوص، الصور، الروابط، وكل ما نتفاعل معه.</span>
          </div>
        </div>
      </div>

      <!-- Semantic HTML Explanation -->
      <div class="bg-emerald-50 text-emerald-900 p-6 md:p-8 rounded-3xl border border-emerald-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/40 rounded-br-full blur-2xl pointer-events-none"></div>
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-emerald-600 scale-125">foundation</mat-icon>
          أساسيات لغة HTML (هيكل الويب)
        </h3>
        <p class="text-base leading-relaxed mb-6 text-emerald-800 relative z-10 font-medium whitespace-break-spaces">لغة <strong>HTML</strong> (HyperText Markup Language) هي لغة وصفية تستخدم لتحديد هيكل ومحتوى صفحات الويب. 
تخيل بناء منزل، HTML هي الأعمدة والجدران. تتكون اللغة من مجموعة من <strong>الوسوم (Tags)</strong> التي تخبر المتصفح بنوع المحتوى.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-6">
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-amber-500 scale-75">code</mat-icon>
              كيف يُكتب الوسم؟
            </h4>
             <p class="text-sm text-emerald-800 mb-3 leading-relaxed">يتكون العنصر غالباً من وسم بداية، ومحتوى، ووسم نهاية:</p>
             <div class="flex flex-wrap items-center justify-between gap-2 text-xs ltr" dir="ltr">
                <div class="bg-slate-800 text-blue-300 p-2 rounded-lg font-mono shrink-0">&lt;p&gt;</div>
                <div class="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg font-bold border border-slate-200 flex-1 text-center min-w-[100px]">محتوى الفقرة</div>
                <div class="bg-slate-800 text-blue-300 p-2 rounded-lg font-mono shrink-0">&lt;/p&gt;</div>
             </div>
          </div>
          <div class="bg-white/80 backdrop-blur pb-6 p-5 rounded-2xl border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <mat-icon class="text-amber-500 scale-75">settings</mat-icon>
              الخصائص (Attributes)
            </h4>
             <p class="text-sm text-emerald-800 mb-3 leading-relaxed">تعطي الخصائص معلومات إضافية للوسام، وتُكتب في وسم البداية، مثل:</p>
             <div class="bg-slate-800 p-3 rounded-lg font-mono text-xs sm:text-sm ltr text-left overflow-hidden whitespace-pre-wrap break-words w-full" dir="ltr">
                <span class="text-slate-400">&lt;</span><span class="text-blue-400">img</span> <span class="text-teal-300">src</span><span class="text-slate-400">=</span><span class="text-amber-300">"image.jpg"</span><span class="text-slate-400">&gt;</span>
             </div>
             <p class="text-xs text-emerald-700 mt-2">توفر <code class="bg-emerald-100 px-1 rounded">src</code> مسار الصورة ليتمكن المتصفح من عرضها.</p>
          </div>
        </div>

        <h3 class="font-bold text-xl mb-4 flex items-center gap-2 border-t border-emerald-200 pt-6 mt-2 relative z-10">
          <mat-icon class="text-emerald-600">account_tree</mat-icon>
          الوسوم الدلالية (Semantic HTML) لبناء مستدام
        </h3>
        <p class="text-sm leading-relaxed mb-4 text-emerald-800 relative z-10">
          في رؤية 2030، نبني للمستقبل بطريقة مستدامة تراعي الجميع. في عالم الويب، نستخدم <strong>الوسوم الدلالية</strong> لإعطاء معنى دقيق للهيكل بدلاً من استخدام وسم <code>&lt;div&gt;</code> عشوائي.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;header&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">ترويسة الموقع العلوية، تحتوي الشعار.</span>
             </div>
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;nav&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">القوائم الملاحية للتنقل بين الصفحات.</span>
             </div>
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;main&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">المحتوى الأساسي والمحوري للمشروع.</span>
             </div>
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;section&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">قسم مستقل، مثل "معالم المشروع".</span>
             </div>
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;ul&gt; &amp; &lt;li&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">إنشاء قوائم منقطة للمميزات والأهداف.</span>
             </div>
             <div class="flex items-start gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <span class="font-bold ltr text-left text-teal-700 bg-teal-50 px-2 py-1.5 rounded-md text-xs border border-teal-100 code-font shadow-sm shrink-0">&lt;footer&gt;</span>
                <span class="text-xs text-emerald-800 pt-1 leading-relaxed flex-1">تذييل مع معلومات حقوق النشر.</span>
             </div>
        </div>
      </div>

      <!-- Structural Elements -->
      <div class="bg-amber-50 text-amber-900 p-6 md:p-8 rounded-3xl border border-amber-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-amber-600 scale-125">dashboard</mat-icon>
          تقسيم الصفحة وهيكلها (Head, Body, Div, Span)
        </h3>
        <p class="text-base leading-relaxed mb-6 text-amber-800 relative z-10 font-medium">لتنظيم تخطيط المواقع المعقدة مثل منصة "أبشر" أو مواقع "رؤية 2030"، نستخدم عناصر هيكلية لتنظيم الكود وترتيب المحتوى:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div class="bg-white/80 p-5 rounded-2xl border border-amber-200">
                <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <mat-icon class="text-slate-500 scale-75">settings</mat-icon>
                    الرأس &lt;head&gt; والجسم &lt;body&gt;
                </h4>
                <p class="text-xs text-amber-800 mb-2 leading-relaxed">الـ <code>head</code> يحتوي على إعدادات لا يراها المستخدم (كالعنوان والخطوط)، والـ <code>body</code> يحتوي على كل ما يظهر في الصفحة.</p>
            </div>

            <div class="bg-white/80 p-5 rounded-2xl border border-amber-200">
                <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <mat-icon class="text-blue-500 scale-75">view_agenda</mat-icon>
                    العنصر &lt;div&gt; و &lt;span&gt;
                </h4>
                <p class="text-xs text-amber-800 mb-2 leading-relaxed">الـ <code>div</code> صندوق كبير (Block) لفصل أجزاء الصفحة، والـ <code>span</code> عنصر داخلي (Inline) لتخصيص جزء من النص، مثل: <span class="bg-amber-100 px-1 rounded text-amber-700">كلمة مميزة</span>.</p>
            </div>
        </div>
      </div>

      <!-- Lists, Tables, and Forms Explanation -->
      <div class="bg-indigo-50 text-indigo-900 p-6 md:p-8 rounded-3xl border border-indigo-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-indigo-600 scale-125">list_alt</mat-icon>
          عناصر تفاعلية ضرورية
        </h3>
        <p class="text-base leading-relaxed mb-6 text-indigo-800 relative z-10 font-medium">لعرض البيانات أو جمعها من المستخدم بوضوح، تقدم لك HTML وسوم خُصصت للمهام اليومية:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <!-- Lists -->
            <div class="bg-white/80 p-5 rounded-2xl border border-indigo-200">
                <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <mat-icon class="text-blue-500 scale-75">format_list_bulleted</mat-icon>
                    القوائم النقطية والرقمية
                </h4>
                <p class="text-xs text-indigo-800 mb-2">القوائم ضرورية لترتيب العناصر بوضوح.</p>
                <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[11px] ltr text-left leading-loose shadow-inner w-full overflow-x-auto" dir="ltr">
<span class="text-slate-400">&lt;</span><span class="text-blue-400">ul</span><span class="text-slate-400">&gt;</span> <span class="text-slate-500 italic">&lt;!-- للمرتبة استخدم ol --&gt;</span>
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">li</span><span class="text-slate-400">&gt;</span><span class="text-white">جدة</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">li</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">li</span><span class="text-slate-400">&gt;</span><span class="text-white">الرياض</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">li</span><span class="text-slate-400">&gt;</span>
<span class="text-slate-400">&lt;/</span><span class="text-blue-400">ul</span><span class="text-slate-400">&gt;</span>
                </div>
            </div>

            <!-- Tables -->
            <div class="bg-white/80 p-5 rounded-2xl border border-indigo-200">
                <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <mat-icon class="text-emerald-500 scale-75">grid_on</mat-icon>
                    الجداول
                </h4>
                <p class="text-xs text-indigo-800 mb-2">لترتيب البيانات المنظمة كجدول الحصص أو الدرجات.</p>
                <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[11px] ltr text-left leading-loose shadow-inner w-full overflow-x-auto" dir="ltr">
<span class="text-slate-400">&lt;</span><span class="text-blue-400">table</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;</span><span class="text-blue-400">tr</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">th</span><span class="text-slate-400">&gt;</span><span class="text-white">الاسم</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">th</span><span class="text-slate-400">&gt;</span>
    <span class="text-slate-400">&lt;</span><span class="text-blue-400">td</span><span class="text-slate-400">&gt;</span><span class="text-white">أحمد</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">td</span><span class="text-slate-400">&gt;</span>
  <span class="text-slate-400">&lt;/</span><span class="text-blue-400">tr</span><span class="text-slate-400">&gt;</span>
<span class="text-slate-400">&lt;/</span><span class="text-blue-400">table</span><span class="text-slate-400">&gt;</span>
                </div>
            </div>

            <!-- Forms -->
            <div class="bg-white/80 p-5 rounded-2xl border border-indigo-200">
                <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <mat-icon class="text-amber-500 scale-75">smart_button</mat-icon>
                    النماذج والأزرار
                </h4>
                <p class="text-xs text-indigo-800 mb-2">للتفاعل وإدخال البيانات مثل تسجيل الدخول.</p>
                <div class="bg-[#1e1e1e] p-3 rounded-xl font-mono text-[11px] ltr text-left leading-loose shadow-inner w-full overflow-x-auto" dir="ltr">
<span class="text-slate-400">&lt;</span><span class="text-blue-400">input</span> <span class="text-teal-300">type</span><span class="text-slate-400">=</span><span class="text-amber-300">"text"</span><span class="text-slate-400">&gt;</span>
<span class="text-slate-400">&lt;</span><span class="text-blue-400">textarea</span><span class="text-slate-400">&gt;&lt;/</span><span class="text-blue-400">textarea</span><span class="text-slate-400">&gt;</span>
<span class="text-slate-400">&lt;</span><span class="text-blue-400">button</span><span class="text-slate-400">&gt;</span><span class="text-white">إرسال</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-slate-400">&gt;</span>
                </div>
            </div>
        </div>
      </div>

      <!-- Real World Examples -->
      <div class="bg-emerald-50 text-emerald-900 p-6 md:p-8 rounded-3xl border border-emerald-100 mb-8 section-fade-in shadow-sm relative overflow-hidden">
        <h3 class="font-bold text-2xl mb-4 flex items-center gap-3 relative z-10">
          <mat-icon class="text-emerald-600 scale-125">public</mat-icon>
          أمثلة واقعية من منصات وطنية
        </h3>
        <p class="text-base leading-relaxed mb-6 text-emerald-800 relative z-10 font-medium">كيف تُستخدم وسوم HTML في بناء واجهات المواقع الكبرى في السعودية؟</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div class="bg-white/90 p-5 rounded-2xl border border-emerald-200">
                <h4 class="font-bold text-emerald-900 mb-2">منصة أبشر</h4>
                <p class="text-xs text-emerald-800 leading-relaxed">
                  تعتمد بشكل كبير على وسوم النماذج <code>&lt;form&gt;</code> و <code>&lt;input&gt;</code> لجمع بيانات المستخدمين لتسجيل الدخول أو الاستعلام عن المعاملات بأمان ودقة عاليتين.
                </p>
            </div>
            <div class="bg-white/90 p-5 rounded-2xl border border-emerald-200">
                <h4 class="font-bold text-emerald-900 mb-2">موقع رؤية السعودية 2030</h4>
                <p class="text-xs text-emerald-800 leading-relaxed">
                  يستخدم وسوم العناوين <code>&lt;h1&gt;</code> إلى <code>&lt;h3&gt;</code> بوضوح لهيكلة البرامج والمبادرات مثل "برنامج جودة الحياة"، مع استخدام مكثف لوسوم الصور <code>&lt;img&gt;</code> لإبراز الهوية البصرية.
                </p>
            </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Interactive Controls -->
        <div class="bg-white border text-right border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <h3 class="font-bold text-lg text-slate-800 border-b border-slate-100 pb-3 w-full">مواد البناء (وسوم HTML)</h3>
          
          <div class="relative group/tt1 w-full z-20">
            <button aria-label="إضافة عنوان H1" (click)="addElement('h1')" [ngClass]="{'scale-[0.98] opacity-80 border-orange-400 bg-orange-50': recentlyAdded() === 'h1'}" class="w-full flex items-center justify-between bg-white hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div class="flex items-center gap-3">
                <mat-icon class="text-slate-400 group-hover:text-orange-500 transition-colors">title</mat-icon>
                <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                  <span class="font-bold text-slate-700 group-hover:text-orange-700 code-font ltr transition-colors break-words whitespace-normal">&lt;h1&gt;</span>
                  <span class="text-xs text-slate-500 whitespace-normal">عنوان رئيسي للمشروع</span>
                </div>
              </div>
              <mat-icon class="transition-all duration-300" [ngClass]="{'text-orange-500': recentlyAdded() === 'h1', 'text-slate-300 group-hover:text-orange-500': recentlyAdded() !== 'h1'}">
                {{ recentlyAdded() === 'h1' ? 'check_circle' : 'add_circle' }}
              </mat-icon>
            </button>
            <div class="pointer-events-none absolute right-[105%] top-1/2 -translate-y-1/2 opacity-0 group-hover/tt1:opacity-100 transition-opacity w-56 p-3 bg-slate-800 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-700 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
              <strong class="text-orange-300 mb-1 block">الوسم &lt;h1&gt;</strong>
               يُستخدم لكتابة العنوان الرئيسي والأهم في الصفحة. عادةً يُستخدم مرة واحدة لتعريف محتوى الصفحة لمحركات البحث (SEO).
            </div>
          </div>

          <div class="relative group/tt2 w-full z-10">
            <button aria-label="إضافة نص P" (click)="addElement('p')" [ngClass]="{'scale-[0.98] opacity-80 border-orange-400 bg-orange-50': recentlyAdded() === 'p'}" class="w-full flex items-center justify-between bg-white hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div class="flex items-center gap-3">
                <mat-icon class="text-slate-400 group-hover:text-orange-500 transition-colors">notes</mat-icon>
                <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                  <span class="font-bold text-slate-700 group-hover:text-orange-700 code-font ltr transition-colors break-words whitespace-normal">&lt;p&gt;</span>
                  <span class="text-xs text-slate-500 whitespace-normal">فقرة نصية للتفاصيل</span>
                </div>
              </div>
              <mat-icon class="transition-all duration-300" [ngClass]="{'text-orange-500': recentlyAdded() === 'p', 'text-slate-300 group-hover:text-orange-500': recentlyAdded() !== 'p'}">
                {{ recentlyAdded() === 'p' ? 'check_circle' : 'add_circle' }}
              </mat-icon>
            </button>
            <div class="pointer-events-none absolute right-[105%] top-1/2 -translate-y-1/2 opacity-0 group-hover/tt2:opacity-100 transition-opacity w-56 p-3 bg-slate-800 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-700 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
               <strong class="text-orange-300 mb-1 block">الوسم &lt;p&gt;</strong>
               يُستخدم لكتابة الفقرات النصية العادية (Paragraph). وهو العنصر الأساسي لقراءة النصوص والمقالات.
            </div>
          </div>

          <div class="relative group/tt3 w-full z-[9]">
            <button aria-label="إضافة رابط a" (click)="addElement('a')" [ngClass]="{'scale-[0.98] opacity-80 border-orange-400 bg-orange-50': recentlyAdded() === 'a'}" class="w-full flex items-center justify-between bg-white hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div class="flex items-center gap-3">
                <mat-icon class="text-slate-400 group-hover:text-orange-500 transition-colors">link</mat-icon>
                <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                  <span class="font-bold text-slate-700 group-hover:text-orange-700 code-font ltr transition-colors break-words whitespace-normal">&lt;a href=""&gt;</span>
                  <span class="text-xs text-slate-500 whitespace-normal">رابط تشعبي للانتقال</span>
                </div>
              </div>
              <mat-icon class="transition-all duration-300" [ngClass]="{'text-orange-500': recentlyAdded() === 'a', 'text-slate-300 group-hover:text-orange-500': recentlyAdded() !== 'a'}">
                {{ recentlyAdded() === 'a' ? 'check_circle' : 'add_circle' }}
              </mat-icon>
            </button>
            <div class="pointer-events-none absolute right-[105%] top-1/2 -translate-y-1/2 opacity-0 group-hover/tt3:opacity-100 transition-opacity w-56 p-3 bg-slate-800 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-700 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
               <strong class="text-orange-300 mb-1 block">الوسم &lt;a&gt;</strong>
               الروابط التشعبية (Anchor tags). تُستخدم للانتقال من صفحة لأخرى. خاصية <code class="font-mono bg-slate-700 px-1 rounded mx-1">href</code> تُحدد مسار الصفحة المقصودة.
            </div>
          </div>


          <div class="relative group/tt4 w-full z-[8]">
            <button aria-label="إضافة خريطة تفاعلية" (click)="addElement('map')" [ngClass]="{'scale-[0.98] opacity-80 border-orange-400 bg-orange-50': recentlyAdded() === 'map'}" class="w-full flex items-center justify-between bg-white hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div class="flex items-center gap-3">
                <mat-icon class="text-slate-400 group-hover:text-orange-500 transition-colors">map</mat-icon>
                <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                  <span class="font-bold text-slate-700 group-hover:text-orange-700 code-font ltr transition-colors break-words whitespace-normal">&lt;div id="map"&gt;</span>
                  <span class="text-xs text-slate-500 whitespace-normal">خريطة تفاعلية لمعالم نيوم</span>
                </div>
              </div>
              <mat-icon class="transition-all duration-300" [ngClass]="{'text-orange-500': recentlyAdded() === 'map', 'text-slate-300 group-hover:text-orange-500': recentlyAdded() !== 'map'}">
                {{ recentlyAdded() === 'map' ? 'check_circle' : 'add_circle' }}
              </mat-icon>
            </button>
            <div class="pointer-events-none absolute right-[105%] top-1/2 -translate-y-1/2 opacity-0 group-hover/tt4:opacity-100 transition-opacity w-56 p-3 bg-slate-800 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-700 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
               <strong class="text-orange-300 mb-1 block">الحاويات &lt;div&gt;</strong>
               عنصر فارغ يُستخدم لتجميع وتنظيم العناصر الأخرى بصفحة الويب. هنا استخدمناه كوعاء جاهز ليتم ملؤه بالخريطة التفاعلية (Leaflet).
            </div>
          </div>

          <div class="relative group/tt5 w-full z-[7]">
            <button aria-label="إضافة صورة img" (click)="addElement('img')" [ngClass]="{'scale-[0.98] opacity-80 border-orange-400 bg-orange-50': recentlyAdded() === 'img'}" class="w-full flex items-center justify-between bg-white hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 rounded-xl p-4 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              <div class="flex items-center gap-3">
                <mat-icon class="text-slate-400 group-hover:text-orange-500 transition-colors">image</mat-icon>
                <div class="flex items-start flex-col gap-1 w-full overflow-hidden text-right">
                  <span class="font-bold text-slate-700 group-hover:text-orange-700 code-font ltr transition-colors break-words whitespace-normal">&lt;img&gt;</span>
                  <span class="text-xs text-slate-500 whitespace-normal">صورة معمارية</span>
                </div>
              </div>
              <mat-icon class="transition-all duration-300" [ngClass]="{'text-orange-500': recentlyAdded() === 'img', 'text-slate-300 group-hover:text-orange-500': recentlyAdded() !== 'img'}">
                {{ recentlyAdded() === 'img' ? 'check_circle' : 'add_circle' }}
              </mat-icon>
            </button>
            <div class="pointer-events-none absolute right-[105%] top-1/2 -translate-y-1/2 opacity-0 group-hover/tt5:opacity-100 transition-opacity w-56 p-3 bg-slate-800 text-slate-100 text-xs rounded-xl shadow-2xl border border-slate-700 z-50 whitespace-normal text-right shadow-black/50" dir="rtl">
               <strong class="text-orange-300 mb-1 block">الوسم &lt;img&gt;</strong>
               يُستخدم لعرض الصور. ولا يحتاج لوسم إغلاق! يحتاج خاصية <code class="font-mono bg-slate-700 px-1 rounded mx-1">src</code> لمسار الصورة، و <code class="font-mono bg-slate-700 px-1 rounded mx-1">alt</code> كنص بديل لوصفها.
            </div>
          </div>

          <button aria-label="إعادة ضبط العناصر" (click)="reset()" class="w-full flex items-center justify-center gap-2 mt-4 text-red-600 hover:bg-red-50 hover:border-red-200 border border-transparent p-3 rounded-xl transition-colors text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
            <mat-icon class="scale-90">delete_sweep</mat-icon>
            إزالة الهيكل وإعادة البناء
          </button>
        </div>

        <!-- Preview & Code -->
        <div class="flex flex-col gap-4">
          <!-- Live Preview -->
          <div class="bg-white border text-right border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-64 relative">
            <div class="bg-slate-50 py-2 px-4 border-b border-slate-200 text-xs font-bold text-slate-500 flex items-center gap-2">
              <mat-icon class="text-[16px] w-[16px] h-[16px]">web</mat-icon>
              الواجهة (استعراض المتصفح)
            </div>
            <div class="p-6 flex-1 overflow-auto bg-white text-slate-800">
              @if (elements().length === 0) {
                <div class="h-full flex items-center justify-center text-slate-400 flex-col gap-3">
                  <mat-icon class="opacity-50 text-5xl mb-2 text-slate-300">foundation</mat-icon>
                  <span class="font-medium">أرض بيضاء تنتظر بناء الهيكل...</span>
                  <span class="text-xs text-slate-400">اختر الوسوم من القائمة الجانبية</span>
                </div>
              }
              @for (item of elements(); track $index) {
                @if (item.type === 'h1') {
                  <h1 class="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900 border-r-4 border-orange-500 pr-3">{{item.text}}</h1>
                }
                @if (item.type === 'p') {
                  <p class="text-base text-slate-600 mb-4 leading-relaxed">{{item.text}}</p>
                }
                @if (item.type === 'a') {
                  <a href="#" (click)="$event.preventDefault()" class="text-blue-600 font-medium hover:underline mb-4 inline-block">{{item.text}}</a>
                }
                @if (item.type === 'map') {
                  <app-neom-map id="map"></app-neom-map>
                  <button aria-label="التمرير للخريطة" (click)="scrollToMap()" class="w-full flex items-center justify-center gap-2 text-sm bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-3 rounded-xl mt-3 mb-4 font-bold transition-all border border-orange-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
                    <mat-icon class="scale-90">location_on</mat-icon>
                    عرض الخريطة التفاعلية بالأسفل
                  </button>
                }
                @if (item.type === 'img') {
                  <img [src]="item.src" alt="نيوم" referrerpolicy="no-referrer" class="w-full h-36 object-cover rounded-xl mb-4 shadow-sm z-0 relative" />
                }
              }
            </div>
          </div>

          <!-- Code Source -->
          <div class="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-sm flex flex-col h-48 relative">
             <div class="bg-slate-800 py-2 px-4 border-b border-slate-700 text-xs font-bold w-full text-slate-300 flex justify-end items-center gap-2" dir="ltr">
              <span class="font-mono tracking-wider">neom.html</span>
              <mat-icon class="text-[16px] w-[16px] h-[16px] text-orange-400">code</mat-icon>
            </div>
            <div class="p-4 flex-1 overflow-auto bg-[#1e1e1e] text-orange-300 font-mono text-sm leading-relaxed ltr" dir="ltr">
              @if (elements().length === 0) {
                <span class="text-slate-500 italic">&lt;!-- أضف أكواد HTML هنا عبر الأزرار --&gt;</span>
              }
              @for (item of elements(); track $index) {
                <div class="mb-2 text-left">
                  @if (item.type === 'img') {
                    <span class="text-slate-400">&lt;</span><span class="text-blue-400">img</span> <span class="text-teal-300">src</span><span class="text-slate-400">=</span><span class="text-amber-300">"{{item.src}}"</span> <span class="text-teal-300">alt</span><span class="text-slate-400">=</span><span class="text-amber-300">"نيوم"</span> <span class="text-slate-400">/&gt;</span>
                  } @else if (item.type === 'map') {
                    <span class="text-slate-400">&lt;</span><span class="text-blue-400">div</span> <span class="text-teal-300">id</span><span class="text-slate-400">=</span><span class="text-amber-300">"map"</span><span class="text-slate-400">&gt;&lt;/</span><span class="text-blue-400">div</span><span class="text-slate-400">&gt;</span><br/>
                    <span class="text-slate-500 italic">&lt;!-- تقوم مكتبة Leaflet بملء هذا العنصر بالخريطة التفاعلية --&gt;</span>
                  } @else if (item.type === 'a') {
                    <span class="text-slate-400">&lt;</span><span class="text-blue-400">a</span> <span class="text-teal-300">href</span><span class="text-slate-400">=</span><span class="text-amber-300">"https://www.neom.com"</span><span class="text-slate-400">&gt;</span><span class="text-white">{{item.text}}</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">a</span><span class="text-slate-400">&gt;</span>
                  } @else {
                    <span class="text-slate-400">&lt;</span><span class="text-blue-400">{{item.type}}</span><span class="text-slate-400">&gt;</span><span class="text-white">{{item.text}}</span><span class="text-slate-400">&lt;/</span><span class="text-blue-400">{{item.type}}</span><span class="text-slate-400">&gt;</span>
                  }
                </div>
              }
            </div>
          </div>
        </div>
        <!-- Interactive Challenge -->
        <div class="mt-12 bg-orange-50/50 border border-orange-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 class="font-bold text-2xl mb-4 text-orange-900 flex items-center gap-3">
            <mat-icon class="text-orange-500 scale-125">military_tech</mat-icon>
            تحدي الفهم: أساسيات HTML
          </h3>
          <p class="text-orange-800 mb-6 font-medium">{{ challengeHtml.question }}</p>
          
          <div class="space-y-3 mb-6">
            @for (option of challengeHtml.options; track $index) {
              <button 
                (click)="selectedChallengeAnswer.set($index); challengeError.set('')"
                [disabled]="challengeCompleted()"
                class="w-full text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus:outline-none"
                [ngClass]="{
                  'border-orange-500 bg-orange-50 text-orange-900 ring-2 ring-orange-200': selectedChallengeAnswer() === $index && !challengeCompleted(),
                  'border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/50 text-slate-700': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                  'border-emerald-500 bg-emerald-50 text-emerald-900': challengeCompleted() && $index === challengeHtml.correctAnswer,
                  'border-slate-200 bg-slate-50 text-slate-400 opacity-50': challengeCompleted() && $index !== challengeHtml.correctAnswer,
                  'cursor-default': challengeCompleted()
                }">
                <span class="font-mono text-left ltr" dir="ltr">{{ option }}</span>
                <div class="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors"
                  [ngClass]="{
                    'border-orange-500': selectedChallengeAnswer() === $index && !challengeCompleted(),
                    'border-slate-300': selectedChallengeAnswer() !== $index && !challengeCompleted(),
                    'border-emerald-500 bg-emerald-500': challengeCompleted() && $index === challengeHtml.correctAnswer
                  }">
                  @if (challengeCompleted() && $index === challengeHtml.correctAnswer) {
                    <mat-icon class="text-white scale-75">check</mat-icon>
                  } @else if (selectedChallengeAnswer() === $index && !challengeCompleted()) {
                    <div class="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                  }
                </div>
              </button>
            }
          </div>
          
          @if (!challengeCompleted()) {
            <div class="flex items-center gap-4">
              <button 
                (click)="checkHtmlChallenge()"
                class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50">
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
              <p class="text-slate-700 leading-relaxed mb-4 text-sm">{{ challengeHtml.explanation }}</p>
              
              <div class="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start gap-3">
                <mat-icon class="text-amber-500 shrink-0">lightbulb</mat-icon>
                <div>
                  <h5 class="font-bold text-amber-900 text-sm mb-1">تنبيه لخطأ شائع</h5>
                  <p class="text-slate-700 text-sm leading-relaxed">{{ challengeHtml.commonMistakes }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class HtmlLessonComponent {
  elements = signal<{type: string, text?: string, src?: string}[]>([]);
  recentlyAdded = signal<string | null>(null);

  // Challenge State
  challengeCompleted = signal(false);
  challengeError = signal('');
  challengeSuccess = signal('');
  selectedChallengeAnswer = signal<number | null>(null);

  challengeHtml = {
    question: 'أي من الوسوم التالية يعتبر الأنسب لاحتواء العنوان الرئيسي لصفحة الويب المتعلقة بمشروع نيوم؟',
    options: [
      '<header>عنوان نيوم</header>',
      '<h1>عنوان نيوم</h1>',
      '<title>عنوان نيوم</title>',
      '<div>عنوان نيوم</div>'
    ],
    correctAnswer: 1,
    explanation: 'الوسم <h1> يستخدم لتعريف العنوان الرئيسي والأهم في الصفحة (Heading 1). وسم <header> يستخدم لاحتواء ترويسة الموقع بما فيها الشعار، بينما <title> يحدد عنوان المستند في شريط نافذة المتصفح العليا.',
    commonMistakes: 'الخطأ الشائع هو استخدام <div> وتنسيقه ليبدو كعنوان! محركات البحث (SEO) وبرامج قراءة الشاشة للمكفوفين تعتمد بشكل أساسي على وسوم العناوين (h1-h6) لفهم التسلسل الهرمي للمحتوى.'
  };

  checkHtmlChallenge() {
    if (this.selectedChallengeAnswer() === null) {
      this.challengeError.set('الرجاء اختيار إجابة أولاً.');
      return;
    }
    
    if (this.selectedChallengeAnswer() === this.challengeHtml.correctAnswer) {
      this.challengeSuccess.set('إجابة صحيحة! أحسنت.');
      this.challengeError.set('');
      this.challengeCompleted.set(true);
    } else {
      this.challengeError.set('إجابة خاطئة. حاول مرة أخرى!');
      this.challengeSuccess.set('');
    }
  }

  addElement(type: string) {
    const list = this.elements();
    if (type === 'h1') this.elements.set([...list, {type: 'h1', text: 'مرحباً بكم في ذا لاين - نيوم'}]);
    if (type === 'p') this.elements.set([...list, {type: 'p', text: 'مدينة المستقبل، تعتمد 100% على الطاقة المتجددة، بلا شوارع ولا سيارات، حيث الطبيعة أولاً.'}]);
    if (type === 'a') this.elements.set([...list, {type: 'a', text: 'اكتشف المزيد عن نيوم'}]);
    if (type === 'map') this.elements.set([...list, {type: 'map'}]);
    if (type === 'img') this.elements.set([...list, {type: 'img', src: 'https://images.unsplash.com/photo-1518005020951-eccb49a71092?w=800&q=80'}]); // A futuristic/abstract nature image
    
    this.recentlyAdded.set(type);
    setTimeout(() => {
      if (this.recentlyAdded() === type) {
        this.recentlyAdded.set(null);
      }
    }, 600);
  }
  
  scrollToMap() {
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  reset() {
    this.elements.set([]);
  }
}

