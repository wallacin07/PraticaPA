"use client"

import { useState } from "react"



export default function Nav ()
{

   const [open, setOpen] = useState<boolean>(false)
//    onMouseOutCapture={}
    return(
        <nav>
            <button onClick={() => setOpen(prev => !prev)}>            
                {!open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>}
                {/* {open && <>X</>}<br></br>
                {open && <>meninos</>} */}
            </button>
        </nav>
    )

}