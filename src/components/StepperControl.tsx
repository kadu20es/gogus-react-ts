import BackButton from './BackButton'
import NextButton from './NextButton'

type Props = {
    passos: string[],
    passoAtual: number,
    handleClick: (direcao: string) => void
}

export default function StepperControl({ passos, passoAtual, handleClick }: Props) {

    return (
        <div className='container flex justify-around mt-12 mb-8 pt-4'>
            <BackButton handleClick={handleClick} passoAtual={passoAtual} text={"Retornar"}/>

            <NextButton handleClick={handleClick} passoAtual={passoAtual} passos={passos} text={"Avançar"}/>
        </div>

    )
}