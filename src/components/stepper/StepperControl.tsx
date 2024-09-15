import BackButton from '../buttons/BackButton'
import NextButton from '../buttons/NextButton'

type Props = {
    passos: string[],
    passoAtual: number,
    handleClick: (direcao: string) => void
}

export default function StepperControl({ passos, passoAtual, handleClick }: Props) {

    return (
        <div className='container flex justify-around mt-8'>
            <BackButton handleClick={handleClick} passoAtual={passoAtual} text={"Retornar"}/>

            <NextButton handleClick={handleClick} passoAtual={passoAtual} passos={passos} text={"Avançar"}/>
        </div>

    )
}