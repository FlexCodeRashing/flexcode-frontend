"use server"

import style from "./header.module.css";

interface IHeader {
    /**
     * For testing only. Don't use in production
     * @deprecated
     */
    forceState?: "logged" | "not-logged"
}

export default async function Header(props: IHeader) {
    return <header className={style.header}>
    </header>
}