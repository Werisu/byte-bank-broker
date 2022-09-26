import { Subscription, merge } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  public acoesInput = new FormControl();
  public todasAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {
      console.log('Fluxo inicial');
    })
  );
  public filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => {
      console.log('Fluxo do filtro');
    }),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  public acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
