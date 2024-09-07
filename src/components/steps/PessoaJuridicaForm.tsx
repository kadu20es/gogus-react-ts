import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useEffect, useState } from "react"
import { createUserFormSchema } from "../../utils/validations"
import { cnpjMask, cpfmask } from "../../utils/cpfMask"

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
        trigger,
        formState: {errors},
        control,
        watch,
        setValue
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
        mode: "all",
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

    function createPessoaJuridica(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    /*
    const handleOnChange = (
        value: string,
        onChange: (...event: string[]) => void
    ) => {
        onChange(value)
        trigger()
    }*/

    const cnpjValue: string = watch("pessoaJuridica.cnpj")

    useEffect(() => {
        setValue("pessoaJuridica.cnpj", cnpjMask(cnpjValue))
    },[cnpjValue, setValue])

    return (
        <div className="flex flex-col h-[60vh]">
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
                        {...register('pessoaJuridica.nm_fantasia')}/>
                        <p>{errors.pessoaJuridica?.nm_fantasia && <span>{errors.pessoaJuridica.nm_fantasia.message}</span>}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="rz_social"
                        className="ml-4 text-slate-700 font-medium">Razão social:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a razão social"
                        {...register('pessoaJuridica.rz_social')}/>
                        <p>{errors.pessoaJuridica?.rz_social && <span>{errors.pessoaJuridica.rz_social.message}</span>}</p>
                </div>

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

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="ie"
                       className="ml-4 text-slate-700 font-medium">Inscrição Estadual:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a Inscrição Estadual"
                        {...register('pessoaJuridica.ie')}/>
                        <p>{errors.pessoaJuridica?.ie && <span>{errors.pessoaJuridica.ie.message}</span>}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="email"
                       className="ml-4 text-slate-700 font-medium">E-mail:</label>
                    <input
                        type="email"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o endereço de e-mail"
                        {...register('pessoaJuridica.email')}/>
                        <p>{errors.pessoaJuridica?.email && <span>{errors.pessoaJuridica.email.message}</span>}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="contato"
                        className="ml-4 text-slate-700 font-medium">Contato:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o nome do contato"
                        {...register('pessoaJuridica.contato')}/>
                        {errors.pessoaJuridica?.contato && <span>{errors.pessoaJuridica.contato.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="status"
                        className="ml-4 text-slate-700 font-medium">Status:</label>
                    <select
                        name="status"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none w-48'
                        defaultValue={'pessoaJuridica.ativo'}
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