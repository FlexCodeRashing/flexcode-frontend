"use client";

import style from "./style.module.css";
import darkTheme from "@/config/themes/dark.module.css";
import lightTheme from "@/config/themes/light.module.css";
import { ReactNode, useEffect, useState } from "react";
import { useSetCookie } from "cookies-next";

const THEMES: { [key: string]: string } = {
    light: lightTheme.theme,
    dark: darkTheme.theme
};

export function ThemeProvider(props: { children?: ReactNode; theme: string, fallbackTheme: string }) {
    const setCookie = useSetCookie();
    const [theme, setTheme] = useState<string>(props.theme);

    console.debug("Fallback theme: ", props.fallbackTheme);

    useEffect(() => {
        setCookie("theme", props.theme);
        if (theme == "system") {
            const isPreferDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            const systemTheme = isPreferDark ? "dark" : "light";
            console.debug("Prefers theme: ", systemTheme);
            setTheme(systemTheme);
        }
    }, [props.theme, theme, setCookie]);

    if (theme != "system") {
        setCookie("theme-last-system", theme);
        const themeStyle = getStyleFromTheme(theme);
        return (
            <div className={`${style.theme} ${themeStyle}`}>
                {props.children}
            </div>
        );
    } else if (props.fallbackTheme) {
        const themeStyle = getStyleFromTheme(props.fallbackTheme);
        return (
            <div className={`${style.theme} ${themeStyle}`}>
                {props.children}
            </div>
        );
    }
}

const getStyleFromTheme = (theme: string) => THEMES[theme] ?? darkTheme;
