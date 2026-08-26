import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export default function Text({
  children,
}: TextProps) {
  return (
    <p
      style={{
        maxWidth: "700px",
        marginTop: "2rem",
      }}
    >
      {children}
    </p>
  );
}