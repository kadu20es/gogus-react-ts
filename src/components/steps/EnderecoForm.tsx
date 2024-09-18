import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useEffect, useState } from "react"
import { createUserFormSchema } from "../../utils/validations"
import { cepMask } from "../../utils/cpfMask"
import viacep from "../../services/viacepApi"
import { ViaCEP } from "viacep"

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function EnderecoForm() {

    const [output, setOutput] = useState('')

    const {
        register,
        handleSubmit,
        trigger,
        formState: {errors},
        control,
        watch,
        setValue,
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
        mode: "all",
        criteriaMode: "all",
        defaultValues: {
            endereco: {
                logradouro: "",
                numero: "",
                complemento: "",
                cep: "",
                bairro: "",
                municipio: "",
                uf: ""
            }
        }
    })

    const cepValue: string = watch("endereco.cep")

    // adiciona os dados do cep
    useEffect(() => {
        //setValue("endereco.cep", cepMask(cepValue))
        //console.log(cepValue)
        const getCep = async () => {
            if (cepValue.length >= 8) {
                try {
                    //const cep = cepValue.substring(0,5).concat(cepValue.substring(6,9))
                    const response = await viacep.get(`${cepValue}/json`)
                    setValue("endereco.logradouro", response.data.logradouro)
                    setValue("endereco.bairro", response.data.bairro)
                    setValue("endereco.municipio", response.data.localidade)
                    setValue("endereco.uf", response.data.uf)
                    setValue("endereco.cep", response.data.cep)

                } catch (error) {
                    console.log('Não foi possível completar a requisição', error)
                }
            }
        }
        getCep()
    }, [cepValue, setValue])


    return (
        <div className="flex flex-col h-[50vh]">
            <h1 className="text-2xl antialiased font-bold text-center">Endereço</h1>
            <form className="flex flex-col gap-4 w-full mt-8">

                <div className="flex flex-col">
                    <label
                        htmlFor="cep"
                        className="ml-4 font-medium"
                        >CEP:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder="12345-678"
                        maxLength={9}
                        {...register('endereco.cep')}/>
                    <p>{errors.endereco?.logradouro && <span>{errors.endereco.logradouro.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="logradouro"
                        className="ml-4 font-medium"
                        >Logradouro:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder="Digite o nome da rua"
                        {...register('endereco.logradouro')}/>
                    <p>{errors.endereco?.logradouro && <span>{errors.endereco.logradouro.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="numero"
                        className="ml-4 font-medium"
                        >Número:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        maxLength={8}
                        placeholder="Digite o número"
                        {...register('endereco.numero')}/>
                    <p>{errors.endereco?.numero && <span>{errors.endereco.numero.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="complemento"
                        className="ml-4 font-medium"
                        >Complemento:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder="Digite o complemento (ex: bl7 ap211)"
                        {...register('endereco.complemento')}/>
                        <p>{errors.endereco?.complemento && <span>{errors.endereco.complemento.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="bairro"
                        className="ml-4 font-medium"
                        >Bairro:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder="Digite o nome do bairro"
                        {...register("endereco.bairro")}
                        />
                        <p>{errors.endereco?.bairro && <span>{errors.endereco.bairro.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="municipio"
                        className="ml-4 font-medium">Município:
                    </label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder="Digite o nome do município"
                        {...register("endereco.municipio")}
                        />
                        <p>{errors.endereco?.municipio && <span>{errors.endereco.municipio.message}</span>}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="uf"
                        className="ml-4 font-medium">UF:</label>
                    <input
                        type="text"
                        className="border-b-4 border-notBrown-color shadow-sm rounded h-10 px-3 outline-none bg-transparent"
                        placeholder=""
                        {...register("endereco.uf")}
                        />
                        <p>{errors.endereco?.uf && <span>{errors.endereco.uf?.message}</span>}</p>
                </div>
            </form>

        </div>
    )
}