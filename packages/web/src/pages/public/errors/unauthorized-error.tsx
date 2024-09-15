import { ReactNode } from "react";
import ErrorLayout from "./error";

interface UnauthorizedErrorProps {
  code?: number;
  children?: ReactNode;
}

export function UnauthorizedError({ children }: UnauthorizedErrorProps) {
  return (
    <ErrorLayout title="Unauthorized" code={401}>
      {children}
    </ErrorLayout>
  );
}
