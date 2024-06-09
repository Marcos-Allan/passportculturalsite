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

interface Props {
    level: number,
    porcentage: number,
    title: string,
    message: string,
}

export default function ConquestCard(props: Props) {
    

    return(
        <div
            className={`w-[90%] sm:w-[60%] my-2 p-3 border-2 flex h-[180px] gap-[6px] rounded-[8px]
            border-my-secondary
        `}>
            
            <div
                className={`h-full w-[40%] flex flex-row p-2 items-end gap-1 rounded-[5px]
                bg-my-secondary
            `}>
                <div
                    className={`h-[10px] flex-grow-[1] rounded-[2px] bg-my-gray
                `}/>
                <div
                    className={`h-[10px] flex-grow-[1] rounded-[2px] bg-my-gray
                `}/>
                <div
                    className={`h-[10px] flex-grow-[1] rounded-[2px] bg-my-gray
                `}/>
            </div>

            <div className={`flex-grow-[1] flex flex-col h-full justify-between bg-transparent p-2 rounded-[5px]`}>
                
                <div>
                    <h1
                        className={`font-bold text-[17px]
                        text-my-black
                    `}>{props.title}</h1>

                    <p
                        className={`text-[15px]
                        text-my-gray
                    `}>{props.message}</p>
                </div>
                
                <div className='w-full flex flex-row justify-between items-center'>

                    <div
                        className={`align-bottom w-[80%] h-[10px]
                        bg-my-gray
                    `}>
                        <div
                            className={`h-full w-[${Number(props.porcentage)}%]
                            bg-my-secondary
                        `}></div>
                    </div>
                    
                    <p
                        className={`text-[14px]
                        text-my-gray
                    `}>{props.porcentage}%</p>

                </div>

            </div>
        </div>
    )
}