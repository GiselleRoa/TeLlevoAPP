import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nombreSource = new BehaviorSubject<string>('');
  nombreActual = this.nombreSource.asObservable();

  cambiarNombre(nombre: string){
    this.nombreSource.next(nombre);
  }
}
