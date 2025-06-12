"use server";

import { cookies } from "next/headers";

export default async function setTheme(theme: string) {
    const cookie = await cookies();
    cookie.set("theme", theme);
}
