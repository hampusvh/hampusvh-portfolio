import type { ReactNode, ComponentPropsWithoutRef } from "react";
import "@/components/primitives/Section/section.css";

type SectionProps = {
    children: ReactNode;
    spacing?: "loose" | "normal" | "tight";
} & ComponentPropsWithoutRef<"section">;

export default function Section({
    children,
    spacing = "normal",
    className,
    ...rest
}: SectionProps) {
    const classes = ["l-section", `l-section--${spacing}`, className]
        .filter(Boolean)
        .join(" ");

    return (
        <section className={classes} {...rest}>
            {children}
        </section>
    );
}
