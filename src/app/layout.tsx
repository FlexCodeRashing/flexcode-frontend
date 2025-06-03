import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import AppLayout from "@/components/layouts/AppLayout";
import { ThemeProvider } from "@/utils/providers/theme";
import { cookies } from "next/headers";

const fontGeist = Geist({
    variable: "--font-geist",
    subsets: ["latin"]
});

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
    title: {
        template: "%s | FlexCode",
        default: "FlexCode"
    },
    description: "" // TODO: add description and other metadata fields
};

export default async function RootLayout({
    children
}: {
    children: ReactNode;
}) {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value ?? "system";
    return (
        <html>
            <body
                className={`antialiased ${fontGeist.variable} ${fontInter.variable}`}
            >
                <ThemeProvider theme={theme}>
                    <AppLayout>{children}</AppLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
