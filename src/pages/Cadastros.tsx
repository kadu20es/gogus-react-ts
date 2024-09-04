/* eslint-disable @typescript-eslint/no-unused-expressions */
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import PessoaFisicaForm from '../components/steps/PessoaFisicaForm'
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
            return <PessoaFisicaForm />
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
        <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl p-8 pb-2 mt-5 bg-white">
            {/* Stepper */}
            <div className="container horizontal mt-5 mb-11">
                <div className="my-10 p-10">
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
                </div>

                <Stepper
                    passos={passos}
                    passoAtual={passoAtual}
                />
            </div>

                {/* Stepper Controls */}
            <StepperControl
                passos={passos}
                passoAtual={passoAtual}
                handleClick={handleClick}
            />
        </div>
    )
}