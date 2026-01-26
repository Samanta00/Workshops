import { FormsModule } from '@angular/forms';
import { AtasRoutingModule } from './atas-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AtasRoutingModule
    ]
  })
  export class AtasModule {}
  