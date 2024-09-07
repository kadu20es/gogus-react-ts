import { z } from "zod"

export const createUserFormSchema = z.object({
    pessoaJuridica: z.object({
        nm_fantasia: z.string()
            .min(10, "Nome fantasia é um dado obrigatório."),

        rz_social: z.string()
            .min(10, "Razão Social é um dado obrigatório."),

        cnpj: z.string()
            .min(14, "CNPJ é um dado obrigatório."),

        ie: z.string()
            .min(9, "Inscrição Estadual é um dado obrigatório."),

        email: z.string()
            .email("Formato de e-mail inválido")
            .toLowerCase(),

        contato: z.string(),

        status: z.enum(['ativo','inativo']),
        }),

        pessoaFisica: z.object({
            nome: z.string(),

            dataNasc: z.date(),

            nacionalidade: z.string(),

            sexo: z.enum(['feminino','masculino']),

            genero: z.enum(['homem','mulher','não binário']),

            cor: z.enum(['amarela','branca','indígena','parda','preta']),

            estado_civil: z.enum(['casado','solteiro','viúvo','união estável']),

            nome_conjuge: z.string(),

            dependente: z.enum(['sim','não']),

            nome_dependente: z.string(),

            escolaridade: z.enum(['ensino fundamento', 'ensino médio', 'ensino superior', 'pós graduação', 'mestrado', 'doutorado']),

            formação: z.string(),

            cpf: z.string(),

            rg: z.string(),

            email: z.string()
            .email("Formato de e-mail inválido")
            .toLowerCase(),
        }),

    endereco: z.object({
        logradouro: z.string(),

        numero: z.string(),

        cep: z.string(),

        bairro: z.string(),

        municipio: z.string(),

        uf: z.string(),

        complemento: z.string(),
    })


})



