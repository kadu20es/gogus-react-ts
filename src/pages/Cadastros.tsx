/* eslint-disable @typescript-eslint/no-unused-expressions */
import Stepper from "../components/stepper/Stepper"
import StepperControl from "../components/stepper/StepperControl"
import PessoaJuridicaForm from "../components/steps/PessoaJuridicaForm"
import EnderecoForm from '../components/steps/EnderecoForm'
import TelefonesForm from '../components/steps/TelefonesForm'
import FinalizarCadastro from '../components/steps/FinalizarCadastro'
import { useState } from "react";
import { StepperContext } from "../contexts/stepperContext";


export default function Cadastros() {
    const [passoAtual, setPassoAtual] = useState(1)
    const [dadosPessoais, setDadosPessoais] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefones, setTelefones] = useState([''])
    const [finalizar, setFinalizar] = useState('')


    const passos: string[] = [
        "Dados pessoais",
        "Endereço",
        "Telefones",
        "Finalizar"
    ]

    const exibirPasso = (passo: number) => {
        switch(passo) {
        case 1:
            return <PessoaJuridicaForm />
        case 2:
            return <EnderecoForm />
        case 3:
            return <TelefonesForm />
        case 4:
            return <FinalizarCadastro />
        default:
        }
    }

    const handleClick = (direcao: string) => {
        let novoPasso = passoAtual

        direcao === "avancar" ? novoPasso++ : novoPasso--

        // verifica se os passos estão dentro dos limites
        novoPasso > 0 && novoPasso <= passos.length && setPassoAtual(novoPasso)
    }

    return (
        <div className="md:w-1/2 mx-auto mt-4 shadow-xl pt-6 rounded-2xl py-0 px-6 bg-notWhite-color h-[80vh] flex flex-col overflow-auto">
            {/* Stepper */}

                <Stepper
                    passos={passos}
                    passoAtual={passoAtual}
                />

                    <StepperContext.Provider value={{
                        dadosPessoais,
                        setDadosPessoais,
                        endereco,
                        setEndereco,
                        telefones,
                        setTelefones,
                        finalizar,
                        setFinalizar
                    }}>
                        {exibirPasso(passoAtual)}
                    </StepperContext.Provider>


                {/* Stepper Controls */}
            <StepperControl
                passos={passos}
                passoAtual={passoAtual}
                handleClick={handleClick}
            />
        </div>
    )
}