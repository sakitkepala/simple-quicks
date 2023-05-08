import { style } from "@vanilla-extract/css";

export const root = style({
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

export const viewport = style({
  position: "relative",
  width: "100%",
  height: "100%",
  paddingRight: "var(--scrollbar-width, 12px)",
});
