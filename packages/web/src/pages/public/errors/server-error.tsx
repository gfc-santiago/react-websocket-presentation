import { ReactNode } from "react";
import ErrorLayout from "./error";

interface ServerErrorProps {
  code?: number;
  children?: ReactNode;
}

export function ServerError({ children }: ServerErrorProps) {
  return (
    <ErrorLayout title="Internal Server Error" code={500}>
      {children}
    </ErrorLayout>
  );
}
