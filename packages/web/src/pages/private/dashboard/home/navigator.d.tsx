import { BoxProps } from "@mui/material";
import { PageCollection } from "../types.d";

export interface NavigatorProps extends BoxProps {
  selected: number;
  items: PageCollection[];
  onNext?: () => void;
  onPrev?: () => void;
}
