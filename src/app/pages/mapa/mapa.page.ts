import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  lat: number = -74.5;
  lng: number = 40;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');
    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);
  }

  ngAfterViewInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoiZGFzdHVkaWxsbyIsImEiOiJjbHFvNDZ1ODkzbmlpMmpwYXRqcGRsYzhoIn0.dOIZq3Nt_pe42FdaJnDwIw';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.lat, this.lng],
      zoom: 9
      /*pitch: 45,
      bearing: -17.6,
      antialias: true*/
    });
  }
}