"use client";

import React, { createContext, useContext, useState } from "react";
import { useTheme } from "@/utils/providers/theme";
import SwitchThemeCard from "@/components/cards/SwitchThemeCard";
import style from "./header.module.css";

interface IHeaderState {
    setThemeSwitcherExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<IHeaderState | undefined>(undefined);

export function HeaderStateProvider({
    children
}: {
    children?: React.ReactNode;
}) {
    const theme = useTheme();
    const [themeSwitcherExpanded, setThemeSwitcherExpanded] = useState(false);
    const value: IHeaderState = {
        setThemeSwitcherExpanded: setThemeSwitcherExpanded
    };
    if (theme) {
        console.log(`rendering provider with ${themeSwitcherExpanded}`);
        // console.log(children)
        return (
            <Context.Provider value={value}>
                {children}
                <div
                    className={`${style.header_popup_container} ${style.not_a_child}`}
                >
                    {themeSwitcherExpanded && (
                        <SwitchThemeCard currentTheme={theme.themeSelected} />
                    )}
                </div>
            </Context.Provider>
        );
    }
}

export const useHeaderState = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error(
            "useHeaderState must be used within HeaderStateProvider"
        );
    }
    return context;
};
