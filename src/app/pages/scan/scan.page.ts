import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DatalocalService } from 'src/app/services/datalocal.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {


  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocal: DatalocalService) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(data =>{
      if(!data.cancelled)
        this.dataLocal.guardar(data.format, data.text)
    })
    .catch(err => {
      this.dataLocal.guardar('QRCode', 'geo: -47.5, 50')
    })
  }
}
