"use server";

import "./header.module.css";
import { NavigationLink, ThemeSwitcher } from "./client";
import { HeaderStateProvider } from "./provider";
import React from "react";
import style from "./header.module.css";

async function SectionLogo({ classname = "" }: { classname?: string }) {
    return (
        <div className={classname}>
            {/*TODO: add logo*/}
            <h1>FlexCode</h1>
        </div>
    );
}

async function SectionNavigation({ classname }: { classname?: string }) {
    return (
        <nav className={classname}>
            <NavigationLink text={"Главная"} url={"/"} />
            {/*TODO: move to props*/}
            <NavigationLink text={"Курсы"} url={"/courses"} />
            <NavigationLink text={"Поддержка"} url={"/support"} />
        </nav>
    );
}

async function SectionUser({ classname = "" }: { classname?: string }) {
    return (
        <div className={classname}>
            <ThemeSwitcher />
        </div>
    );
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
        <header className={style.header_wrapper}>
            <div className={style.header}>
                <SectionLogo classname={style.header__logo} />
                <SectionNavigation classname={style.header__navigation} />
                <HeaderStateProvider>
                    <SectionUser classname={style.header__user} />
                </HeaderStateProvider>
            </div>
        </header>
    );
}
