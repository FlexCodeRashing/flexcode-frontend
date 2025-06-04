"use client";

import style from "./style.module.css";
import darkTheme from "@/config/themes/dark.module.css";
import lightTheme from "@/config/themes/light.module.css";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from "react";
import { useSetCookie } from "cookies-next";

const THEMES: { [key: string]: string } = {
    light: lightTheme.theme,
    dark: darkTheme.theme
};

const ThemeContext = createContext<
    { themeSelected: string; themeDisplayed: string } | undefined
>(undefined);

export function ThemeProvider(props: {
    children?: ReactNode;
    theme: string;
    fallbackTheme: string;
}) {
    const setCookie = useSetCookie();
    const [theme, setTheme] = useState<string>(props.theme);

    console.debug("Fallback theme: ", props.fallbackTheme);

    useEffect(() => {
        setCookie("theme", props.theme, { maxAge: 60 * 60 * 24 * 30 * 4 });
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
        if (props.theme === "system") {
            setCookie("theme-last-system", theme, {
                maxAge: 60 * 60 * 24 * 30 * 4
            });
        }
        const themeStyle = getStyleFromTheme(theme);
        return (
            <ThemeContext.Provider
                value={{ themeSelected: props.theme, themeDisplayed: theme }}
            >
                <div className={`${style.theme} ${themeStyle}`}>
                    {props.children}
                </div>
            </ThemeContext.Provider>
        );
    } else if (props.fallbackTheme) {
        const themeStyle = getStyleFromTheme(props.fallbackTheme);
        return (
            <ThemeContext.Provider
                value={{
                    themeSelected: props.theme,
                    themeDisplayed: props.fallbackTheme
                }}
            >
                <div className={`${style.theme} ${themeStyle}`}>
                    {props.children}
                </div>
            </ThemeContext.Provider>
        );
    }
}

const getStyleFromTheme = (theme: string) => THEMES[theme] ?? darkTheme;

export const useTheme = () => useContext(ThemeContext);
