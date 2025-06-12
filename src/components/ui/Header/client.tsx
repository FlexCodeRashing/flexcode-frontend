"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { IconSunFilled } from "@tabler/icons-react";
import React from "react";
import { useHeaderState } from "./provider";

export function NavigationLink({
    classname = "",
    text,
    url
}: {
    classname?: string;
    text: string;
    url: string;
}) {
    const pathname = usePathname();
    if (pathname == url) {
        if (classname) {
            classname += " ";
        }
        classname += "accent";
    }
    return (
        <NextLink href={url} className={classname}>
            {text}
        </NextLink>
    );
}

export function ThemeSwitcher() {
    const headerState = useHeaderState();
    const setExpanded = headerState.setThemeSwitcherExpanded;

    return (
        <button
            onMouseEnter={() => setExpanded(true)}
            onFocus={() => setExpanded(true)}
        >
            <IconSunFilled />
        </button>
    );
}
