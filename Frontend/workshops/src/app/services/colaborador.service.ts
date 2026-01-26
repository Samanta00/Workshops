import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ColaboradorService {

  private baseUrl = 'https://localhost:8443/api/colaboradores';

  constructor(private http: HttpClient) {}

  // Criar colaborador (apenas envia { nome })
  criarColaborador(payload: { nome: string }) {
    return this.http.post<{ id: number }>(
      this.baseUrl,
      payload
    );
  }
}
