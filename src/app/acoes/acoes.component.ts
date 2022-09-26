import { AcoesService } from './acoes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from "./modelo/acoes";

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  public acoesInput = new FormControl();
  public acoes: Acoes;

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {
    this.acoesService.getAcoes().subscribe({
      next: retornoApi => {
        this.acoes = retornoApi.payload
      }
    })
  }
}