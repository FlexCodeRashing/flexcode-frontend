"use server";

import style from "./header.module.css";
import { SectionLogo } from "./client";

interface IHeader {
    /**
     * For testing only. Don't use in production
     * @deprecated
     */
    forceState?: "logged" | "not-logged";
}

export default async function Header(props: IHeader) {
    return (
        <header className={style.headerWrapper}>
            <div className={style.header}>
                <SectionLogo classname={style.header__logo} />
            </div>
        </header>
    );
}
