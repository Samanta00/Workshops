import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { AtaDTO } from '../../../models/AtaDTO.model';
import { AtaApiService } from '../../../services/ata.api.service';
import { WorkshopService } from '../../../services/workshop.service';
import { ColaboradorService } from '../../../services/colaborador.service';
import { CriarColaboradorModalComponent } from '../../modal-colaborador/criar-colaborador-modal.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-atas-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CriarColaboradorModalComponent
  ],
  templateUrl: './atas-list.component.html',
  styleUrls: ['./atas-list.component.css']
})

export class AtasListComponent implements OnInit {

  // ======================
  // LISTAGEM
  // ======================
  atas$!: Observable<AtaDTO[]>;

  // ======================
  // FORMULÁRIO (Workshop)
  // ======================
  nome = '';
  dataRealizacao = '';
  descricao = '';

  // IDs gerados
  workshopIdCriado!: number;
  colaboradorIdCriado!: number;
  ataIdCriada!: number;

  // modal
  mostrarModalColaborador = false;

  // formulário colaborador
  nomeColaborador = '';

  // filtros
  filtroColaborador = '';
  filtroWorkshop = '';
  filtroData = '';



  constructor(
    private ataApiService: AtaApiService,
    private workshopService: WorkshopService,
    private colaboradorService: ColaboradorService,
    private cdr: ChangeDetectorRef 

  ) {}

  ngOnInit(): void {
    this.carregarAtas();
  }

  // ======================
  // BUSCAR ATAS
  // GET /api/atas
  // ======================
  carregarAtas(): void {
    this.atas$ = this.ataApiService.listarAtas();
  }

  // ======================
  // CRIAR WORKSHOP
  // POST /api/workshops
  // ======================
  enviar(): void {
    const payload = {
      nome: this.nome,
      dataRealizacao: `${this.dataRealizacao}T00:00:00`,
      descricao: this.descricao
    };
    console.log('está chegando aqui')
    console.log('retorno de payload', payload)
  
    this.workshopService.criarWorkshop(payload).subscribe({
      next: (res) => {
        this.workshopIdCriado = res.id; 
        this.mostrarModalColaborador = true; 
        this.cdr.detectChanges(); 
        this.limparFormulario();
      },
      error: err => console.error(err)
    });
  }
  
  

  limparFormulario(): void {
    this.nome = '';
    this.dataRealizacao = '';
    this.descricao = '';
  }

  // ======================
  // REMOVER COLABORADOR
  // DELETE /api/atas/{id}/colaboradores/{id}
  // ======================
  removerColaborador(colaboradorId: number): void {
    if (!confirm('Deseja realmente remover este colaborador da ata?')) return;
  
    this.ataApiService.listarAtas().subscribe(atas => {
      const ata = atas.find(a => a.idColaborador === colaboradorId);
      if (!ata) return alert('Não foi possível encontrar a ata');
  
      this.ataApiService.removerColaboradorDaAta(ata.idColaborador, colaboradorId)
        .subscribe(() => {
          alert('Colaborador removido com sucesso!');
          this.carregarAtas(); 
          this.cdr.detectChanges(); 
        });
    });
  }
  
  
  fecharModal(): void {
    this.nomeColaborador = '';
    this.limparFormulario();
  }
  
  criarColaborador(): void {
    if (!this.nomeColaborador) {
      alert('Informe o nome do colaborador');
      return;
    }
  
    this.colaboradorService.criarColaborador({
      nome: this.nomeColaborador
    }).subscribe({
      next: () => {
        this.fecharModal();
        this.carregarAtas();
      },
      error: (err) => {
        console.error('Erro ao criar colaborador', err);
        alert('Erro ao criar colaborador');
      }
    });
  }




//   atasCompletas: AtaDTO[] = [];
// atas$!: Observable<AtaDTO[]>;

// ngOnInit(): void {
//   this.carregarAtas();
// }

// // ======================
// // BUSCAR ATAS
// // ======================
// carregarAtas(): void {
//   this.ataApiService.listarAtas().subscribe({
//     next: (atas) => {
//       this.atasCompletas = atas;
//       this.aplicarFiltros();
//     },
//     error: (err) => console.error(err)
//   });
// }

// // ======================
// // FILTROS
// // ======================
// aplicarFiltros(): void {
//   let filtradas = [...this.atasCompletas];

//   // filtro por colaborador
//   if (this.filtroColaborador.trim()) {
//     const colab = this.filtroColaborador.toLowerCase();
//     filtradas = filtradas.filter(a =>
//       a.nomeColaborador.toLowerCase().includes(colab)
//     );
//   }

//   // filtro por workshop
//   if (this.filtroWorkshop.trim()) {
//     const ws = this.filtroWorkshop.toLowerCase();
//     filtradas = filtradas.filter(a =>
//       a.nomeWorkshop.toLowerCase().includes(ws)
//     );
//   }

//   // filtro por data
//   if (this.filtroData) {
//     filtradas = filtradas.filter(a =>
//       a.dataWorkshop.startsWith(this.filtroData)
//     );
//   }

//   // ordem alfabética pelo nome do colaborador
//   filtradas.sort((a, b) =>
//     a.nomeColaborador.localeCompare(b.nomeColaborador)
//   );

//   // atualiza o observable para o template
//   this.atas$ = of(filtradas);
// }
  
}
