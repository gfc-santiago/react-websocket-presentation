import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

export interface AppSocket extends Socket {
  prompt?: (payload: object) => void;
}

interface SocketInfo {
  socket?: AppSocket;
}

export const SocketContext = createContext<SocketInfo>({});

export default function useConfig() {
  return useContext(SocketContext);
}
