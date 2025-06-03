"use server";

import style from "./header.module.css";

function SectionLogo() {
    return <div></div>;
}

interface IHeader {
    /**
     * For testing only. Don't use in production
     * @deprecated
     */
    forceState?: "logged" | "not-logged";
}

export default async function Header(props: IHeader) {
    return (
        <header className={style.header}>
            <SectionLogo />
        </header>
    );
}
