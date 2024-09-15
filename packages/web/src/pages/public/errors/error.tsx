import { Container, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ErrorLayoutProps {
  code?: number;
  title?: string;
  children?: ReactNode;
}

export default function ErrorLayout({
  title = "Error",
  code,
  children,
}: ErrorLayoutProps) {
  return (
    <Container>
      <Typography>{code}</Typography>
      <Typography>{title}</Typography>
      <Typography>{children}</Typography>
    </Container>
  );
}
