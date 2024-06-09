/**
 * MIT License with Additional Restrictions
 * 
 * Copyright (c) 2024 Marcos Allan Santos Menezes
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * 2. The Software may not be used, modified, or distributed without the prior
 * written permission of the copyright holder.
 * 
 * 3. The Software is provided "as is", without warranty of any kind, express or
 * implied, including but not limited to the warranties of merchantability,
 * fitness for a particular purpose and noninfringement. In no event shall the
 * authors or copyright holders be liable for any claim, damages or other
 * liability, whether in an action of contract, tort or otherwise, arising from,
 * out of or in connection with the Software or the use or other dealings in the
 * Software.
 * 
 * By using the Software, you agree to these terms and conditions.
 */

import avatar_1 from "../../../public/avatar-1.jpg"
import avatar_2 from "../../../public/avatar-2.jpg"
import avatar_3 from "../../../public/avatar-3.jpg"
import avatar_4 from "../../../public/avatar-4.jpg"
import avatar_5 from "../../../public/avatar-5.jpg"
import avatar_6 from "../../../public/avatar-6.jpg"
import Navbar from "../../components/Navbar";
import Return from "../../components/Return";
import TitlePage from "../../components/TitlePage";
import MenuBUtton from "../../components/MenuButton";
import Menu from "../../components/Menu";
import Button from '../../components/Button';
import BottomNavigation from '../../components/BottomNavigation';
import { useState } from "react"
export default function MyPerfil() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }
    
    return(
        <>
            <Navbar>   
                <Return />
                <TitlePage text={`perfil`} />
                <MenuBUtton event={toggleMenu} />
            </Navbar>

                <div className={`w-[90%] sm:w-[60%] flex items-center gap-[10px] mb-0 mt-4`}>
                    <img
                        src={avatar_6}
                        alt=""
                        className={`rounded-[50%] mb-2 w-[80px] h-[80px] border-[1px] p-1 border-my-terciary`}
                    />

                    <input
                        className={`text-[22px] w-full font-bold capitalize bg-transparent border-2 p-1 ps-2 rounded-[15px] outline-none text-my-black border-my-terciary`}
                        value={'Marcos Allan'}
                    />
                </div>

            <h1
                className={`text-[30px] mb-5 font-bold
                    text-my-black
                `}
            >Avatares
            </h1>

            <div className={`px-14 mb-8 w-full sm:w-[60%] flex justify-center flex-wrap gap-[20px]`}>
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1 border-transparent
                    `}
                    src={avatar_1} alt=""
                />
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1 border-transparent
                    `}
                    src={avatar_2} alt=""
                />
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1 border-transparent
                    `}
                    src={avatar_3} alt=""
                />
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1 border-transparent
                    `}
                    src={avatar_4} alt=""
                />
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1 border-transparent
                    `}
                    src={avatar_5} alt=""
                />
                <img
                    className={`
                        w-[90px] rounded-[50%] border-2 p-1
                        border-my-terciary
                    `}
                    src={avatar_6} alt=""
                />
            </div>
            <Button text='Atualizar' route='undefined' />

            <BottomNavigation />
            <Menu menuopen={menuOpen} />
        </>

    )
}