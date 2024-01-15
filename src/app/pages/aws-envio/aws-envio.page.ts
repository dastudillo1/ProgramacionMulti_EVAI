import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aws-envio',
  templateUrl: './aws-envio.page.html',
  styleUrls: ['./aws-envio.page.scss'],
})
export class AwsEnvioPage implements OnInit {

  fechaenvio:string="";
  cliente:string="";
  destino:string="";
  tipoenvio:string="";
  estadoenvio:string="";
  nroseguimiento:string="";

  constructor(private service:AwsApigatewayService, private toastController:ToastController) { }

  ngOnInit() {
    this,this.service.getEnvio().forEach((d:any)=>{
      console.log(d.body);
    })
  }

  postEnvio(){
    this.service.postEnvio(this.fechaenvio, this.cliente,this.destino,this.tipoenvio,this.estadoenvio,this.nroseguimiento).subscribe(async (data)=>{
      //this.service.postEnvio("1","1","1","1","1","1").subscribe(async (data)=>{
      console.log(data);

      const toast = await this.toastController.create({
        message: 'Envío creado correctamente',
        duration: 2000,
        position: 'top'
      });

      toast.present();

      this.fechaenvio="";
      this.cliente="";
      this.destino="";
      this.tipoenvio="";  
      this.estadoenvio="";
      this.nroseguimiento="";
    })
  }
}  
