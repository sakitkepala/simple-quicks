import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../../app.css";

export const conversationItem = style({
  paddingBlock: 22,
  display: "flex",
  gap: 17,
});

export const mediaIcon = style({
  flexShrink: 0,
});

export const personIconWrapper = style({
  position: "relative",
  zIndex: 0,
  width: 51,
});

export const personIconBase = style({
  vars: { "--size": "34px" },

  position: "absolute",
  top: 0,

  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  selectors: {
    "&:nth-child(2)": {
      right: 0,
    },
  },
});

export const personIcon = styleVariants({
  gray: [personIconBase, { backgroundColor: color.primaryGray10, color: "rgba(0, 0, 0, 0.54)" }],
  blue: [personIconBase, { backgroundColor: color.primaryBlue, color: "rgba(255, 255, 255, 1)" }],
});

export const mediaContent = style({
  flexGrow: 1,
  position: "relative",
  zIndex: 0,
  paddingRight: "1.75rem",
  color: color.primaryGray30,
});

export const unreadIndicator = style({
  vars: { "--size": "10px" },
  position: "absolute",
  top: "50%",
  right: 1,
  transform: "translatey(-50%)",
  width: "var(--size)",
  height: "var(--size)",
  overflow: "hidden",
  borderRadius: "50%",
  backgroundColor: color.indicatorRed,
});

export const header = style({
  display: "flex",
  gap: "1rem",
});

export const title = style({
  color: color.primaryBlue,
  fontSize: "1rem",
  fontWeight: 700,
});

export const date = style({
  whiteSpace: "nowrap",
});

export const preview = style({
  marginTop: "0.5em",
});

export const name = style({
  fontWeight: 700,
});
