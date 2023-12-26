import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      apellidos: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      nombreUsuario: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  registrar() {
    if (this.registroForm.valid) {
      this.procesarRegistro(this.registroForm.value);
    } else {
      // Manejo de errores del formulario, por ejemplo, mostrar mensajes de error
      console.log('Formulario inválido. Por favor, completa correctamente todos los campos.');
    }
  }

  procesarRegistro(datosRegistro: any) {
    // Lógica para registrar al usuario, como enviar los datos al backend
    console.log('Datos de registro:', datosRegistro);
  }
}