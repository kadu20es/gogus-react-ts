# INSERÇÃO DE MÁSCARA DE CNPJ E CPF PARA FORMULÁRIOS:

Altera o dado exibido em tela no input do formulário de acordo com o padrão de cnpj ou cpf:
CNPJ: 00.000.000/0000-00
CPF: 000.000.000-00

1. Defina os padrões de acordo com a opção desejada:

```typescript
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
```

2. Tenha os objetos que serão validados no form definidos com o tipo z.object:

```typescript
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
        [...]
        }),

        [...]
```

3. Insira no objeto "useForm" as funções watch e setValue e ative para o useForm as propriedades "mode" e "criteriaMode" para "all":

```typescript
const {
        register,
        handleSubmit,
        trigger,
        formState: {errors},
        control,
        watch, // observa o campo no form
        setValue // altera o campo no form
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
        mode: "all", // ativa as propriedades "onChange", "onBlur", "onSubmit" e "onTouch" do input
        criteriaMode: "all",
        defaultValues: {
            pessoaJuridica: {
                nm_fantasia: "",
                rz_social: "",
                cnpj: "",
                ie: "",
                email: "",
                contato: "",
                status: "ativo"
            }

        }
    })
```

4. Crie a constante que irá receber os dados do input pelo watch e utilize um hook useEffect para alterar o campo do input de acordo com a digitação:

```typescript
const cnpjValue: string = watch("pessoaJuridica.cnpj")

useEffect(() => {
    setValue("pessoaJuridica.cnpj", cnpjMask(cnpjValue))
},[cnpjValue, setValue])
```

5. O input deve estar configurado para validações pelo Zod:

```jsx
<div className='flex flex-col gap-1'>
    <label
        htmlFor="cnpj"
        className="ml-4 text-slate-700 font-medium">CNPJ:</label>
    <input
        type="text"
        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
        placeholder="00.000.000/0000-00"
        {...register('pessoaJuridica.cnpj')}/>
        <p>{errors.pessoaJuridica?.cnpj && <span>{errors.pessoaJuridica.cnpj.message}</span>}</p>
</div>
```