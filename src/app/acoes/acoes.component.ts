import { Subscription } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from "./modelo/acoes";

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  public acoesInput = new FormControl();
  public acoes$ = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
