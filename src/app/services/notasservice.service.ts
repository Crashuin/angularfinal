import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasserviceService {

  constructor(private _http: HttpClient) { }

  addNotas(data: any): Observable<any> {
    return this._http.post( 'http://localhost:3000/notas', data);
  }

  updateNotas(id: number, data: any): Observable<any> {
    return this._http.put( 'http://localhost:3000/notas/'+id, data);
  }

  getNotasList(): Observable<any> {
    return this._http.get( 'http://localhost:3000/notas');
  }

  deleteNotas(id: number): Observable<any>{
    return this._http.delete('http://localhost:3000/notas/'+id);
  }



}
