export interface ItensDocComercial {
  idItemDocumento: number;
  idDocumento: number;
  idUnidadeMedProd: number;
  idOperacaoInterna: number;
  idSafra?: any;
  codigoOperacaoInterna: string;
  descricaoSafra: string;
  produto?: any;
}

export interface Produto {
  idProduto: number;
  codigoProduto: number;
  descricaoProduto: string;
  classeProduto: number;
  categoriaProduto: string;
}

export interface RootObject {
  itensDocComercial: ItensDocComercial[];
  numeroDocumento: number;
  parceiro: string;
  local: string;
  idDocumentoComercial: number;
  operacaoInternaDocumento: string;
  produtos: Produto[];
}

export type ItemToShow = ItensDocComercial & Produto;
