import { style } from "@vanilla-extract/css";
import { color } from "../../app.css";

export const layout = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const toolbar = style({
  flexShrink: 0,
  paddingTop: "var(--panel-padding-block)",
  paddingInline: "var(--panel-padding-inline)",

  display: "flex",
  justifyContent: "space-between",
});

export const select = style({
  padding: "0.75rem 1rem",
  boxShadow: `inset 0 0 0 1px ${color.primaryGray20}`,
  borderRadius: 5,
});

export const actionButton = style({
  padding: "0.75rem 1rem",
  border: "none",
  borderRadius: 5,
  backgroundColor: color.primaryBlue,
  color: "rgba(255, 255, 255, 1)",
  fontSize: "inherit",
  fontFamily: "inherit",
  fontWeight: 700,
});

export const taskList = style({
  flexGrow: 1,
  minHeight: 0,
  paddingLeft: "var(--panel-padding-inline)",
  paddingRight: "calc(var(--panel-padding-inline) - var(--scrollbar-width))",
  paddingBottom: "var(--panel-padding-block)",
});
