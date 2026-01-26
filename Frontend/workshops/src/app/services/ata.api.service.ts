import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ata } from '../models/ata.model';

@Injectable({
  providedIn: 'root'
})
export class AtaApiService {

  private readonly API = 'https://localhost:8443/api';

  constructor(private http: HttpClient) {}

  // ======================
  // POST /api/atas
  // ======================
  criarAta(): Observable<Ata> {
    return this.http.post<Ata>(`${this.API}/atas`, {});
  }

    // services/ata.api.service.ts
  criarAtaParaWorkshop(workshopId: number) {
    // chama a rota GET /api/atas?workshopId=id
    return this.http.post<{ id: number, nome?: string }>(`${this.API}/atas?workshopId=${workshopId}`, {});
  }


  // ======================
  // DELETE /api/atas/{id}/colaboradores/{id}
  // ======================
  removerColaboradorDaAta(
    ataId: number,
    colaboradorId: number
  ): Observable<void> {
    return this.http.delete<void>(
      `${this.API}/atas/${ataId}/colaboradores/${colaboradorId}`
    );
  }

  // ======================
  // GET /api/atas
  // ======================
  listarAtas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/atas`);
  }

  // ======================
  // POST /api/{workshopId}/atas/{ataId}/colaboradores/{colaboradorId}
  // ======================
  associarColaborador(
    workshopId: number,
    ataId: number,
    colaboradorId: number
  ): Observable<void> {
    return this.http.post<void>(
      `${this.API}/${workshopId}/atas/${ataId}/colaboradores/${colaboradorId}`,
      {}
    );
  }
}
