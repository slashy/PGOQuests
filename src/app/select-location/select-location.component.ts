import {Component, NgZone, OnInit} from '@angular/core';
import {Map, latLng, point, tileLayer, marker, icon, LatLng} from 'leaflet';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {
  geolocation: LatLng = latLng([50.737286, 7.098111]);
  markerlocation: LatLng = latLng([50.737286, 7.098111]);
  options = {
    layers: [
      tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true,
      }),
    ],
    zoom: 17,
  };

  layer = marker([50.737286, 7.098111], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
    }),
  });

  constructor(private zone: NgZone) {

  }

  onMapReady(map: Map) {
    map.on('moveend', () => {
      this.zone.run(() => {
        this.updateMarker(map.getCenter());
      });
    });

    map.on('move', () => {
      this.zone.run(() => {
        this.updateMarker(map.getCenter());
      });
    });
  }

  updateMarker(pos: LatLng) {
    this.markerlocation = pos;
    this.layer = marker(this.markerlocation, {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png',
      }),
    });
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this.geolocation = latLng(
          [location.coords.latitude, location.coords.longitude]);
        this.updateMarker(this.geolocation);
      });
    }
  }
}
