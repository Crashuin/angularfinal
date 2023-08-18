import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  notasForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _notasService: NotasserviceService,
    private _dialogRef: MatDialogRef<NotasAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService

  ){

    this.notasForm = this._fb.group({
      titulo:'',
      contenido: '',
      fechaCreacion: '',
      prioridad: '',
      estado: ''

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
            this._coreService.openSnackBar('Empleado actualizado exitosamente', 'done')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
        
      } else {
        this._notasService.addNotas(this.notasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Empleado añadido exitosamente', 'done')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      }        
    }
  }

 


}
