export default function MenuItem(){
    // CLASSE MEGADROP uma vez que o group está criado, basta usar group-hover: para que os efeitos hover funcionem

    return (
        <div className="opacity-0
            invisible
            absolute
            list-none
            top-0
            left-[200px]
            w-[200px]
            p-4
            rounded-tr-3xl
            rounded-br-3xl
            rounded-tl-3xl
            border-chocolate70-color
            border-r-2
            group-hover:visible
            group-hover:opacity-100
            group-hover:mt-0 min-h-full
            pt-[32vh]
            bg-notWhite-color
            text-left
            text-lg
            leading-3">
            <div className="block">
                <h3 className="text-2xl ml-5">Cadastros</h3>
                <ul className="p-4 transition-all duration-200 ease-in-out">
                    <li className='p-2 transition-all duration-200 ease-in-out'>
                        <a className='text-slate-700 no-underline hover:no-underline hover:text-amber-900' href="#">Fornecedor</a>
                    </li>
                    <li className='p-2 transition-all duration-200 ease-in-out'>
                        <a className='text-slate-700 no-underline hover:no-underline hover:text-amber-900' href="#">Cliente</a>
                    </li>
                    <li className='p-2 transition-all duration-200 ease-in-out'>
                        <a className='text-slate-700 no-underline hover:no-underline hover:text-amber-900' href="#">Funcionário</a>
                    </li>
                    <li className='p-2 transition-all duration-200 ease-in-out'>
                        <a className='text-slate-700 no-underline hover:no-underline hover:text-amber-900' href="#">Produto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}