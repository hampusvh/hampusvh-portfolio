import { ReactNode } from "react";
import clsx from "clsx";
import "@/styles/layout.css";

type SectionProps = {
    children: ReactNode;
    density?: "loose" | "normal" | "tight";
};

export default function Section({
    children,
    density = "normal",
}: SectionProps) {
    return (
        <section
            className={clsx("section", {
                "section--loose": density === "loose",
                "section--normal": density === "normal",
                "section--tight": density === "tight",
            })}
        >
            {children}
        </section>
    );
}
