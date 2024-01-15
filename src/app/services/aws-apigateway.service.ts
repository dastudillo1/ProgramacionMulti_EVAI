import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {
    urlCliente:string = 'https://28rdiusaec.execute-api.us-east-2.amazonaws.com/cliente-deploy';
    urlProducto:string = 'https://6v1e25blek.execute-api.us-east-2.amazonaws.com/producto-deploy';
    urlEnvio:string = 'https://z1ddpwljwc.execute-api.us-east-2.amazonaws.com/envio-deploy';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.urlCliente);
  }
  
  postUser(nombre:string, email:string,apellido:string,direccion:string,usuario:string){
    var body={nombre:nombre, email:email, apellido:apellido, direccion:direccion,usuario:usuario}
    return this.http.post(this.urlCliente, body)
  }

  getEnvio(){
    return this.http.get(this.urlEnvio);
  }
  
  postEnvio(fechaenvio:string, cliente:string,destino:string,tipoenvio:string,estadoenvio:string,nroseguimiento:string){
    var body={fechaenvio:fechaenvio, cliente:cliente, destino:destino, tipoenvio:tipoenvio,estadoenvio:estadoenvio,nroseguimiento:nroseguimiento}
    return this.http.post(this.urlEnvio, body)
  }  

  getProducto(){
    return this.http.get(this.urlProducto);
  }
  
  postProducto(nombre:string, descripcion:string,precio:string,proveedor:string,categoria:string){
    var body={nombre:nombre, descripcion:descripcion, precio:precio, proveedor:proveedor,categoria:categoria}
    return this.http.post(this.urlProducto, body)
  }    
}