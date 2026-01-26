import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Workshop } from '../models/workshop.model';
import { WorkshopCreateDTO } from '../models/WorkshopCreateDTO.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  private readonly API = 'https://localhost:8443/api/workshops';

  constructor(private http: HttpClient) {}

  criarWorkshop(
    workshop: WorkshopCreateDTO
  ): Observable<Workshop> {
    return this.http.post<Workshop>(this.API, workshop);
  }

  // PUT /api/workshops/{workshopId}/atas/{ataId}/colaboradores/{colaboradorId}
  vincularColaborador(
    workshopId: number,
    ataId: number,
    colaboradorId: number
  ) {
    return this.http.put<void>(
      `${this.API}/${workshopId}/atas/${ataId}/colaboradores/${colaboradorId}`,
      {}
    );
  }
}
