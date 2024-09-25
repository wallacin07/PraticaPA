"use client"

import Nav from "./nav";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";


export default function Header ()
{

    const [open, setOpen] = useState<boolean>(false);
 
    const handleOpen = () => setOpen(!open);

    return(
        <header className="flex flex-row justify-between p-4">
            <Nav></Nav>

            <div className="border-none">      
                <div className="relative">

                        <button onClick={handleOpen}
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer focus:bg-gray-300">
                            <h3>ChatGPT</h3></button>


                        <Dialog open={open} handler={handleOpen}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <DialogBody  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            The key to more success is to have a lot of pillows. Put it this way,
                            it took me twenty five years to get these plants, twenty five years of
                            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                            </DialogBody>
                            <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0"><path fillRule="evenodd" clipRule="evenodd" d="M10.9739 3.25193C11.0996 3.78971 10.7656 4.3276 10.2278 4.45333C8.71987 4.80589 7.37959 5.59978 6.35157 6.69357C5.97334 7.09601 5.34048 7.11563 4.93804 6.73739C4.5356 6.35916 4.51598 5.7263 4.89422 5.32386C6.18477 3.95074 7.87069 2.9505 9.77245 2.50585C10.3102 2.38012 10.8481 2.71415 10.9739 3.25193ZM13.0264 3.25196C13.1521 2.71418 13.69 2.38016 14.2278 2.50592C16.1295 2.95059 17.8153 3.95083 19.1058 5.32393C19.4841 5.72637 19.4645 6.35923 19.062 6.73746C18.6596 7.11569 18.0267 7.09607 17.6485 6.69363C16.6205 5.59985 15.2803 4.80597 13.7724 4.45338C13.2346 4.32763 12.9006 3.78974 13.0264 3.25196ZM3.90936 8.51416C4.43816 8.6735 4.73766 9.23135 4.57832 9.76015C4.36501 10.4681 4.25 11.2197 4.25 12C4.25 12.7745 4.36331 13.5303 4.57474 14.2495C4.73051 14.7793 4.42725 15.3351 3.89739 15.4909C3.36753 15.6467 2.81171 15.3434 2.65594 14.8136C2.39202 13.9159 2.25 12.9702 2.25 12C2.25 11.0221 2.39427 10.0761 2.66337 9.18311C2.82271 8.65432 3.38056 8.35481 3.90936 8.51416ZM20.0907 8.51424C20.6195 8.3549 21.1773 8.65441 21.3367 9.18321C21.6057 10.0762 21.75 11.0222 21.75 12C21.75 12.9702 21.608 13.9158 21.3441 14.8135C21.1883 15.3433 20.6325 15.6466 20.1026 15.4908C19.5728 15.3351 19.2695 14.7793 19.4253 14.2494C19.6367 13.5303 19.75 12.7745 19.75 12C19.75 11.2197 19.635 10.4681 19.4217 9.76022C19.2624 9.23142 19.5619 8.67357 20.0907 8.51424ZM19.1091 17.2823C19.5227 17.6483 19.5613 18.2803 19.1953 18.6939C17.9017 20.1558 16.1885 21.2454 14.2402 21.7273C13.7041 21.86 13.162 21.5328 13.0294 20.9967C12.8968 20.4606 13.2239 19.9185 13.76 19.7859C15.2896 19.4075 16.6553 18.5463 17.6975 17.3685C18.0635 16.9549 18.6955 16.9163 19.1091 17.2823ZM6.17165 17.2744C6.63471 17.5754 6.76609 18.1948 6.4651 18.6578L5.59269 20H10.0001C10.5524 20 11.0001 20.4477 11.0001 21C11.0001 21.5523 10.5524 22 10.0001 22H3.75C3.38329 22 3.046 21.7993 2.87108 21.477C2.69617 21.1547 2.7117 20.7625 2.91156 20.455L4.78822 17.5678C5.08921 17.1048 5.70859 16.9734 6.17165 17.2744Z" fill="currentColor"></path></svg>
                            </DialogFooter>
                        </Dialog>





                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>
    





            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>


        </header>


        




    )
}