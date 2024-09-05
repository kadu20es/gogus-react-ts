import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

const createUserFormSchema = z.object({
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
    })

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function PessoaJuridicaForm() {

    const [output, setOutput] = useState('')

    /**
     * Zod, zodResolver
     * biblioteca que auxilia na validação de dados dos formulários
     * após fazer as validações, passa os dados para useForm()
     */
    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function createPessoaJuridica(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <div className="flex flex-col h-[50vh]">
            <h1 className="text-2xl antialiased font-bold text-center">Cadastro de pessoa jurídica</h1>
            <form
                className="flex flex-col gap-4 w-full mt-8"
                onSubmit={handleSubmit(createPessoaJuridica)}
                >

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="nm_fantasia"
                        className="ml-4 text-slate-700 font-medium">Nome fantasia:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o nome fantasia"
                        {...register('nm_fantasia')}/>
                        {errors.nm_fantasia && <span>{errors.nm_fantasia.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="rz_social"
                        className="ml-4 text-slate-700 font-medium">Razão social:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a razão social"
                        {...register('rz_social')}/>
                        {errors.rz_social && <span>{errors.rz_social.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="cnpj"
                        className="ml-4 text-slate-700 font-medium">CNPJ:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o CNPJ"
                        {...register('cnpj')}/>
                        {errors.cnpj && <span>{errors.cnpj.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="ie"
                       className="ml-4 text-slate-700 font-medium">Inscrição Estadual:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a Inscrição Estadual"
                        {...register('ie')}/>
                        {errors.ie && <span>{errors.ie.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="email"
                       className="ml-4 text-slate-700 font-medium">E-mail:</label>
                    <input
                        type="email"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o endereço de e-mail"
                        {...register('email')}/>
                        {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="contato"
                        className="ml-4 text-slate-700 font-medium">Contato:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o nome do contato"
                        {...register('contato')}/>
                        {errors && <span>{errors.contato?.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="status"
                        className="ml-4 text-slate-700 font-medium">Status:</label>
                    <select
                        name="status"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none w-48'
                        defaultValue={'ativo'}
                        >
                        <option value="">Escolha um status</option>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>

            </form>
        </div>
    )
}