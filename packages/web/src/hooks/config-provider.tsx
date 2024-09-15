import { ReactNode, useMemo } from "react";
import { ConfigContext } from "./config";

interface ConfigProviderProps {
  children?: ReactNode;
}

export default function ConfigProvider({ children }: ConfigProviderProps) {
  const config = useMemo(() => {
    const url = new URL(window.location.href);
    url.port = "5000";
    // url.protocol = "ws";
    return { host: url.origin };
  }, []);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
