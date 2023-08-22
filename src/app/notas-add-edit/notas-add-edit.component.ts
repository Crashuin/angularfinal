import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotasserviceService } from '../services/notasservice.service';
import { CoreService } from '../core/core.service';



@Component({
  selector: 'app-notas-add-edit',
  templateUrl: './notas-add-edit.component.html',
  styleUrls: ['./notas-add-edit.component.css']
})
export class NotasAddEditComponent implements OnInit {

  prioridadOpciones: string[] = [
    'Alta',
    'Media',
    'Baja'
  ];

  estadoOpciones: string[] = [
    'Completado',
    'No completado',
    'Pendiente'
  ];


  notasForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _notasService: NotasserviceService,
    private _dialogRef: MatDialogRef<NotasAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

  ){

    this.notasForm = this._fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      fechaLimite: ['', Validators.required],
      prioridad: ['', Validators.required],
      estado: ['', Validators.required]

    })

  }

  ngOnInit(): void {
    this.notasForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.notasForm.valid) {

      if (this.data) {
        this._notasService.updateNotas(this.data.id, this.notasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Nota actualizada exitosamente', 'Hecho')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
        
      } else {
        this._notasService.addNotas(this.notasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Nota añadida exitosamente', 'Hecho')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      }        
    }
  }

  //Form Control para validación del formulario

  get titulo() {
    return this.notasForm.get('titulo') as FormControl;
  }

  get contenido() {
    return this.notasForm.get('contenido') as FormControl;
  }

  get fechaLimite() {
    return this.notasForm.get('fechaLimite') as FormControl;
  }

  get prioridad() {
    return this.notasForm.get('prioridad') as FormControl;
  }
  
  get estado(){
    return this.notasForm.get('estado') as FormControl;
  }

}
