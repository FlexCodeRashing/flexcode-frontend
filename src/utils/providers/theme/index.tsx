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

export function ThemeProvider(props: { children?: ReactNode; theme: string }) {
    const [theme, setTheme] = useState<string>(props.theme);
    const setCookie = useSetCookie();

    useEffect(() => {
        setCookie("theme", props.theme);
        if (theme == "system") {
            const isPreferDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            console.debug("Prefers theme: ", isPreferDark ? "dark" : "light");
            setTheme(isPreferDark ? "dark" : "light");
        }
    }, [props.theme, theme, setCookie]);
    if (theme != "system") {
        const themeStyle = getStyleFromTheme(theme);
        return (
            <div className={`${style.theme} ${themeStyle}`}>
                {props.children}
            </div>
        );
    }
}

export const getStyleFromTheme = (theme: string) => THEMES[theme] ?? darkTheme;
