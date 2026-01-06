import type { ReactNode } from "react";
import "@/components/primitives/Container/container.css";

type ContainerProps = {
    children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return <div className="l-container">{children}</div>;
}
