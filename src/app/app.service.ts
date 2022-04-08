import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RootObject } from './root-object.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getpiResponse(): Observable<RootObject> {
    return of(
      JSON.parse(`{
        "itensDocComercial":[
           {
              "idItemDocumento":121910,
              "idDocumento":86321,
              "idUnidadeMedProd":5258,
              "idOperacaoInterna":89,
              "idSafra":null,
              "codigoOperacaoInterna":"2.104",
              "descricaoSafra":"Não possui safra no BD. idSafra = null",
              "produto":null
           },
           {
              "idItemDocumento":121909,
              "idDocumento":86321,
              "idUnidadeMedProd":5691,
              "idOperacaoInterna":89,
              "idSafra":null,
              "codigoOperacaoInterna":"2.104",
              "descricaoSafra":"Não possui safra no BD. idSafra = null",
              "produto":null
           }
        ],
        "numeroDocumento":69934,
        "parceiro":"VALCIR CAETANO",
        "local":"FAZENDA VERDE PRADO, PALMEIRA, CEDRO E CACHOEIRA E CATINGUEIRO",
        "idDocumentoComercial":86321,
        "operacaoInternaDocumento":"2.104",
        "produtos":[
           {
              "idProduto":6262,
              "codigoProduto":5796,
              "descricaoProduto":"PNEU 380/90R46 ULTRA SPRAYER 173D TL R1",
              "classeProduto":45,
              "categoriaProduto":"PNEUMATICOS E CAMARAS DE AR"
           },
           {
              "idProduto":6800,
              "codigoProduto":6221,
              "descricaoProduto":"PNEU 12.4X24 SUPREME TFC 10L TL R1",
              "classeProduto":45,
              "categoriaProduto":"PNEUMATICOS E CAMARAS DE AR"
           }
        ]
     }`)
    );
  }
}
