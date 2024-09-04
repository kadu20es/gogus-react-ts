type Props = {
    passoAtual: number,
    text: string,
    handleClick: (direcao: string) => void // por ser uma função, deve ser tratado como tal
}

export default function BackButton({handleClick, passoAtual, text}: Props) {
    return (
        <button
            className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl
                font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700
                hover:text-white transition duration-200 ease-in-out ${passoAtual === 1 ? "opacity-50 cursor-not-allowed" : ""}`}

            onClick={() => handleClick('retornar')}
        >{text}
        </button>
    )
}