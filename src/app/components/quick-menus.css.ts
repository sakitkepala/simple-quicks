import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  gap: "1.625rem",
  alignItems: "center",
});

export const containerOpen = style({
  selectors: {
    [`${container}&`]: {
      gap: "1.9375rem",
    },
  },
});

export const menuOptions = style({
  display: "flex",
  gap: "1.625rem",
});

export const quickTrigger = style({
  vars: {
    "--size": "4.25rem",
  },

  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 1)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const menuTrigger = style({
  vars: {
    "--size": "3.75rem",
  },

  position: "relative",
  zIndex: 0,

  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 1)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontSize: "inherit",
});

export const menuTriggerLabel = style({
  position: "absolute",
  top: "calc(-1 * (1em + 1em))",
  marginBottom: "1rem",
  display: "flex",
  height: "1em",
  color: "rgba(255, 255, 255, 1)",
  fontWeight: 600,
});

export const menuPanelContainer = style({
  flexGrow: 1,
  width: 734,
  maxHeight: 737,
});

export const menuPanel = style({
  height: "100%",
  padding: "1.5rem 2rem",
  border: "solid 1px rgba(189, 189, 189, 1)",
  borderRadius: 4,
  backgroundColor: "#ffffff",
});

export const menuContainer = style({
  position: "absolute",
  right: 24,
  bottom: 27,
  height: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});
