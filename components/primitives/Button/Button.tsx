import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import "@/components/primitives/Button/button.css";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
    children: ReactNode;
    variant?: Variant;
    className?: string;
};

type AnchorProps = CommonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
        href: string;
    };

type NativeButtonProps = CommonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
    };

type Props = AnchorProps | NativeButtonProps;

export default function Button(props: Props) {
    const { variant = "primary", className, children, ...rest } = props;

    const classes = ["c-button", `c-button--${variant}`, className]
        .filter(Boolean)
        .join(" ");

    if (props.as === "a") {
        return (
            <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
