"use client";

import style from "./style.module.css";
import BaseCard from "@/components/templates/BaseCard";
import setTheme from "./server";

function ThemeButton({ theme }: { theme: string }) {
    return (
        <button
            onClick={() =>
                setTheme(theme).then(() => window.location.assign("/"))
            }
        >
            {theme}
        </button>
    );
}

interface ISwitchThemeCard {
    currentTheme: string;
}

export default function SwitchThemeCard(props: ISwitchThemeCard) {
    console.log("switch theme card render");
    return (
        <BaseCard className={style.switch_theme_card}>
            <ThemeButton theme={"light"} />
            <ThemeButton theme={"dark"} />
            <ThemeButton theme={"system"} />
        </BaseCard>
    );
}
