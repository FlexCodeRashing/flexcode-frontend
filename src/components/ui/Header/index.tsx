"use server";

import style from "./header.module.css";
import { SectionLogo, NavigationLink } from "./client";

interface IHeader {
    /**
     * For testing only. Don't use in production
     * @deprecated
     */
    forceState?: "logged" | "not-logged";
}

function SectionNavigation({classname}: {classname?: string}) {
    return (
        <nav className={classname}>
            <NavigationLink text={"Главная"} url={"/"} /> {/*TODO: move to props*/}
            <NavigationLink text={"Курсы"} url={"/courses"} />
            <NavigationLink text={"Поддержка"} url={"/support"} />
        </nav>
    );
}

export default async function Header(props: IHeader) {
    return (
        <header className={style.header}>
            <SectionLogo classname={style.header__logo} />
            <SectionNavigation classname={style.header__navigation} />
            <div></div>
        </header>
    );
}
