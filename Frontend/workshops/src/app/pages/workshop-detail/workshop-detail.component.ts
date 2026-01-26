import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { AtaApiService } from '../../services/ata.api.service';
import { Workshop } from '../../models/workshop.model';
import { Ata } from '../../models/ata.model';

@Component({
  selector: 'app-workshop-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class WorkshopDetailComponent implements OnInit {

  workshop?: Workshop;
  ataId?: number;

  constructor(
    private ataApiService: AtaApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const workshopId = Number(this.route.snapshot.paramMap.get('id'));

    if (!workshopId) {
      return;
    }

    this.ataApiService.listarAtas().subscribe({
      next: (atas: Ata[]) => {
        const ata = atas.find(a => a.workshop?.id === workshopId);

        if (ata) {
          this.workshop = ata.workshop;
          this.ataId = ata.id;
        }
      },
      error: err => console.error('Erro ao carregar ata', err)
    });
  }

  removerColaborador(colaboradorId: number): void {
    if (!this.ataId || !this.workshop) {
      return;
    }

    this.ataApiService
      .removerColaboradorDaAta(this.ataId, colaboradorId)
      .subscribe({
        next: () => {
          this.workshop!.colaboradores =
            this.workshop!.colaboradores.filter(c => c.id !== colaboradorId);
        },
        error: err => console.error('Erro ao remover colaborador', err)
      });
  }
}
