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

import Navbar from "../../components/Navbar/index.tsx"
import Return from "../../components/Return/index.tsx"
import TitlePage from "../../components/TitlePage/index.tsx"
import MenuBUtton from '../../components/MenuButton/index.tsx'
import NameInput from "../../components/NameInput/index.tsx"
import EmailInput from "../../components/EmailInput/index.tsx"
import PasswordInput from "../../components/PasswordInput/index.tsx"
import Button from "../../components/Button/index.tsx"
import Linkin from "../../components/Linkin/index.tsx"
import Menu from '../../components/Menu/index.tsx'
import { useState } from "react"
export default function SignUp(){

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
            <Navbar>
                <Return />
                <TitlePage
                    text={`cadastrar`}
                />
                <MenuBUtton event={toggleMenu} />
            </Navbar>

            <form className={`mt-8 items-center flex flex-col w-full`} onSubmit={(e) => e.preventDefault()}>
                
                <NameInput text="Name" placeholder="Digite seu nome" />

                <NameInput text="Last Name" placeholder="Digite seu sobrenome" />
                <NameInput text="RA/RM" placeholder="Digite seu RA ou RM" />

                <EmailInput  />   

                <PasswordInput />
                <PasswordInput />
                
                <Button text="criar" route="/sign-in" />
            </form>
            
            <Linkin route="/sign-in" text="Já possui uma conta?" />
            <Menu menuopen={menuOpen} />
        </>
    )
}