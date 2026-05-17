import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type * as LType from 'leaflet';

@Component({
  selector: 'app-saudi-map',
  template: `<div #mapContainer class="w-full h-[400px] rounded-3xl overflow-hidden border border-emerald-100 shadow-lg shadow-emerald-900/5 relative z-0"></div>`,
  styles: []
})
export class SaudiMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  private map: LType.Map | undefined;
  private platformId = inject(PLATFORM_ID);

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      await this.initMap();
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  private async initMap() {
    const L = await import('leaflet');
    
    // Center map around Saudi Arabia
    const saudiCoords: [number, number] = [23.8859, 45.0792]; 
    
    this.map = L.map(this.mapContainer.nativeElement, {
      zoomControl: false,
      scrollWheelZoom: false
    }).setView(saudiCoords, 5);

    L.control.zoom({
      position: 'bottomleft'
    }).addTo(this.map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(this.map);

    // NEOM
    L.circleMarker([28.0833, 34.9167], {
      color: '#0ea5e9',
      radius: 12,
      fillColor: '#38bdf8',
      fillOpacity: 0.9,
      weight: 3
    }).addTo(this.map).bindPopup('<div class="text-right p-1" dir="rtl"><b class="text-sky-700 text-base">نيوم (NEOM)</b><p class="text-xs text-slate-500 mt-1 leading-relaxed">المستقبل الجديد وطموح رؤية 2030 لمدينة ذكية مستدامة تعتمد على الطاقة النظيفة.</p></div>');

    // The Red Sea Project
    L.circleMarker([25.5, 37.0], {
      color: '#f43f5e',
      radius: 12,
      fillColor: '#fb7185',
      fillOpacity: 0.9,
      weight: 3
    }).addTo(this.map).bindPopup('<div class="text-right p-1" dir="rtl"><b class="text-rose-700 text-base">مشروع البحر الأحمر</b><p class="text-xs text-slate-500 mt-1 leading-relaxed">أكثر الوجهات السياحية المتجددة طموحاً في العالم، تجمع قوى الطبيعة مع الفخامة.</p></div>');

    // Qiddiya
    L.circleMarker([24.5861, 46.2942], {
      color: '#8b5cf6',
      radius: 12,
      fillColor: '#a78bfa',
      fillOpacity: 0.9,
      weight: 3
    }).addTo(this.map).bindPopup('<div class="text-right p-1" dir="rtl"><b class="text-violet-700 text-base">القدية (Qiddiya)</b><p class="text-xs text-slate-500 mt-1 leading-relaxed">عاصمة الترفيه والرياضة والفنون لتعزيز جودة الحياة.</p></div>');
    
    // Riyadh
    L.circleMarker([24.7136, 46.6753], {
      color: '#10b981',
      radius: 8,
      fillColor: '#34d399',
      fillOpacity: 0.9,
      weight: 3
    }).addTo(this.map).bindPopup('<div class="text-right p-1" dir="rtl"><b class="text-emerald-700 text-base">الرياض</b><p class="text-xs text-slate-500 mt-1 leading-relaxed">العاصمة والمركز الاقتصادي النابض للمملكة.</p></div>');
  }
}
