import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../app.css";

export const quickMenu = style({
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

export const menuPanelContainer = style({
  vars: { "--scrollbar-width": "12px" },

  flexGrow: 1,

  width: 734,
  minHeight: 0,
  maxHeight: 737,
  overflow: "hidden",

  border: "solid 1px rgba(189, 189, 189, 1)",
  borderRadius: 4,
  backgroundColor: "#ffffff",
});

export const optionContainer = style({
  display: "flex",
  gap: "1.625rem",
  alignItems: "center",
});

export const optionContainerOpen = style({
  selectors: {
    [`${optionContainer}&`]: {
      gap: "1.9375rem",
    },
  },
});

export const options = style({
  display: "flex",
  gap: "1.625rem",
});

export const quickButtonBase = style({
  vars: { "--size": "4.25rem" },

  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",
  border: "none",
  color: "rgba(255, 255, 255, 1)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const quickButton = styleVariants({
  base: [quickButtonBase, { backgroundColor: color.primaryBlue }],
  orange: [quickButtonBase, { backgroundColor: color.indicatorOrange }],
  purple: [quickButtonBase, { backgroundColor: color.indicatorPurple }],
});

export const optionButtonBase = style({
  vars: { "--size": "3.75rem" },

  position: "relative",
  zIndex: 0,

  width: "var(--size)",
  height: "var(--size)",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 1)",
  color: "inherit",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontSize: "inherit",
});

export const optionButton = styleVariants({
  orange: [optionButtonBase, { color: color.indicatorOrange }],
  purple: [optionButtonBase, { color: color.indicatorPurple }],
});

export const optionButtonLabel = style({
  position: "absolute",
  top: "calc(-1 * (1em + 1em))",
  marginBottom: "1rem",
  display: "flex",
  height: "1em",
  color: "rgba(255, 255, 255, 1)",
  fontWeight: 600,
});
