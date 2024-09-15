type Props = {
    passos: string[],
    passoAtual: number,
    text: string,
    handleClick: (direcao: string) => void
}

export default function NextButton({handleClick, passoAtual, passos, text}: Props) {
    return (
        <button
            className={`bg-leavesGreen-color text-white uppercase py-2 px-4 rounded-xl
                font-semibold cursor-pointer hover:bg-sproutGreen-color hover:text-white
                transition duration-200 ease-in-out`}

            onClick={() => handleClick("avancar")}

            >{ passoAtual === passos.length ? "Salvar" : text }
        </button>
    )
}