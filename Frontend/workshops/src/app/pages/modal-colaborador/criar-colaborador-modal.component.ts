import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColaboradorService } from '../../services/colaborador.service';
import { AtaApiService } from '../../services/ata.api.service';
import { WorkshopService } from '../../services/workshop.service';

@Component({
  selector: 'app-criar-colaborador-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-colaborador-modal.component.html',
  styleUrls: ['./criar-colaborador-modal.component.css']
})
export class CriarColaboradorModalComponent implements OnInit {

  @Input() workshopId!: number; 
  @Output() fechado = new EventEmitter<void>(); 

  nomeColaborador = '';
  carregando = false;

  constructor(
    private colaboradorService: ColaboradorService,
    private ataService: AtaApiService,
    private workshopService: WorkshopService
  ) {}

  ngOnInit(): void {
    console.log('Modal aberto para workshopId:', this.workshopId);
  }

  // Fechar modal
  fechar(): void {
    this.fechado.emit();
  }

  // Salvar colaborador → criar ata → vincular tudo
  salvar(): void {
    if (!this.nomeColaborador.trim()) return;
  
    this.carregando = true;
  
    this.colaboradorService.criarColaborador({ nome: this.nomeColaborador }).subscribe({
      next: colaborador => {
        const colaboradorId = colaborador.id; 
  
        this.ataService.criarAtaParaWorkshop(this.workshopId).subscribe({
          next: ata => {
            const ataId = ata.id; 
  
            this.workshopService.vincularColaborador(this.workshopId, ataId, colaboradorId).subscribe({
              next: () => {
                alert('Colaborador vinculado com sucesso!');
                this.carregando = false;
                this.fechado.emit(); 
              },
              error: err => {
                console.error('Erro ao vincular colaborador à ata', err);
                alert('Erro ao vincular colaborador à ata');
                this.carregando = false;
              }
            });
  
          },
          error: err => {
            console.error('Erro ao criar ata', err);
            alert('Erro ao criar ata');
            this.carregando = false;
          }
        });
  
      },
      error: err => {
        console.error('Erro ao criar colaborador', err);
        alert('Erro ao criar colaborador');
        this.carregando = false;
      }
    });
  }
  
}
