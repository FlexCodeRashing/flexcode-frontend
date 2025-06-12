"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";


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
