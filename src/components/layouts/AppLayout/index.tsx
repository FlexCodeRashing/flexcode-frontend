"use server";

import Header from "@/components/ui/Header";
import { ReactNode } from "react";

export default async function AppLayout({
    children
}: {
    children?: ReactNode;
}) {
    return (
        <div className={`root`}>
            <Header />
            {children}
        </div>
    );
}
