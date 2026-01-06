import type { ReactNode, AnchorHTMLAttributes, HTMLAttributes } from "react";
import "@/components/primitives/Card/card.css";

type Variant = "default" | "elevated";

type CommonProps = {
    children: ReactNode;
    variant?: Variant;
    className?: string;
};

type AnchorCardProps = CommonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
        href: string;
    };

type DivCardProps = CommonProps &
    HTMLAttributes<HTMLDivElement> & {
        as?: "div";
    };

type Props = AnchorCardProps | DivCardProps;

export default function Card(props: Props) {
    const { variant = "default", className, children, ...rest } = props;

    const classes = ["c-card", `c-card--${variant}`, className]
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
        <div className={classes} {...(rest as HTMLAttributes<HTMLDivElement>)}>
            {children}
        </div>
    );
}
