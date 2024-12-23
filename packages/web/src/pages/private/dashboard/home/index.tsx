import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import LivePreview from "./live-preview";
import Navigator from "./navigator";
import { PlayArrow } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PageListing from "./page-listing";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useSocket } from "../../../../hooks";
import useCollection from "../../../../hooks/collection";

export default function DashboardHomePage() {
  const history = useRef<string | undefined>("");
  const [showPreview, togglePreview] = useState(true);
  const listRef = useRef<HTMLUListElement>(null);

  const [collectionIndex, gotoCollection] = useState(0);
  const [selected, select] = useState<string | undefined>();
  const { socket } = useSocket();

  const {
    collection: items,
    get: getByRef,
    pages,
    presentation,
  } = useCollection();

  const [next, prev] = useMemo(() => {
    const { next, prev } = getByRef(selected)?.nav ?? {};
    return [next, prev];
  }, [getByRef, selected]);

  const handleNavNext = () => {
    gotoCollection(collectionIndex + 1);
  };

  const handleNavPrev = () => {
    gotoCollection(collectionIndex - 1);
  };

  const handleShow = useCallback(
    (id: string) => {
      socket?.prompt?.({ type: "text", id });
    },
    [socket]
  );

  const moveTo = useCallback(
    (ref?: string) => {
      if (ref) {
        if (!ref.startsWith(`${presentation?.id}-c${collectionIndex}`)) {
          const pattern = /^c(\d+)-/;
          const [, index] =
            ref.replace(`${presentation?.id}-`, "").match(pattern) ?? [];
          gotoCollection(parseInt(index));
        }
        setTimeout(() => {
          document
            .getElementById(ref)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
        select(ref);
      }
    },
    [collectionIndex, presentation?.id]
  );

  const handleNext = () => {
    if (next) {
      socket?.prompt?.({ type: "text", id: next ?? history.current });
    } else if (!selected) {
      socket?.prompt?.({ type: "text", id: history.current ?? pages[0]?.id });
    }
  };

  const handlePrev = () => {
    if (prev)
      socket?.prompt?.({
        type: "text",
        id: prev ?? history.current,
      });
  };

  const handleClear = () => {
    socket?.prompt?.({ type: "clear" });
  };

  const clear = useCallback(() => {
    if (selected) {
      history.current = selected;
      select("");
    } else {
      socket?.prompt?.({ type: "text", id: history.current });
    }
  }, [selected, socket]);

  useEffect(() => {
    const event = "broadcast";
    socket?.on(event, ({ type, id }) => {
      if (type === "text") {
        history.current = id;
        moveTo(id);
      } else if (type === "clear") {
        clear();
      }
    });
    socket?.on("resume", (resp) => {
      if (resp) {
        moveTo(resp?.id);
      }
    });
    return () => {
      socket?.removeListener(event);
      socket?.removeListener("resume");
    };
  }, [socket, moveTo, clear]);

  return (
    <>
      {showPreview && (
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LivePreview />
        </Box>
      )}
      <BottomNavigation
        showLabels
        sx={{
          position: "sticky",
          top: "0",
          zIndex: 999,
          backgroundColor: "primary.dark",
        }}
      >
        <BottomNavigationAction
          label={showPreview ? "Hide Preview" : "Preview"}
          onClick={() => togglePreview(!showPreview)}
          sx={{ color: "primary.contrastText" }}
          icon={
            showPreview ? <DesktopAccessDisabledIcon /> : <OndemandVideoIcon />
          }
        />
        <BottomNavigationAction
          label="Clear"
          onClick={handleClear}
          sx={{ color: "primary.contrastText" }}
          icon={<CancelPresentationIcon />}
        />
        <BottomNavigationAction
          label="Prev"
          onClick={handlePrev}
          sx={{ color: "primary.contrastText" }}
          icon={<PlayArrow sx={{ transform: "rotate(180deg)" }} />}
        />
        <BottomNavigationAction
          onClick={handleNext}
          label="Next"
          sx={{ color: "primary.contrastText" }}
          icon={<PlayArrow />}
        />
      </BottomNavigation>
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Navigator
          selected={collectionIndex}
          items={items}
          onNext={handleNavNext}
          onPrev={handleNavPrev}
        />
        <PageListing
          id="pl"
          ref={listRef}
          collection={items[collectionIndex]}
          sx={{
            maxHeight: `calc(100vh - ${showPreview ? 470 : 240}px)`,
          }}
          onShow={handleShow}
          current={selected}
          nav={{
            prev: "previous section",
            next: "next section",
          }}
        />
      </Box>
    </>
  );
}
