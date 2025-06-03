"use client";

import darkTheme from "@/config/themes/dark.module.css";
import lightTheme from "@/config/themes/light.module.css";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const THEMES: {[key: string]: any} = {
    "light": lightTheme,
    "dark": darkTheme
}

const ThemeContext = createContext<string>("dark");

export function ThemeProvider({children, _theme}: {children?: ReactNode, _theme?: string}) {
    const [theme, setTheme] = useState<string>(_theme ? THEMES[_theme] : undefined)

    useEffect(() => {
        if (!theme) {
            const isPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            console.debug("Prefers theme: ", isPreferDark ? "dark" : "light");
            setTheme(isPreferDark ? "dark" : "light");
        }
    }, []);

    if (theme) {
        return <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    }
}

export const getStyleFromTheme = (theme: string) => THEMES[theme];

export const useTheme = () => useContext(ThemeContext);
