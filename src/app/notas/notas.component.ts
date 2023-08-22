import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NotasserviceService } from '../services/notasservice.service';
import { CoreService } from '../core/core.service';
import { NotasAddEditComponent } from '../notas-add-edit/notas-add-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {
  
  displayedColumns: string[] = [
    //'id',
    'contenido',
    // 'fechaCreacion',
    // 'prioridad',
    // 'estado',
    //'action'
    
  ];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _notasService: NotasserviceService,
    private _coreService: CoreService,
    private router: Router  ){}

    ngOnInit(): void {
      this.getNotasList();
    }

    openAddEditNotasForm() {
      const dialogRef = this._dialog.open(NotasAddEditComponent);
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getNotasList();
          }
        }
      })
    }

    getNotasList() {
      this._notasService.getNotasList().subscribe({
        next:(res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;     
        },
        error: 
          console.log
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    deleteNotas(id: number) {
      this._notasService.deleteNotas(id).subscribe({
        next:(res) => {
          
          this._coreService.openSnackBar('Nota eliminada correctamente', 'Hecho');
          this.getNotasList();  
        },
        error: console.log,
      })
    }

    openEditForm(data: any) {
      const dialogRef = this._dialog.open(NotasAddEditComponent, {
        data, 
      });
  
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getNotasList();
          }
        }
      })
    }

    navigateToLogin() {
      this.router.navigate(['/login']);
    }

}
