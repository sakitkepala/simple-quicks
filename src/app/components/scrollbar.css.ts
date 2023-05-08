import { style } from "@vanilla-extract/css";

export const scrollbar = style({
  display: "flex",
  userSelect: "none",
  touchAction: "none",
  padding: 2,

  selectors: {
    [`&[data-orientation='vertical']`]: {
      width: "var(--scrollbar-width, 12px)",
    },
    [`&[data-orientation='horizontal']`]: {
      flexDirection: "column",
      height: "var(--scrollbar-width, 12px)",
    },
  },
});

export const thumb = style({
  position: "relative",
  flex: 1,
  borderRadius: "var(--scrollbar-width, 12px)",
  backgroundColor: "rgba(189, 189, 189, 1)",
});
