import { Box, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMemo } from "react";
import {
  BibleVerse,
  PageCollection,
  PageCollectionType,
  Song,
} from "../types.d";
import { NavigatorProps } from "./navigator.d";

export default function Navigator({
  selected,
  onNext,
  onPrev,
  items,
  ...props
}: NavigatorProps) {
  const [prev, current, next] = useMemo((): PageCollection[] => {
    return [items[selected - 1], items[selected], items[selected + 1]];
  }, [items, selected]);

  const handleNext = (): void => {
    onNext?.();
  };

  const handlePrev = (): void => {
    onPrev?.();
  };

  const getSubtitle = (collection: PageCollection): string | undefined => {
    switch (collection.type) {
      case PageCollectionType.Song:
        return (collection as Song).author;
      case PageCollectionType.Verse:
        return (collection as BibleVerse).version;
      default:
        return;
    }
  };

  const subtitle = useMemo(() => {
    return getSubtitle(current);
  }, [current]);

  return (
    <Box {...props}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            textAlign: "center",
            visibility: prev ? "visible" : "hidden",
          }}
          variant="caption"
        >
          {prev?.alias && `${prev.alias}: `}
          {prev?.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            visibility: next ? "visible" : "hidden",
          }}
          variant="caption"
        >
          {next?.alias && `${next.alias}: `}
          {next?.title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          aria-label="prev-section"
          onClick={handlePrev}
          sx={{
            visibility: prev ? "visible" : "hidden",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography textAlign="center" variant="subtitle1">
            {current.title}
          </Typography>
          {subtitle && (
            <Typography textAlign="center" variant="subtitle2">
              {subtitle}
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="next-section"
          onClick={handleNext}
          sx={{
            visibility: next ? "visible" : "hidden",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
