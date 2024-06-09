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

import BottomNavigation from "../../components/BottomNavigation";
import Menu from "../../components/Menu";
import MenuBUtton from "../../components/MenuButton";
import Navbar from "../../components/Navbar";
import Return from "../../components/Return";
import TitlePage from "../../components/TitlePage";
import NotificationCard from '../../components/NotificationCard';
import { useState } from "react";
export default function Notifications() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
            <Navbar>
                <Return />
                <TitlePage
                    text={`Notificações`}
                />
                <MenuBUtton event={toggleMenu} />
            </Navbar>

            <div className={`w-full sm:w-[70%] mt-5 flex flex-col justify-center items-center gap-[15px] pb-[60px]`}>
                    <NotificationCard materia='quimica' content='aprender a fazer sal' />
                    <NotificationCard materia='pdtcc' content='SCRUM' />
                    <NotificationCard materia='quimica' content='pdtcc' />
                    <NotificationCard materia='matemática' content='porcentagem' />
                    <NotificationCard materia='português' content='verbos' />
                    <NotificationCard materia='filosofia' content='sócrates' />
                    <NotificationCard materia='sociologia' content='socialismo x comunismo' />
                    <NotificationCard materia='biologia' content='oviviparo' />
                    <NotificationCard materia='quimica' content='química orgânica' />
                    <NotificationCard materia='geografia' content='poluição ambiental' />
            </div>

            <BottomNavigation />
            
            <Menu menuopen={menuOpen} />
        </>
    )
}