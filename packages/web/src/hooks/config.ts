import { createContext, useContext } from "react";

interface Config {
  host?: string;
  camera?: string;
}

export const ConfigContext = createContext<Config>({});

export default function useConfig() {
  return useContext(ConfigContext);
}
