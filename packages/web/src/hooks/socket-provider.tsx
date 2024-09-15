import React, { ReactNode, useState } from "react";
import useConfig from "./config";
import { AppSocket, SocketContext } from "./socket";
import { io } from "socket.io-client";

interface ConfigProviderProps {
  children?: ReactNode;
}

export default function SocketProvider({ children }: ConfigProviderProps) {
  const [socket, setSocket] = useState<AppSocket | undefined>(undefined);
  const { host } = useConfig();

  React.useEffect(() => {
    setSocket((prev) => {
      if (prev) prev?.close();
      if (host) {
        const socket = io(host, {
          transports: ["websocket", "polling"],
        }) as AppSocket;
        socket.on("error", (err) => {
          console.log(`error due to ${err.message}`);
        });
        socket.on("connect_error", (err) => {
          console.log(`connect_error due to ${err.message}`);
        });
        socket.prompt = (payload) => {
          socket.emit("prompt", payload);
        };
        return socket;
      }
      return undefined;
    });
    return () => {
      setSocket((prev) => {
        prev?.close();
        return undefined;
      });
    };
  }, [host]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
