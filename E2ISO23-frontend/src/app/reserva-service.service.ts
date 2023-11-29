import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaServiceService {
  private idReserva = new BehaviorSubject<string | null>(null);
  idReserva$ = this.idReserva.asObservable();

  actualizarIdReserva(id: string): void {
    this.idReserva.next(id);
  }
}
