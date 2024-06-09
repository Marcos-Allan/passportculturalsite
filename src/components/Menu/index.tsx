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

import { Link } from "react-router-dom"

interface Props {
    menuopen: boolean
}
export default function Menu(props: Props) {
    return(
        <div
            className={`
                flex items-center flex-col fixed top-0 w-[280px] h-full pt-32
                bg-my-black text-my-white
                ${props.menuopen == true ? 'left-0' : 'left-[-280px]'}
                transition-[left] duration-[0.8s]
            `}
        >
            <Link className={`text-[18px] text-left w-full ps-2`} to="/">Home</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/signs">Signs</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/sign-in">Sing-in</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/sign-up">Sing-up</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/forgout-password">Forgout Password</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/confirm-code">Confirm Code</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/switch-password">Switch Password</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/my-perfil">My Perfil</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/materias">Matérias</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/notifications">Notifications</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/chat">Chat</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/achievements">Achievements</Link>
            <Link className={`text-[18px] text-left w-full ps-2`} to="/exercises">Exercises</Link>
        </div>
    )
}