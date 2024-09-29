import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import { forwardRef, useMemo } from "react";

import { Page, Section } from "../types.d";
import {
  PageLayoutProps,
  PageListingProps,
  SectionLayoutProps,
} from "./page-listing.d";

export default forwardRef<HTMLUListElement, PageListingProps>(
  function PageListing(
    { collection, sx, onShow, current, ...props }: PageListingProps,
    ref
  ) {
    return (
      <List
        {...props}
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          ...sx,
        }}
        subheader={<li />}
        ref={ref}
      >
        <li>
          <ul>
            {collection?.pages.map((page) => {
              if ((page as Section).pages) {
                return (
                  <SectionLayout
                    section={page as Section}
                    key={page.id}
                    onShow={onShow}
                    current={current}
                  />
                );
              }
              return (
                <PageLayout
                  page={page as Page}
                  key={page.id}
                  onShow={onShow}
                  current={current}
                />
              );
            })}
          </ul>
        </li>
      </List>
    );
  }
);

function SectionLayout({ section, onShow, current }: SectionLayoutProps) {
  return (
    <>
      <ListSubheader sx={{ color: "warning.main" }}>{section.name}</ListSubheader>
      {section.pages.map((page) => {
        return (
          <PageLayout
            page={page}
            key={page.id}
            onShow={onShow}
            current={current}
          />
        );
      })}
    </>
  );
}

function PageLayout({ page, onShow, current }: PageLayoutProps) {
  const lines = useMemo(() => {
    return page.lines.map((line, index) => ({
      id: `${page.id}-l${index}`,
      content: line?.replace(/^\{(xs|sm|lg|xl)\}/, ""),
    }));
  }, [page.id, page.lines]);

  const handleShow = () => {
    onShow?.(page.id ?? "", page);
  };

  const selected = current === page.id;

  return (
    <>
      <ListItem
        id={page.id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          ...(selected && {
            bgcolor: "success.main",
            color: "success.contrastText",
          }),
        }}
      >
        <Box>
          {lines.map((line) => (
            <Typography variant="caption" component="div" key={line.id}>
              {line.content}
            </Typography>
          ))}
        </Box>
        {!selected && (
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleShow}
          >
            Show
          </Button>
        )}
      </ListItem>
      <Divider component="li" />
    </>
  );
}
