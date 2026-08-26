import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section">
      <Container>{children}</Container>
    </section>
  );
}