import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./MenuItem";
import {menuData} from '../menuData'

const mainMenu: string = `
    w-[200px]
    h-[100vh]
    m-0 p-0
    text-base
    leading-3
    relative
    bg-chocolate70-color
    text-notWhite-color
    pt-[30vh]
    pl-1
    before:absolute
    before:h-[30px]
    before:w-[30px]
    before:right-0
    before:rounded-ss-full
    before:shadow-menu-top
    before:bg-transparent
    before:top-0
    before:translate-x-full
    after:absolute
    after:h-[30px]
    after:w-[30px]
    after:bottom-0
    after:translate-x-[196px]
    after:rounded-es-full
    after:tranparent
    after:shadow-menu-bottom`

const megaMenu: string = `
    group
    shadow-[-1px 0 0 rgba(0, 0, 0, 0.1)]
    hover:bg-notWhite-color
    hover:text-chocolate70-color
    rounded-bl-[1.5rem]
    rounded-tl-[1.5rem] ease-in-out
    hover:before:absolute
    hover:before:h-[50px]
    hover:before:w-[20px]
    hover:before:right-0
    hover:before:rounded-ee-full
    hover:before:shadow-custom-top
    hover:before:bg-transparent
    hover:before:translate-y-[-50px]
    hover:after:absolute hover:after:h-[50px]
    hover:after:w-[20px] hover:after:right-0
    hover:after:rounded-se-full
    hover:after:bg-transparent
    hover:after:shadow-custom-bottom
    align-middle
`


export default function Menu() {
    console.log(menuData)
    return (
        <ul className={mainMenu}>
            {menuData.map((menu) => (
                <li key={menu.id} className={megaMenu}>
                    <a className='block py-6 px-5 no-underline hover:no-underline' href="#" ><FontAwesomeIcon icon={menu.icon} className="mr-3"/>{menu.label}</a>
                    <MenuItem />
                </li>
            ))}
        </ul>
    )
}