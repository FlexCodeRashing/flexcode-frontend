import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

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

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body
                className={`antialiased ${fontGeist.variable} ${fontInter.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
