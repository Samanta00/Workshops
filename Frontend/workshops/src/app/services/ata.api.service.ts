import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ata } from '../models/ata.model';
import { Workshop } from '../models/workshop.model';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class AtaApiService {

  private readonly API = 'https://localhost:8443/api';

  constructor(private http: HttpClient) {}

  // POST /api/workshops
  criarWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>(
      `${this.API}/workshops`,
      workshop
    );
  }

  // POST /api/colaboradores
  criarColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(
      `${this.API}/colaboradores`,
      colaborador
    );
  }

  // POST /api/atas
  criarAta(workshopId: number): Observable<Ata> {
    return this.http.post<Ata>(
      `${this.API}/atas`,
      { workshopId }
    );
  }

  // PUT /api/workshops/{id}/atas/{id}
  adicionarColaboradorNaAta(
    workshopId: number,
    colaboradorId: number
  ): Observable<void> {
    return this.http.put<void>(
      `${this.API}/workshops/${workshopId}/atas/${colaboradorId}`,
      {}
    );
  }

  // DELETE /api/atas/{id}/colaboradores/{id}
  removerColaboradorDaAta(
    ataId: number,
    colaboradorId: number
  ): Observable<void> {
    return this.http.delete<void>(
      `${this.API}/atas/${ataId}/colaboradores/${colaboradorId}`
    );
  }

  // GET /api/atas 
  listarAtas() {
    return this.http.get<any[]>(`${this.API}/atas`,);
  }

  
}
