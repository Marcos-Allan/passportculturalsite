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

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
export default function PasswordInput() {

    return(
        <div className="w-[90%] sm:w-[60%] relative">
            <label
                className={`
                    w-full
                    text-[20px]
                    ms-2
                    mb-2
                    text-my-gray
                `}
                htmlFor="passwordInput"
            >
                Senha
            </label>

            <div
                className={`
                    w-full relative flex justify-center items-start flex-col mb-5
                `}
            >
                <span
                    className={`
                    absolute
                    ms-2
                    left-0
                    text-[24px]
                    text-my-gray
                    `}
                >
                    <MdOutlineLock />
                </span>

                <span
                    className={`
                    absolute
                    me-2
                    right-0
                    text-[24px]
                    text-my-gray
                    `}
                >
                    <IoEyeOutline />
                
                </span>

                <input
                    placeholder='digite sua senha'
                    id="passwordInput"
                    type='password'
                    className={`
                        w-full
                        text-[20px]
                        rounded-[16px]
                        ps-[40px]
                        py-3
                        border
                        text-my-gray placeholder-my-gray border-my-gray bg-my-white
                        focus:outline-none
                    `}
                />
            </div>
        </div>
    )
}