import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type * as LType from 'leaflet';

@Component({
  selector: 'app-neom-map',
  template: `<div #mapContainer class="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-slate-200 mb-4 z-10"></div>`,
  styles: []
})
export class NeomMapComponent implements AfterViewInit, OnDestroy {
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
    const neomCoords: [number, number] = [28.0833, 34.9167]; // Approximate coords for NEOM
    this.map = L.map(this.mapContainer.nativeElement).setView(neomCoords, 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // The Line
    L.circleMarker([28.1, 34.8], {
      color: '#c2410c',
      radius: 8,
      fillColor: '#f97316',
      fillOpacity: 0.8
    }).addTo(this.map).bindPopup('<b>ذا لاين (The Line)</b><br>مدينة خطية ذكية تعتمد بالكامل على الطاقة المتجددة.');

    // Oxagon
    L.circleMarker([27.8, 35.2], {
      color: '#1d4ed8',
      radius: 8,
      fillColor: '#3b82f6',
      fillOpacity: 0.8
    }).addTo(this.map).bindPopup('<b>أوكساجون (Oxagon)</b><br>المدينة الصناعية العائمة وأكبر هيكل عائم في العالم.');

    // Trojena
    L.circleMarker([28.7, 35.4], {
      color: '#047857',
      radius: 8,
      fillColor: '#10b981',
      fillOpacity: 0.8
    }).addTo(this.map).bindPopup('<b>تروجينا (Trojena)</b><br>وجهة للسياحة الجبلية الاستثنائية بفضل طبيعتها الخلابة.');
  }
}
