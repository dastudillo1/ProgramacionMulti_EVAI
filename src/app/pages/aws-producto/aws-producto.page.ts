import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aws-producto',
  templateUrl: './aws-producto.page.html',
  styleUrls: ['./aws-producto.page.scss'],
})
export class AwsProductoPage implements OnInit {

  nombre:string="";
  descripcion:string="";
  precio:string="";
  proveedor:string="";
  categoria:string="";

  constructor(private service:AwsApigatewayService, private toastController:ToastController) { }

  ngOnInit() {
    this,this.service.getProducto().forEach((d:any)=>{
      console.log(d.body);
    })
  }

  postProducto(){
    this.service.postProducto(this.nombre, this.descripcion,this.precio,this.proveedor,this.categoria).subscribe(async (data)=>{
          
      console.log(data);

      const toast = await this.toastController.create({
        message: 'Producto creado correctamente',
        duration: 2000,
        position: 'top'
      });

      toast.present();

      this.nombre="";
      this.descripcion="";
      this.precio="";
      this.proveedor="";  
      this.categoria="";      
    })
  }
}  

