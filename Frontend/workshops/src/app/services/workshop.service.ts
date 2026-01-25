import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  export class WorkshopService {
  
    private apiUrl = 'https://localhost:8443/api/workshops';
  
    constructor(private http: HttpClient) {}
  
    criarWorkshop(workshop: any) {
      return this.http.post(this.apiUrl, workshop);
    }
  }
  