/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from 'react'

type Props = {
    passos: string[],
    passoAtual: number
}

type Passo = {
    descricao: string,
    completado: boolean,
    tocado: boolean,
    selecionado: boolean
}

export default function Stepper({ passos, passoAtual }: Props) {

    const [novoPasso, setNovoPasso] = useState<Passo[]>([])
    const refPasso = useRef<Passo[]>([])

    const atualizaPasso = (numeroPasso: number, passos: Passo[]): Passo[] => {

        const novosPassos = [...passos]
        let contador: number = 0

        while (contador < novosPassos.length) {

            // passo atual
            if (contador === numeroPasso) {
                novosPassos[contador] = {
                    ...novosPassos[contador],
                    tocado: true,
                    selecionado: true,
                    completado: false
                }
                contador++
            }

            // passo completado
            else if (contador < numeroPasso) {
                novosPassos[contador] = {
                    ...novosPassos[contador],
                    tocado: false,
                    selecionado: true,
                    completado: true
                }
                contador++
            }

            // próximos passos
            else {
                novosPassos[contador] = {
                    ...novosPassos[contador],
                    tocado: false,
                    selecionado: false,
                    completado: false
                }
                contador++
            }
        }
        return novosPassos
    }

    useEffect(() => {

        const passosState: Passo[] = passos.map((passo, indice) => ({
                descricao: passo,
                completado: false,
                tocado: indice === 0,
                selecionado: indice === 0
            })
        )

        refPasso.current = passosState
        const atual = atualizaPasso(passoAtual -1, refPasso.current)
        setNovoPasso(atual)
    },[passos, passoAtual])

    const displaySteps = novoPasso.map((passo, indice) => {
        return (
            <div key={indice} className={indice !== novoPasso.length -1 ? 'w-full flex items-center' : 'flex items-center'}>
                <div className='relative flex flex-col items-center text-teal-600'>

                    {/* cria o círculo com o número no centro */}
                    <div className={ `rounded-full transition duration-500 ease-in-out border-2
                            border-gray-300 h-12 w-12 flex items-center justify-center py-3
                            ${passo.selecionado ? "bg-green-500 text-white font-bold border border-green-500" : "" }`} >

                                {/* Exibe o número ou o sinal de checked */}
                                {passo.completado
                                    ? (<span className='text-white font-bold text-xl'>&#10003;</span>)
                                    : (indice + 1)
                                }
                    </div>

                    {/* Exibe a descrição abaixo do círculo */}
                    <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase
                        ${passo.tocado ? "text-gray-900" : "text-gray-400"}`}>
                        {passo.descricao}
                    </div>
                </div>

                {/* Cria a linha entre os círculos */}
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out
                    ${passo.completado ? "border-green-600" : "border-gray-300"}`}></div>
            </div>
        )
    })

    return (
        <div className='mx-4 flex justify-between items-center'>
            {displaySteps}
        </div>

    )
}