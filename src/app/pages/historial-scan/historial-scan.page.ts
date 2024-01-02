import { Component, OnInit } from '@angular/core';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
})
export class HistorialScanPage implements OnInit {

  constructor(public service:DatalocalService) { }

  ngOnInit() {
  }

  abrir(registro: any){
    console.log('Registro',registro);
    this.service.abrir(registro)
  }

}
