"use client"

import Nav from "./nav";
// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Header ()
{


    return(
        <header className="flex flex-row justify-between p-4">
            <Nav></Nav>
                <Popover className="relative">
                    <PopoverButton>Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-[0.200rem] right-[-1.5rem] text-slate-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </PopoverButton>
                    <PopoverPanel anchor="bottom" className="flex flex-col">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </PopoverPanel>
                    </Popover>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>


        </header>


        




    )
}