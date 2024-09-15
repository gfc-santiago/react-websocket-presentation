import { ReactNode } from "react";
import ErrorLayout from "./error";

interface NotFoundErrorProps {
  title?: string;
  children?: ReactNode;
}

export function NotFoundError({
  title = "Not Found",
  children,
}: NotFoundErrorProps) {
  return (
    <ErrorLayout title={title} code={400}>
      {children}
    </ErrorLayout>
  );
}
