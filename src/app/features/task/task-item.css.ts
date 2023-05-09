import { style } from "@vanilla-extract/css";
import { color } from "../../app.css";

export const task = style({
  paddingBlock: "1.375rem",
  paddingRight: "1.25rem",

  display: "flex",
  gap: "1.5rem",
  color: color.primaryGray30,
});

export const checkboxCol = style({
  flexShrink: 0,
});

export const main = style({
  flexGrow: 1,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
});

export const toolbar = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "1.25rem",
});

export const date = style({
  whiteSpace: "nowrap",
  color: color.indicatorRed,
});

export const title = style({
  flexGrow: 1,
  fontSize: "1rem",
  fontWeight: 700,
});
