"use client";

import { useTheme } from "@/utils/providers/theme";

export function SectionLogo({classname, imgClassname}: {classname?: string, imgClassname?: string}) {
    const theme = useTheme();
    return (
        <div className={classname}>
            {/*TODO: add logo*/}
            <h1>FlexCode</h1>
        </div>
    );
}
