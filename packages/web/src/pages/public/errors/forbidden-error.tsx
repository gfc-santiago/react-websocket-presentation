import { ReactNode } from "react";
import ErrorLayout from "./error";

interface ForbiddenErrorProps {
  code?: number;
  children?: ReactNode;
}

export function ForbiddenError({ children }: ForbiddenErrorProps) {
  return (
    <ErrorLayout title="Forbidden" code={403}>
      {children}
    </ErrorLayout>
  );
}
