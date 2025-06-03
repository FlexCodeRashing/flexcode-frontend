"use server"

import Header from "@/components/ui/Header";
import Client from "./client";
import { ReactNode } from "react";

export default async function AppLayout({children}: {children?: ReactNode}) {
    return <div className={`root`}>
        <Client>
            <Header />
            {children}
        </Client>
    </div>
}
