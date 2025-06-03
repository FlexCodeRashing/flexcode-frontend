"use server";

import { CSSProperties, ReactNode } from "react";
import { Property } from "csstype";

interface IBaseCard {
    children: ReactNode;
    borderWidth?: Property.BorderWidth;
    borderColor?: Property.BorderColor;
    borderStyle?: Property.BorderStyle;
    borderRadius?: Property.BorderRadius;
    padding?: Property.Padding;
    style?: CSSProperties;
}

export default async function BaseCard(props: IBaseCard) {
    const style: CSSProperties = {
        borderWidth: props.borderWidth ?? "1px",
        borderColor: props.borderColor ?? "rgb(209, 213, 219)",
        borderStyle: props.borderStyle ?? "solid",
        borderRadius: props.borderRadius ?? ".75rem",
        padding: "1rem",
        ...props.style
    };
    return <div style={style}>{props.children}</div>;
}
