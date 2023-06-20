const host = 'http://api.olhovivo.sptrans.com.br/v2.1/';
export default new class SPTRANS_VAR {

    TOKEN_SPTRANS() {
        return '34dda532b32232e27d9f3e987b43d9e60056e20f39759b5e39d52ae2a83c4254';
    }

    AUTH_SPTRANS() {
        return `${host}Login/Autenticar?token=${this.TOKEN_SPTRANS()}`;
    }

    LINE_BUS_SPTRANS(codLine: string) {
        return `${host}Linha/Buscar?termosBusca=${codLine}`;
    }

    STOP_BUS_SPTRANS(codStop: string) {
        return `${host}Parada/Buscar?termosBusca=${codStop}`;
    }

    STOP_BUS_LINE_SPTRANS(codLine: string) {
        return `${host}Parada/BuscarParadasPorLinha?codigoLinha=${codLine}`;
    }

    SENSE_LINE_BUS_SPTRANS(codLine: string, sense: string) {
        return `${host}Linha/BuscarLinhaSentido?termosBusca=${codLine}&sentido=${sense}`;
    }

    CORRIDOR_STOP_SEARCH_BUS_SPTRANS(codCorridor: string) {
        return `${host}Parada/BuscarParadasPorCorredor?codigoCorredor=${codCorridor}`;
    }

    CORRIDOR_SPTRANS(){
        return `${host}Corredor`;
    }

    ENTERPRISE_SPTRANS(){
        return `${host}Empresa`;
    }

    POSITION_SPTRANS(){
        return `${host}Posicao`;
    }

    POSITION_LINE_SPTRANS(position: string){
        return `${host}Posicao/Linha?codigoLinha=${position}`;
    }

    FORECAST_STOP_LINE(codStop: string, codLine: string){
        return `${host}Previsao?codigoParada=${codStop}&codigoLinha=${codLine}`;
    }

    FORECAST_LINE(codLine: string){
        return `${host}Previsao/Linha?codigoLinha=${codLine}`;
    }
}