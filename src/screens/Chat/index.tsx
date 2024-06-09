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

import { IoMdSend, IoIosAdd } from 'react-icons/io'
import BottomNavigation from "../../components/BottomNavigation";
import Menu from "../../components/Menu";
import MenuBUtton from "../../components/MenuButton";
import Navbar from "../../components/Navbar";
import Return from "../../components/Return";
import TitlePage from "../../components/TitlePage";
import { useState } from 'react';
export default function Chat() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
            <Navbar>
                <Return />
                <TitlePage
                    text={`Chat`}
                />
                <MenuBUtton event={toggleMenu} />
            </Navbar>

            <div className={`bg-my-white w-[90%] sm:w-[60%] pt-[30px] h-[calc(100%-190px)] flex flex-col gap-[20px]`}>
                <div className={`self-start border-2 border-my-gray p-1 max-w-[200px] rounded-[10px] rounded-es-[0px]`}>
                    <span className={`text-[#3d4efe] font-black text-[14px]`}>Marcos A</span>
                    <p className={`text-[16px] font-lighttext-my-black pt-1`}>O ego vai te fazer se sentir bem, ou talvez bem mal por não ter ninguém</p>
                </div>
                <div className={`self-end border-2 border-my-gray p-1 max-w-[200px] rounded-[10px] rounded-ee-[0px]`}>
                <p className={`text-[16px] font-light text-my-black`}>o WIU é foda</p>
                </div>
            </div>

            <form className={`fixed bottom-[95px] sm:w-[60%] border-2 border-my-secondary rounded-[20px] w-[95%] mt-1 flex flex-row items-center gap-1`} onSubmit={(e) => e.preventDefault()}>
                
                <div className={`rounded-[50%] flex items-center justify-center p-1 bg-my-secondary ms-1`}>
                    <IoIosAdd className={`text-[24px] text-my-white`} />
                </div>

                <input className={`placeholder:text-my-gray text-my-black bg-transparent rounded-[18px] flex-grow-[1] py-[6px] focus:outline-none focus:border-my-secondary focus:text-my-black`} type="text" name="text" id="text" placeholder='Digite algo' />


                <div className={`rounded-[50%] flex items-center justify-center p-1 bg-my-secondary me-1`}>
                    <IoMdSend className={`ps-[2px] text-[24px] text-my-white`} />
                </div> 

            </form>

            <BottomNavigation />
            
            <Menu menuopen={menuOpen} />
        </>
    )
}