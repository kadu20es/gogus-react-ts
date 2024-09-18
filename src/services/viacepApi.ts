import axios from "axios";

//const addr: string = 'http://viacep.com.br'

//const viacep = fetch()
const viacep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

/*
    Dados fornecidos:

    bairro
    cep
    complemento
    ddd
    estado
    gia
    ibge
    localidade
    logradouro
    regiao
    siafi
    uf
    unidade

*/

export default viacep