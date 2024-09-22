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
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const event = "broadcast";
    socket?.on(event, ({ type, id }) => {
      setVisible(false);
      setTimeout(() => {
        if (type === "text") {
          setVisible(true);
          setPage(get(id) ?? null);
        } else if (type === "clear") {
          setVisible(false);
          setPage(null);
        }
      }, 200);
    });
    socket?.on("resume", (resp) => {
      setVisible(false);
      setTimeout(() => {
        if (resp) {
          setVisible(true);
          setPage(get(resp?.id) ?? null);
        }
      });
    });
    return () => {
      socket?.removeListener(event);
      socket?.removeListener("resume");
    };
  }, [get, socket]);

  const lines = useMemo(() => {
    return page?.lines.map((line, idx) => {
      const [, type, content] = line?.match(/^\{(xs|sm|lg|xl)\}(.*)/) ?? [];
      const style: SxProps<Theme> = { fontSize: "5em" };
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

  const layout =
    page?.layout === "Preview"
      ? {
          height: "100%",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }
      : {
          width: "100%",
        };
  return (
    <Box
      sx={{
        flexDirection: "column",
        position: "absolute",
        bottom: 0,
        right: 0,
        ...layout,
        background: `radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 80%,rgba(0, 0, 0, 0) 100%)`,
        textAlign: "center",
        color: "#fff",
        transition: "opacity 0.5s",
        opacity: visible ? 1 : 0,
        padding: "10px 0",
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
