import { Box, SxProps, Typography } from "@mui/material";
import { useSocket } from "../../../hooks";
import { useEffect, useMemo, useState } from "react";
import { Page } from "../dashboard/types.d";
import useCollection from "../../../hooks/collection";
import { Theme } from "@emotion/react";

export default function Viewer() {
  const { socket } = useSocket();
  const { get } = useCollection();
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    const event = "broadcast";
    socket?.on(event, ({ type, id }) => {
      if (type === "text") {
        setPage(get(id) ?? null);
      } else if (type === "clear") {
        setPage(null);
      }
    });
    return () => {
      socket?.removeListener(event);
    };
  }, [get, socket]);

  const lines = useMemo(() => {
    return page?.lines.map((line, idx) => {
      const [, type, content] = line?.match(/^\{(xs|sm|lg|xl)\}(.*)/) ?? [];
      const style: SxProps<Theme> = { fontSize: "6em" };
      if (type === "xs") {
        style.fontSize = "3em";
      } else if (type === "sm") {
        style.fontSize = "4em";
      } else if (type === "lg") {
        style.fontSize = "7em";
      } else if (type === "xl") {
        style.fontSize = "8em";
      }
      return { content: content || line, id: idx, style };
    });
  }, [page?.lines]);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        background: `radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 80%,rgba(0, 0, 0, 0) 100%)`,
        textAlign: "center",
        color: "#fff",
      }}
    >
      {lines?.map(({ content, id, style }) => (
        <Typography key={id} sx={style}>
          {content}
        </Typography>
      ))}
    </Box>
  );
}
