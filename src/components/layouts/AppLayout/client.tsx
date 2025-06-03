"use client"

import { ReactNode } from "react";
import { useTheme, getStyleFromTheme } from "@/utils/providers/theme";
import "./style.css"

export default function Client({children}: {children?: ReactNode}) {
    const theme = useTheme();
    const style = getStyleFromTheme(theme).theme ?? "";
    return <div className={`theme ${style}`}>
        {children}
    </div>
}
