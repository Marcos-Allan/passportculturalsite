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
import Text from '../../components/Text';
import ExerciseCard from '../../components/ExerciseCard';
import { useState } from "react";
export default function Exercises() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return(
        <>
            <Navbar>
                <Return />
                <TitlePage
                    text={`Exercicios`}
                />
                <MenuBUtton event={toggleMenu} />
            </Navbar>

            <Text text='Passeios' />

            <ExerciseCard concluded={false} materia='Português' title='museu do ipiranga' type='travel' />
            <ExerciseCard concluded={true} materia='história' title='museu do terraplanismo' type='travel' />
            
            <Text text='Simulados' />
            
            <ExerciseCard concluded={false} materia='enem' title='fazer simulado de matemática' type='exercise' />
            <ExerciseCard concluded={true} materia='enem' title='fazer simulado de história' type='exercise' />
            
            <BottomNavigation />
            
            <Menu menuopen={menuOpen} />
        </>
    )
}