import type { ReactNode, ComponentPropsWithoutRef } from "react";
import "@/components/primitives/Section/section.css";

type Spacing = "loose" | "normal" | "tight";

type SectionProps = {
    children: ReactNode;
    spacing?: Spacing;
    inset?: { top?: Spacing; bottom?: Spacing };
    id?: string;
};

export default function Section({ children, spacing = "normal", inset, id }: SectionProps) {
    const top = inset?.top ?? spacing;
    const bottom = inset?.bottom ?? spacing;

    return (
        <section
            id={id}
            className={`l-section l-section--pt-${top} l-section--pb-${bottom}`}
        >
            {children}
        </section>
    );
}

