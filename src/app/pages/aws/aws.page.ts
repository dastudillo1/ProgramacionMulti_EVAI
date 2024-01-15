import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.page.html',
  styleUrls: ['./aws.page.scss'],
})
export class AwsPage implements OnInit {

  nombre:string="";
  email:string="";
  apellido:string="";
  usuario:string="";
  direccion:string="";

  constructor(private service:AwsApigatewayService, private toastController:ToastController) { }

  ngOnInit() {
    this,this.service.getUsers().forEach((d:any)=>{
      console.log(d.body);
    })
  }

  postUser(){
    this.service.postUser(this.nombre, this.email,this.apellido,this.direccion,this.usuario).subscribe(async (data)=>{
      console.log(data);

      const toast = await this.toastController.create({
        message: 'Usuario creado correctamente',
        duration: 2000,
        position: 'top'
      });

      toast.present();

      this.nombre="";
      this.email="";
      this.apellido="";
      this.direccion="";  
      this.usuario="";
    })
  }
}
