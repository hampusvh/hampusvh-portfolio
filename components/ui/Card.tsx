import "@/styles/ui/card.css";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
