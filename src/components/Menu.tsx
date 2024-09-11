import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <ul className="w-[200px] h-[100vh] m-0 p-0 text-xl leading-3 relative bg-slate-700 text-white pt-[30vh]">

            <li className="group text-center shadow-[-1px 0 0 rgba(0, 0, 0, 0.1)] hover:bg-white hover:text-slate-700 rounded-bl-[1.5rem] rounded-tl-[1.5rem] ml-4 ease-in-out hover:before:absolute hover:before:h-[50px] hover:before:w-[20px] hover:before:right-0 hover:before:rounded-ee-full hover:before:shadow-custom-top hover:before:bg-transparent hover:before:translate-y-[-50px] hover:after:absolute hover:after:h-[50px] hover:after:w-[20px] hover:after:right-0 hover:after:rounded-se-full hover:after:bg-transparent hover:after:shadow-custom-bottom" >
            <a className='block py-6 px-5 no-underline hover:no-underline' href="#" >Cadastros</a>
                <MenuItem />
            </li>

            <li className="group text-center shadow-[-1px 0 0 rgba(0, 0, 0, 0.1)]  hover:bg-white hover:text-slate-700 rounded-bl-[1.5rem] rounded-tl-[1.5rem] ml-4  ease-in-out hover:before:absolute hover:before:h-[50px] hover:before:w-[20px] hover:before:right-0 hover:before:rounded-ee-full hover:before:shadow-custom-top hover:before:bg-transparent hover:before:translate-y-[-50px] hover:after:absolute hover:after:h-[50px] hover:after:w-[20px] hover:after:right-0 hover:after:rounded-se-full hover:after:bg-transparent hover:after:shadow-custom-bottom" >
                <a className='block py-6 px-5 no-underline hover:no-underline' href="#">Faturamento</a>
                <MenuItem />
            </li>


            <li className="group text-center shadow-[-1px 0 0 rgba(0, 0, 0, 0.1)]  hover:bg-white hover:text-slate-700 rounded-bl-[1.5rem] rounded-tl-[1.5rem] ml-4  ease-in-out hover:before:absolute hover:before:h-[50px] hover:before:w-[20px] hover:before:right-0 hover:before:rounded-ee-full hover:before:shadow-custom-top hover:before:bg-transparent hover:before:translate-y-[-50px] hover:after:absolute hover:after:h-[50px] hover:after:w-[20px] hover:after:right-0 hover:after:rounded-se-full hover:after:bg-transparent hover:after:shadow-custom-bottom" >
                <a className='block py-6 px-5 no-underline hover:no-underline' href="#">Vendas</a>
                <MenuItem />
            </li>

            <li className="group text-center shadow-[-1px 0 0 rgba(0, 0, 0, 0.1)]  hover:bg-white hover:text-slate-700 rounded-bl-[1.5rem] rounded-tl-[1.5rem] ml-4  ease-in-out hover:before:absolute hover:before:h-[50px] hover:before:w-[20px] hover:before:right-0 hover:before:rounded-ee-full hover:before:shadow-custom-top hover:before:bg-transparent hover:before:translate-y-[-50px] hover:after:absolute hover:after:h-[50px] hover:after:w-[20px] hover:after:right-0 hover:after:rounded-se-full hover:after:bg-transparent hover:after:shadow-custom-bottom" >
                <a className='block py-6 px-5 no-underline hover:no-underline' href="#">RH</a>
                <MenuItem />
            </li>
        </ul>
    )
}