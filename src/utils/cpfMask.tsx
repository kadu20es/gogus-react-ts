export const cpfmask = (cpf: string) => {
    cpf = cpf.replace(/\D/g,"")

    cpf = cpf.slice(0, 11)

    if (cpf.length >= 4) {
        cpf = cpf.slice(0,3) + "." + cpf.slice(3)
    }
    if (cpf.length >= 8) {
        cpf = cpf.slice(0,7) + "." + cpf.slice(7)
    }
    if (cpf.length >= 12) {
        cpf = cpf.slice(0,11) + "-" + cpf.slice(11)
    }

    return cpf
}

export const cnpjMask = (cnpj: string) => {
    cnpj = cnpj.replace(/\D/g,"")

    cnpj = cnpj.slice(0,14)

    if (cnpj.length >= 3) {
        cnpj = cnpj.slice(0,2) + "." + cnpj.slice(2)
    }
    if (cnpj.length >= 7) {
        cnpj = cnpj.slice(0,6) + "." + cnpj.slice(6)
    }
    if (cnpj.length >= 11) {
        cnpj = cnpj.slice(0,10) + "/" + cnpj.slice(10)
    }

    if (cnpj.length >= 16) {
        cnpj = cnpj.slice(0,15) + "-" + cnpj.slice(15)
    }
    if (cnpj.length >= 19) {
        cnpj = cnpj.slice(0,18) + "-" + cnpj.slice(18)
    }

    return cnpj
}