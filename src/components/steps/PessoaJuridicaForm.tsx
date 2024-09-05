import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export default function PessoaJuridicaForm() {


    return (
        <div className="flex flex-col h-[50vh]">
            <h1 className="text-2xl antialiased font-bold text-center">Cadastro de pessoa jurídica</h1>
            <form className="flex flex-col gap-4 w-full mt-8">

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="nm_fantasia"
                        className="ml-4 text-slate-700 font-medium">Nome fantasia:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o nome fantasia"
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="rz_social"
                        className="ml-4 text-slate-700 font-medium">Razão social:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a razão social"
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="cnpj"
                        className="ml-4 text-slate-700 font-medium">CNPJ:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o CNPJ"
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="ie"
                       className="ml-4 text-slate-700 font-medium">Inscrição Estadual:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite a Inscrição Estadual"
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="email"
                       className="ml-4 text-slate-700 font-medium">E-mail:</label>
                    <input
                        type="email"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o endereço de e-mail"
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label
                        htmlFor="contato"
                        className="ml-4 text-slate-700 font-medium">Contato:</label>
                    <input
                        type="text"
                        className='border-b-4 border-zinc-200 shadow-sm rounded h-10 px-3 outline-none'
                        placeholder="Digite o nome do contato"
                    />
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